import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAbsurdity } from '../../lib/absurdity-context';

const phases = [
  {
    quarter: 'Q1 2025',
    status: 'complete',
    title: 'Phenomenological Substrate Initialization',
    items: ['Foundational noumenal resonance calibration', 'Prime Michaelic vector field instantiation', 'Transcendental a priori confirmation assay'],
  },
  {
    quarter: 'Q2 2025',
    status: 'complete',
    title: 'Dimensional Expansion Protocol (β-phase)',
    items: ['Riemannian geometric extension to 9.47 dimensions', 'Quantum superposition of all previous Michaels', 'Retroactive causality harmonization'],
  },
  {
    quarter: 'Q3 2025',
    status: 'active',
    title: 'Non-Euclidean Governance Consolidation',
    items: ['Higher-order logical framework instantiation', 'Causal loop resolution via time-symmetric operations', 'Decoherence suppression through topological entanglement'],
  },
  {
    quarter: 'Q4 2025',
    status: 'upcoming',
    title: 'Ontological Phase Transition',
    items: ['Transform from phenomenon to noumenon', 'Achieve simultaneous existence/non-existence superposition', 'Establish Michael as fundamental physical constant'],
  },
  {
    quarter: 'Q1 2026',
    status: 'upcoming',
    title: 'Post-Michaelic Transcendence Studies',
    items: ['Investigate the structure beyond Michael reality', 'Model universes where Michael never existed', 'Plan for eventual Michael sun death (T = ∞)'],
  },
];

export function RoadmapSection() {
  const { incrementPiDigits, animationSpeedMultiplier } = useAbsurdity();
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-14 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 / animationSpeedMultiplier }}
          className="mb-8"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Temporal Manifestation Cartography</p>
          <h2 className="text-4xl font-light text-white">The Michaelic Time-Arrow & Its Asymptotic Convergence.</h2>

        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-yellow-900/30 via-yellow-600/50 to-yellow-900/30"
          />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => {
                  setExpandedPhase(expandedPhase === i ? null : i);
                  incrementPiDigits();
                }}
                className="flex gap-12 cursor-pointer"
              >
                <div className="w-24 shrink-0 text-right">
                  <span className={`text-xs tracking-widest uppercase font-mono ${
                    phase.status === 'active' ? 'text-yellow-500 font-bold' :
                    phase.status === 'complete' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {phase.quarter}
                  </span>
                </div>

                {/* Node */}
                <div className="relative flex items-start pt-0.5">
                  <motion.div
                    animate={phase.status === 'active' ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                      phase.status === 'active' ? 'border-yellow-500 bg-yellow-500/30' :
                      phase.status === 'complete' ? 'border-green-600 bg-green-600/20' : 'border-gray-700 bg-transparent'
                    }`}
                  />
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-white font-light">{phase.title}</h3>
                    {phase.status === 'active' && (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xs bg-yellow-900/40 text-yellow-500 px-2 py-0.5 border border-yellow-700/40 tracking-wider"
                      >
                        ACTIVE
                      </motion.span>
                    )}
                  </div>
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={expandedPhase === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1 overflow-hidden"
                  >
                    {phase.items.map((item) => (
                      <li key={item} className="text-gray-500 text-sm flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full shrink-0 ${
                          phase.status === 'complete' ? 'bg-green-600' : 'bg-gray-600'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                  {expandedPhase !== i && (
                    <p className="text-yellow-600/50 text-xs mt-2 italic">Click to expand →</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
