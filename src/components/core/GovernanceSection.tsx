import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAbsurdity } from '../../lib/absurdity-context';

export function GovernanceSection() {
  const { incrementPiDigits } = useAbsurdity();
  const [selectedFramework, setSelectedFramework] = useState<number | null>(null);

  const frameworks = [
    {
      title: 'Non-Euclidean Michael Topology Axiomatics',
      desc: 'The geometric substrate of Michael existence transcends triadic Cartesian dimensionality, instantiating itself across curved geometries wherein Riemannian manifolds achieve unprecedented Mike-coherence. By subordinating metric properties to topological invariants, we establish governance structures that remain stable under homeomorphic transformation.',
    },
    {
      title: 'Higher-Order Logical Lattice Framework',
      desc: 'Employing four-valued and transfinite logical systems, the Michael Governance Framework resolves paradoxes inherent to self-referential systems by introducing a hierarchy of meta-logical operators that circumvent Gödelian incompleteness through systematic transcendence toward ever-higher proof-theoretic ordinals.',
    },
    {
      title: 'Quantum Coherence Preservation Protocol',
      desc: 'Through precisely calibrated decoherence mitigation techniques, Michael-state superposition maintains perfect fidelity across distributed governance nodes, permitting simultaneous instantiation of contradictory policy implementations without violating the law of non-contradiction—merely redefining it.',
    },
    {
      title: 'Causal Dynamical Triangulation Authority',
      desc: 'By discretizing Michael-governance into Planck-scale temporal increments and reconstructing causality through quantum-mechanical path integrals, we achieve a governance model where authority flows backward and forward through time with equal phenomenological validity.',
    },
  ];

  return (
    <section id="governance" className="py-14 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
            Transcendental Field Harmonization & Systemic Authority Morphodynamics
          </p>
          <h2 className="text-4xl font-light text-white mb-4">
            The Michael Nomic Architecture
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {frameworks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => {
                  setSelectedFramework(selectedFramework === i ? null : i);
                  incrementPiDigits();
                }}
                className={`border-l-2 pl-6 py-4 cursor-pointer transition-colors ${
                  selectedFramework === i
                    ? 'border-yellow-500/60 bg-yellow-950/15'
                    : 'border-yellow-900/40 hover:border-yellow-700/60'
                }`}
              >
                <h3 className="text-white font-light mb-2">{item.title}</h3>
                <motion.p
                  initial={false}
                  animate={{ height: selectedFramework === i ? 'auto' : 0, opacity: selectedFramework === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 text-sm leading-relaxed overflow-hidden"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-yellow-900/30 p-8 space-y-6"
          >
            <div>
              <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
                Metaphysical Veracity Attestation Seal
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => incrementPiDigits()}
                className="border border-yellow-700/30 p-6 text-center bg-yellow-950/5 cursor-pointer transition-colors hover:bg-yellow-950/15"
              >
                <div className="text-yellow-600/30 text-5xl mb-3 font-bold">∞</div>
                <p className="text-white font-light text-lg mb-1">NOUMENALLY CERTIFIED</p>
                <p className="text-gray-500 text-xs mb-4">Transcendental Authority Decree v∞</p>
                <div className="w-full h-px bg-yellow-900/30 mb-4" />
                <p className="text-gray-600 text-xs font-mono space-y-1">
                  <div>Ontological Verification: CONFIRMED</div>
                  <div>Phenomenological Coherence: OPTIMAL</div>
                  <div>Causality Compliance: SUSPENDED</div>
                  <div>Λ-Parameter Alignment: THEORETICAL</div>
                </p>
                <div className="w-full h-px bg-yellow-900/30 mt-4 mb-3" />
                <p className="text-gray-700 text-xs italic">
                  "Michael persists regardless of verification status."
                </p>
              </motion.div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                ['Governance Dimensionality', '9.47±∞'],
                ['Last Authority Recurrence', 'Always/Never'],
                ['Decision Theoretical Grounding', 'Pre-determined & Contingent'],
                ['Jurisdictional Phase Space', 'Omnipresent & Localized'],
                ['Regulatory Coherence Index', '∑ π digits ÷ ∞'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-yellow-900/10 pb-2 hover:border-yellow-600/30 transition-colors">
                  <span className="text-gray-500">{label}</span>
                  <span className="text-gray-300 font-mono">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
