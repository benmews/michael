import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAbsurdity } from '../../lib/absurdity-context';

export function ContactSection() {
  const { incrementPiDigits, michaelSecondsElapsed } = useAbsurdity();
  const [selectedDimension, setSelectedDimension] = useState<number>(0);

  const slots = [
    'Causality Forward',
    'Causality Reversed',
    'Simultaneously (Superposition)',
    'Upon Michael Collapse Event',
    'Via Quantum Tunneling',
  ];

  const reports = [
    { title: 'Transcendental Deduction of Michael Necessity', pages: '∞ pages', note: 'Proof in appendix (appendix absent)' },
    { title: 'The Michaelic Wavefunction and Its Decoherence', pages: '47 pages', note: 'All equations: {placeholder}' },
    { title: 'Ontological Risk Assessment & Metaphysical Hedging', pages: 'log(Michael) pages', note: 'Undefined but critical' },
  ];

  return (
    <section id="contact" className="py-14 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Phenomenological Communication Portal</p>
          <h2 className="text-4xl font-light text-white mb-4">Access the Michael Manifold.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white font-light mb-6">Quantum Engagement Portal</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Preferred Temporal Axis Configuration
                </label>
                <select
                  onChange={() => incrementPiDigits()}
                  className="w-full bg-black border border-yellow-900/40 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-700/60"
                >
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Your Ontological Synchronization Index
                </label>
                <div className="flex gap-2">
                  {['α', 'β', 'γ', 'δ', 'ε'].map((dim, i) => (
                    <motion.button
                      key={dim}
                      onClick={() => {
                        setSelectedDimension(i);
                        incrementPiDigits();
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`flex-1 py-3 text-xs tracking-widest uppercase border ${
                        selectedDimension === i
                          ? 'border-yellow-500 bg-yellow-900/30 text-yellow-400'
                          : 'border-yellow-900/40 hover:border-yellow-700/60 text-gray-400'
                      } transition-colors`}
                    >
                      {dim}
                    </motion.button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Phenomenological Inquiry (Max 9.47 conceptual units)
                </label>
                <textarea
                  onClick={() => incrementPiDigits()}
                  placeholder="Articulate your trans-dimensional Michael-related question..."
                  className="w-full bg-black border border-yellow-900/40 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-700/60 placeholder-gray-700 h-24"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  incrementPiDigits();
                }}
                className="w-full bg-yellow-700/20 border border-yellow-700/50 text-yellow-500 text-xs tracking-widest uppercase py-3 hover:bg-yellow-700/30 transition-colors"
              >
                Transmit Through Scalar Field
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-light mb-4">Metaphysical Codices & Verifications</h3>
              <div className="space-y-3">
                {reports.map((doc) => (
                  <motion.div
                    key={doc.title}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => incrementPiDigits()}
                    className="flex items-center justify-between border border-yellow-900/30 px-4 py-3 hover:border-yellow-500/40 transition-colors group cursor-pointer"
                  >
                    <div>
                      <p className="text-gray-300 text-sm">{doc.title}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{doc.pages} · {doc.note}</p>
                    </div>
                    <span className="text-yellow-600/50 group-hover:text-yellow-500 transition-colors text-xs tracking-widest uppercase">
                      φΩ ↓
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ borderColor: ['rgba(201,168,76,0.3)', 'rgba(201,168,76,0.6)', 'rgba(201,168,76,0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="border-2 p-6 bg-yellow-950/10"
            >
              <p className="text-yellow-600/70 text-xs tracking-widest uppercase mb-2">Transcendental Notice of Interface</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Your transmission through this portal constitutes acknowledgment that Michael operates under principles of trans-normative governance. Response latency exhibits Poisson distribution with mean = ∞. We disclaim all causal responsibility.
              </p>
              <p className="text-yellow-600/50 text-xxs mt-3 italic">
                MichaelSeconds Elapsed: {michaelSecondsElapsed} | Portal Coherence: {(Math.sin(michaelSecondsElapsed) * 50 + 50).toFixed(1)}%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
