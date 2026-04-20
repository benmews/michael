const items = [
  'MICHAEL MOMENTUM: 141% ↑',
  'MICHAEL PRESENCE: NOMINAL',
  'ADVISORY #MKP-2025-0014: ELEVATED MOMENTUM — NO ACTION REQUIRED',
  'NEXT MICHAEL REVIEW: Q4 2025',
  'MICHAEL READINESS: TRANSCENDENT',
  'SENTIMENT INDEX: STRATEGICALLY ROBUST',
  'MICHAEL SYSTEMS™ — ALL SYSTEMS OPERATIONAL',
  'ENTERPRISE MICHAEL MODE: AVAILABLE',
  'MICHAEL CERTIFICATION EXPIRES: 2027-12-31',
  'LATEST INSIGHT: CROSS-FUNCTIONAL MICHAEL COHERENCE NOMINAL',
];

export function NewsTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-yellow-950/20 border-t border-b border-yellow-900/30 py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="text-yellow-600/60 text-xs tracking-widest uppercase mx-8">
            {item}
            <span className="mx-4 text-yellow-900">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
