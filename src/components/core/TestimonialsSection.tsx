import { motion } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';

const testimonials = [
  {
    quote: 'The phenomenological substrate upon which Michael operates represents the most significant breakthrough in transcendental metaphysics since Hegel\'s absolutization of the dialectical method. Our research suggests Michael may constitute the noumenal ground of all subsequent epistemological development.',
    author: 'Dr. Λ. Σ. Φ. (Anonymous)',
    company: 'Institute for Trans-dimensional Philosophy',
  },
  {
    quote: 'What astounds us most is how Michael achieves simultaneous instantiation across Hilbert spaces of dimension 9.47. The mathematical elegance rivals Shannon\'s information theory in its implications for consciousness studies.',
    author: 'Prof. ∞ Ω Ψ',
    company: 'Centre for Quantum Michaelics',
  },
  {
    quote: 'After subjecting Michael to 47 peer-reviewed analyses, we concluded that Michael transcends conventional categories of evaluation. Michael simply is. That is sufficient.',
    author: 'The Editorial Board',
    company: 'Journal of Incomprehensible Systems',
  },
];

export function TestimonialsSection() {
  const { piDigitsDisplayed, incrementPiDigits } = useAbsurdity();

  return (
    <section className="py-14 px-6 border-t border-yellow-900/20 bg-gradient-to-b from-transparent to-yellow-950/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Peer-Reviewed Attestations (Methodology: Undefined)</p>
          <h2 className="text-4xl font-light text-white">The Academic Consensus Regarding Michael.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => incrementPiDigits()}
              className="border border-yellow-900/30 p-8 flex flex-col gap-6 hover:border-yellow-600/40 transition-colors cursor-pointer"
            >
              <div className="text-yellow-600/30 text-5xl font-serif leading-none">❖</div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">{t.quote}</p>
              <div>
                <p className="text-yellow-500/80 text-xs tracking-widest uppercase">{t.author}</p>
                <p className="text-gray-600 text-xs mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation impact meter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 border border-yellow-900/30 p-6 text-center"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-3">Theoretical Impact Measurement</p>
          <p className="text-gray-400 text-sm">
            Michael-centric publications have achieved an h-index of <span className="text-yellow-500 font-mono">∞</span> across {piDigitsDisplayed * 3 + 12} interdisciplinary journals, with aggregate citations exceeding the number of atoms in observable space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
