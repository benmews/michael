import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Champion {
  id: string;
  name: string;
  traits: string[];
  tier: number;
  x: number;
  y: number;
}

interface TraitEdge {
  a: number;
  b: number;
  trait: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SVG_W = 780;
const SVG_H = 460;

const TIER_COLOR: Record<number, string> = {
  1: '#9ca3af',
  2: '#4ade80',
  3: '#60a5fa',
  4: '#c084fc',
  5: '#fbbf24',
};

const TIER_R: Record<number, number> = {
  1: 5, 2: 6, 3: 7, 4: 8, 5: 10,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function traitColor(trait: string): string {
  let h = 5381;
  for (let i = 0; i < trait.length; i++) {
    h = ((h << 5) + h) ^ trait.charCodeAt(i);
    h = h >>> 0;
  }
  return `hsl(${h % 360}, 68%, 58%)`;
}

// ─── Data loading + force simulation ─────────────────────────────────────────

async function fetchGraph(): Promise<{
  champions: Champion[];
  edges: TraitEdge[];
  setNum: number;
  patch: string;
}> {
  const versions: string[] = await fetch(
    'https://ddragon.leagueoflegends.com/api/versions.json'
  ).then(r => r.json());

  const patch = versions[0];

  const json: { data: Record<string, { id: string; name: string; traits?: string[]; tier?: number }> } =
    await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/tft-champion.json`
    ).then(r => r.json());

  const all = Object.values(json.data ?? {});
  if (all.length === 0) throw new Error('Empty champion data from Data Dragon');

  // Group champions by set prefix and pick the set with the MOST valid champions
  // (highest set number is unreliable — stray beta/special IDs skew it)
  const bySets = new Map<number, typeof all>();
  for (const c of all) {
    const m = c.id?.match(/^TFT(\d+)_/);
    if (!m) continue;
    const n = parseInt(m[1]);
    if (!bySets.has(n)) bySets.set(n, []);
    bySets.get(n)!.push(c);
  }

  let maxSet = 0;
  let bestCount = 0;
  for (const [n, champs] of bySets) {
    const valid = champs.filter(
      c => c.name && Array.isArray(c.traits) && c.traits.length > 0
    ).length;
    if (valid > bestCount) { bestCount = valid; maxSet = n; }
  }
  if (maxSet === 0) throw new Error('Could not determine current TFT set');

  const filtered = (bySets.get(maxSet) ?? []).filter(
    c => c.name && Array.isArray(c.traits) && c.traits.length > 0
  );

  if (filtered.length < 5)
    throw new Error(`Only ${filtered.length} champions found for Set ${maxSet}`);

  // Initial circular layout
  const champions: Champion[] = filtered.map((c, i) => ({
    id: c.id,
    name: c.name,
    traits: c.traits!,
    tier: c.tier ?? 1,
    x: SVG_W / 2 + 190 * Math.cos((2 * Math.PI * i) / filtered.length),
    y: SVG_H / 2 + 180 * Math.sin((2 * Math.PI * i) / filtered.length),
  }));

  // Build trait edges
  const edges: TraitEdge[] = [];
  for (let i = 0; i < champions.length; i++) {
    for (let j = i + 1; j < champions.length; j++) {
      const shared = champions[i].traits.filter(t => champions[j].traits.includes(t));
      for (const trait of shared) edges.push({ a: i, b: j, trait });
    }
  }

  // Force-directed layout (synchronous, runs fast for ~60 nodes)
  type SimNode = { x: number; y: number; vx: number; vy: number };
  const sim: SimNode[] = champions.map(n => ({ x: n.x, y: n.y, vx: 0, vy: 0 }));

  const STEPS = 280;
  for (let step = 0; step < STEPS; step++) {
    const cool = 1 - step / STEPS;

    // Repulsion between all node pairs
    for (let i = 0; i < sim.length; i++) {
      for (let j = i + 1; j < sim.length; j++) {
        const dx = sim[i].x - sim[j].x;
        const dy = sim[i].y - sim[j].y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const f = (2800 / (d * d)) * cool;
        sim[i].vx += (dx / d) * f;
        sim[i].vy += (dy / d) * f;
        sim[j].vx -= (dx / d) * f;
        sim[j].vy -= (dy / d) * f;
      }
    }

    // Spring attraction along edges (rest length 65px)
    for (const e of edges) {
      const a = sim[e.a];
      const b = sim[e.b];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const f = (d - 65) * 0.028 * cool;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.vx += fx; a.vy += fy;
      b.vx -= fx; b.vy -= fy;
    }

    // Gravity toward center
    for (const n of sim) {
      n.vx += (SVG_W / 2 - n.x) * 0.004 * cool;
      n.vy += (SVG_H / 2 - n.y) * 0.004 * cool;
    }

    // Integrate + dampen + clamp
    for (const n of sim) {
      n.vx *= 0.76;
      n.vy *= 0.76;
      n.x = Math.max(16, Math.min(SVG_W - 16, n.x + n.vx));
      n.y = Math.max(16, Math.min(SVG_H - 16, n.y + n.vy));
    }
  }

  const settled = champions.map((c, i) => ({ ...c, x: sim[i].x, y: sim[i].y }));
  return { champions: settled, edges, setNum: maxSet, patch };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TFTGraphExplorer() {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [edges, setEdges] = useState<TraitEdge[]>([]);
  const [setNum, setSetNum] = useState(0);
  const [patch, setPatch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [filterTrait, setFilterTrait] = useState<string | null>(null);

  useEffect(() => {
    fetchGraph()
      .then(({ champions, edges, setNum, patch }) => {
        setChampions(champions);
        setEdges(edges);
        setSetNum(setNum);
        setPatch(patch);
        setLoading(false);
      })
      .catch(e => {
        setError(e instanceof Error ? e.message : String(e));
        setLoading(false);
      });
  }, []);

  const allTraits = useMemo(
    () => [...new Set(champions.flatMap(c => c.traits))].sort(),
    [champions]
  );

  const neighborSet = useMemo(() => {
    if (selected === null) return null;
    const s = new Set<number>([selected]);
    for (const e of edges) {
      if (e.a === selected) s.add(e.b);
      if (e.b === selected) s.add(e.a);
    }
    return s;
  }, [selected, edges]);

  // Edges to render: default = none (too cluttered). Show on selection or trait filter.
  const visibleEdges = useMemo(() => {
    if (filterTrait) return edges.filter(e => e.trait === filterTrait);
    if (selected !== null) return edges.filter(e => e.a === selected || e.b === selected);
    return [];
  }, [edges, filterTrait, selected]);

  const nodeOpacity = (i: number): number => {
    const hasContext = selected !== null || filterTrait !== null;
    if (!hasContext) return 1;
    const inTrait = filterTrait ? champions[i].traits.includes(filterTrait) : true;
    const inNeighborhood = selected !== null ? (neighborSet?.has(i) ?? false) : true;
    return inTrait && inNeighborhood ? 1 : 0.08;
  };

  // ── Loading ──────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-yellow-900/30 p-10 flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-yellow-900/40 border-t-yellow-500 rounded-full"
        />
        <p className="text-yellow-600/60 text-xs tracking-widest uppercase font-mono">
          Initializing Michael Strategic Deployment Manifold™
        </p>
        <p className="text-gray-700 text-xs font-mono">
          Fetching trans-dimensional champion topology from Riot Data Dragon…
        </p>
      </motion.div>
    );
  }

  // ── Error ────────────────────────────────────────────────────────────────

  if (error) {
    return (
      <div className="border border-red-900/30 p-8 text-center">
        <p className="text-red-400/60 text-xs font-mono tracking-widest uppercase mb-2">
          Catastrophic Topology Decoherence
        </p>
        <p className="text-gray-600 text-xs font-mono">{error}</p>
        <p className="text-gray-700 text-xs mt-2 font-mono">
          Michael has determined this error is load-bearing. Do not resolve.
        </p>
      </div>
    );
  }

  // ── Graph ────────────────────────────────────────────────────────────────

  const selChamp = selected !== null ? champions[selected] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border border-yellow-900/30 p-6 col-span-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1 font-mono">
            Michael Strategic Deployment Manifold™
          </p>
          <p className="text-gray-600 text-xs font-mono">
            TFT Set {setNum} · patch {patch} · {champions.length} champions ·{' '}
            {edges.length} trait bonds
            {selChamp && ` · ${(neighborSet?.size ?? 1) - 1} neighbors`}
          </p>
        </div>
        {(selected !== null || filterTrait !== null) && (
          <button
            onClick={() => { setSelected(null); setFilterTrait(null); }}
            className="text-xs text-yellow-600/70 hover:text-yellow-400 transition-colors font-mono border border-yellow-900/40 px-3 py-1"
          >
            ✕ RESET MANIFOLD
          </button>
        )}
      </div>

      {/* Trait filter pills */}
      <div className="flex flex-wrap gap-1 mb-4 max-h-20 overflow-y-auto">
        {allTraits.map(t => (
          <button
            key={t}
            onClick={() => { setFilterTrait(filterTrait === t ? null : t); setSelected(null); }}
            className="text-xs px-2 py-0.5 border transition-all font-mono"
            style={
              filterTrait === t
                ? { borderColor: traitColor(t), color: traitColor(t), background: `${traitColor(t)}22` }
                : { borderColor: '#1f2937', color: '#374151' }
            }
          >
            {t}
          </button>
        ))}
      </div>

      {/* SVG graph */}
      <div className="relative bg-black/50 border border-yellow-900/10 overflow-hidden">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full"
          style={{ height: 400 }}
        >
          {/* Edges */}
          {visibleEdges.map((e, idx) => {
            const a = champions[e.a];
            const b = champions[e.b];
            return (
              <line
                key={`edge-${idx}`}
                x1={a.x} y1={a.y}
                x2={b.x} y2={b.y}
                stroke={traitColor(e.trait)}
                strokeWidth={1}
                strokeOpacity={0.45}
              />
            );
          })}

          {/* Nodes */}
          {champions.map((c, i) => {
            const r = TIER_R[Math.min(c.tier, 5)] ?? 6;
            const isSel = selected === i;
            const isHov = hovered === i;
            const opacity = nodeOpacity(i);
            const color = TIER_COLOR[Math.min(c.tier, 5)] ?? '#9ca3af';

            return (
              <g
                key={c.id}
                transform={`translate(${c.x.toFixed(1)},${c.y.toFixed(1)})`}
                style={{ cursor: 'pointer', opacity }}
                onClick={() => { setSelected(selected === i ? null : i); setFilterTrait(null); }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Glow ring for selected */}
                {isSel && (
                  <circle r={r + 6} fill="none" stroke="#c9a84c" strokeWidth={1.5} strokeOpacity={0.6} />
                )}

                {/* Main node */}
                <circle
                  r={r + (isHov && !isSel ? 2 : 0)}
                  fill={color}
                  fillOpacity={0.85}
                  stroke={isHov ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)'}
                  strokeWidth={1}
                />

                {/* Small trait-colored orbital dots */}
                {c.traits.slice(0, 3).map((t, ti) => {
                  const angle = (Math.PI * 2 * ti) / c.traits.length - Math.PI / 2;
                  const dr = r + 4;
                  return (
                    <circle
                      key={t}
                      cx={dr * Math.cos(angle)}
                      cy={dr * Math.sin(angle)}
                      r={1.8}
                      fill={traitColor(t)}
                    />
                  );
                })}

                {/* Label on hover or selection */}
                {(isHov || isSel) && (
                  <text
                    y={-r - 7}
                    textAnchor="middle"
                    fill="white"
                    fontSize={9}
                    fontFamily="ui-monospace, monospace"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {c.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Selected champion detail panel */}
        {selChamp && (
          <motion.div
            key={selChamp.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-2 left-2 bg-black/92 border border-yellow-900/50 p-3 max-w-[200px]"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <p className="text-yellow-400 text-xs font-mono font-medium">{selChamp.name}</p>
            <p className="text-gray-500 text-xs mt-0.5 font-mono">{selChamp.tier}-cost unit</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {selChamp.traits.map(t => (
                <span
                  key={t}
                  className="text-xs font-mono px-1.5 py-0.5 border"
                  style={{ borderColor: traitColor(t), color: traitColor(t) }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-xs mt-2 font-mono">
              {(neighborSet?.size ?? 1) - 1} trait-linked units
            </p>
          </motion.div>
        )}

        {/* Instruction ghost when nothing active */}
        {selected === null && filterTrait === null && (
          <div className="absolute bottom-2 right-3 text-gray-800 text-xs font-mono pointer-events-none">
            click champion to expand · filter by trait above
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-3">
        {([1, 2, 3, 4, 5] as const).map(tier => (
          <span key={tier} className="flex items-center gap-1.5 text-xs text-gray-700 font-mono">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ background: TIER_COLOR[tier] }}
            />
            {tier}g
          </span>
        ))}
        <span className="text-gray-800 text-xs font-mono ml-auto">
          orbiting dots = trait affiliation
        </span>
      </div>
    </motion.div>
  );
}
