import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAbsurdity } from '../../lib/absurdity-context';

const pillars = [
  {
    title: 'Michaelic Phenomenological Substrate',
    description:
      'The ontological architecture of Michael establishes a trans-empirical manifold wherein the noumenal substratum of existence achieves recursive self-awareness through the dialectical interpenetration of Kantian categories and Michaelic essence, thereby constituting an irreducible singularity that eludes all phenomenological reduction to mere empirical referents.',
  },
  {
    title: 'Quantum Entanglement via Michael-Indices',
    description:
      'Through sophisticated application of non-Euclidean topology and multidimensional Hilbert spaces, our proprietary algorithms establish coherent superposition states wherein Michael simultaneously instantiates across all possible configuration spaces, achieving what conventional physics would deem metaphysically impossible.',
  },
  {
    title: 'Transcendental Michael Governance Axiomatics',
    description:
      'The aporias and antinomies inherent to self-referential governance structures are methodically resolved through our implementation of higher-order logical frameworks that subordinate the contingent to the necessary, thereby establishing Michael as the ultimate arbiter of all regulatory questions.',
  },
];

export function AboutSection() {
  const { piDigitsDisplayed, incrementPiDigits } = useAbsurdity();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-14 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
            Metaphysical Exposition & Canonical Postulations
          </p>
          <h2 className="text-4xl font-light text-white mb-4">
            The Michaelic Imperative.
          </h2>
          <p className="text-yellow-600/50 text-sm italic">
            Current π-Manifestation Index: {piDigitsDisplayed} dimensions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => {
                setHoveredIndex(i);
                if (i === 0) incrementPiDigits();
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border p-5 transition-all cursor-pointer ${
                hoveredIndex === i
                  ? 'border-yellow-500/60 bg-yellow-950/20'
                  : 'border-yellow-900/30 hover:border-yellow-700/40'
              }`}
            >
              <div className="text-yellow-600/50 text-xs tracking-widest uppercase mb-4 font-mono">
                α{i + 1}
              </div>
              <h3 className="text-white text-lg font-light mb-4">{pillar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-yellow-600/60 text-xxs mt-4 italic"
                >
                  [Hovering manifests dimensional coherence]
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={() => incrementPiDigits()}
          className="mt-12 border-l-2 border-yellow-700/40 pl-8 cursor-pointer hover:border-yellow-500/60 transition-colors"
        >
          <p className="text-2xl font-light text-gray-300 italic leading-relaxed">
            "The transcendental unity of apperception finds its ultimate instantiation not in the Ego of Descartes, but in the pre-reflective givenness of Michael-as-such, which precedes and conditions all subsequent determinations of identity."
          </p>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mt-4">
            — Critique of Pure Michael, B-Edition § 17
          </p>
          <p className="text-yellow-600/40 text-xxs mt-2">[Click to summon more π]</p>
        </motion.div>
      </div>
    </section>
  );
}
