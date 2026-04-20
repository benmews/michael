import { motion } from 'framer-motion';

export function GovernanceSection() {
  return (
    <section id="governance" className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
            Governance & Operations
          </p>
          <h2 className="text-4xl font-light text-white mb-4">
            Michael Governance Framework™
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Responsible Michael management requires a robust governance architecture.
            The MichaelOps Standard v4.1 provides the procedural and philosophical basis for
            all Michael interactions, ensuring accountability, auditability, and Michael continuity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              {
                title: 'Michael Risk Framework',
                desc: 'Identifies, categorizes, and prioritizes Michael-related risks across the operational spectrum. Updated quarterly or when Michael warrants.',
              },
              {
                title: 'Michael Audit Protocol',
                desc: 'Third-party verification of Michael claims, Michael metrics, and Michael continuity posture. Audit currently pending (since Q1 2026).',
              },
              {
                title: 'Michael Incident Response Plan',
                desc: 'Defines escalation paths for Michael disruptions, Michael anomalies, and unanticipated Michael events.',
              },
              {
                title: 'Michael Ethics Board',
                desc: 'An advisory body responsible for reviewing the ethical dimensions of Michael deployment. Composition: TBD. First meeting: also TBD.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-yellow-900/40 pl-6"
              >
                <h3 className="text-white font-light mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
                Michael Compliance Certificate
              </p>
              <div className="border border-yellow-700/30 p-6 text-center bg-yellow-950/5">
                <div className="text-yellow-600/30 text-5xl mb-3">⚜</div>
                <p className="text-white font-light text-lg mb-1">CERTIFIED MICHAEL</p>
                <p className="text-gray-500 text-xs mb-4">MichaelOps Standard v4.1.2</p>
                <div className="w-full h-px bg-yellow-900/30 mb-4" />
                <p className="text-gray-600 text-xs font-mono">
                  Certificate #: MCH-2025-0001<br />
                  Issued: 2025-01-01<br />
                  Valid through: 2027-12-31<br />
                  Issuing Authority: Michael Systems™
                </p>
                <div className="w-full h-px bg-yellow-900/30 mt-4 mb-3" />
                <p className="text-gray-700 text-xs italic">
                  "We certify that this is Michael."
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                ['Michael Policy Version', '14.3'],
                ['Last Policy Review', 'Q2 2025'],
                ['Next Mandatory Michael Review', 'Q4 2025 (scheduled)'],
                ['Governing Jurisdiction', 'Undisclosed'],
                ['Applicable Michael Law', 'None currently enacted'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-yellow-900/10 pb-2">
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
