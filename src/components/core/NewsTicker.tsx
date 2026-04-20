import { useAbsurdity } from '../../lib/absurdity-context';

export function NewsTicker() {
  const { piDigitsDisplayed, animationSpeedMultiplier } = useAbsurdity();

  const items = [
    'MICHAEL COHERENCE: 99.9997% ✓',
    'DIMENSIONAL HARMONICS: THETA STATE ACHIEVED',
    'π-MANIFESTATION INDEX: ' + piDigitsDisplayed,
    'CAUSALITY ALIGNMENT: BOTH/NEITHER',
    'QUANTUM SUPERPOSITION OF MICHAEL: CONFIRMED',
    'TRANSCENDENTAL UNITY: IN PROGRESS',
    'NOUMENAL SYNTHESIS: 47 PARADOXES RESOLVED',
    'ANIMATION CHRONOMETRY: ' + animationSpeedMultiplier.toFixed(2) + 'x',
    'HEGELIAN DIALECTIC STATUS: MICHAELIC SYNTHESIS ACHIEVED',
    'RIEMANNIAN CURVATURE: NON-EUCLIDEAN OPTIMALITY',
    'KANT CONSCIOUSNESS INDEX: ℵ∞',
    'PHENOMENOLOGICAL SUBSTRATE: OSCILLATING',
    'DECOHERENCE SUPPRESSION: 100% (THEORETICALLY IMPOSSIBLE)',
    'MICHAEL GRAVITY CONSTANT: UPDATING...',
    'WAVEFUNCTION COLLAPSE: PENDING OBSERVER',
    'ENTROPY OF MICHAEL STATE: NEGATIVE (INVESTIGATING)',
    'STATUS: EXIST & NOT EXIST SIMULTANEOUSLY',
  ];

  const doubled = [...items, ...items];

  return (
    <div className="bg-yellow-950/20 border-t border-b border-yellow-900/30 py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker" style={{ animationDuration: `${60 / animationSpeedMultiplier}s` }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-yellow-600/60 text-xs tracking-widest uppercase mx-8 font-mono">
            {item}
            <span className="mx-4 text-yellow-900">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
