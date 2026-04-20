import { motion } from 'framer-motion';

export function ContactSection() {
  const slots = ['Soon', 'Eventually', 'When Ready', 'Upon Michael Approval', 'TBD'];

  return (
    <section id="contact" className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Investor Relations</p>
          <h2 className="text-4xl font-light text-white mb-4">Engage with Michael.</h2>
          <p className="text-gray-500 max-w-lg">
            Schedule a Michael consultation. Availability is subject to Michael's operational calendar and current strategic posture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white font-light mb-6">Book a Consultation</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Preferred Michael Engagement Window
                </label>
                <select className="w-full bg-black border border-yellow-900/40 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-700/60">
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Your Michael Readiness Level
                </label>
                <select className="w-full bg-black border border-yellow-900/40 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-700/60">
                  <option>Curious</option>
                  <option>Committed</option>
                  <option>Fully Aligned</option>
                  <option>Uncertain but present</option>
                  <option>Enterprise-grade Michael interest</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-500 block mb-2">
                  Primary Michael Use Case
                </label>
                <input
                  type="text"
                  placeholder="e.g., Strategic alignment, Existential reframing"
                  className="w-full bg-black border border-yellow-900/40 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-yellow-700/60 placeholder-gray-700"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-700/20 border border-yellow-700/50 text-yellow-500 text-xs tracking-widest uppercase py-3 hover:bg-yellow-700/30 transition-colors"
              >
                Request Michael Time
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
              <h3 className="text-white font-light mb-4">Download Reports</h3>
              <div className="space-y-3">
                {[
                  { title: 'Q3 Michael Performance Report', pages: '1 page', note: 'Includes 1 chart (units unclear)' },
                  { title: 'Annual Michael Outlook 2025', pages: '3 pages', note: 'Executive summary only' },
                  { title: 'Michael Risk Disclosure Statement', pages: '2 pages', note: 'Mostly definitions' },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="flex items-center justify-between border border-yellow-900/30 px-4 py-3 hover:border-yellow-700/40 transition-colors group cursor-pointer"
                  >
                    <div>
                      <p className="text-gray-300 text-sm">{doc.title}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{doc.pages} · {doc.note}</p>
                    </div>
                    <span className="text-yellow-600/50 group-hover:text-yellow-500 transition-colors text-xs tracking-widest uppercase">
                      PDF ↓
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-yellow-900/30 p-6 bg-yellow-950/10">
              <p className="text-yellow-600/70 text-xs tracking-widest uppercase mb-2">Michael Compliance Notice</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Engagement with Michael Systems™ is subject to the Michael Terms of Service,
                Michael Interaction Guidelines, and applicable Michael governance protocols.
                By proceeding, you acknowledge that Michael is the primary variable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
