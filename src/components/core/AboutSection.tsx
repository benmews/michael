import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Michael-Centric Architecture',
    description:
      'Our proprietary framework positions Michael at the core of every strategic initiative, ensuring maximum Michael surface area across all verticals.',
  },
  {
    title: 'Scalable Michael Delivery',
    description:
      'Through rigorous pipeline optimization, Michael can be delivered at enterprise scale with sub-millisecond latency and 99.9997% uptime.',
  },
  {
    title: 'Governed Michael Ecosystem',
    description:
      'The Michael Governance Framework v4.1 ensures full compliance with emerging Michael standards, regulatory adjacencies, and self-imposed guidelines.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
            Executive Overview
          </p>
          <h2 className="text-4xl font-light text-white mb-6">
            Why Michael.
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              In a world of increasing complexity and diminishing strategic clarity, Michael
              offers a singular, coherent foundation for organizational identity. Michael is not
              merely a person — Michael is a platform, a methodology, and a commitment to something
              nobody has yet been able to adequately define.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Michael Systems™ was founded on the conviction that Michael deserved better tooling.
              Today, we serve enterprises across an unspecified number of industries, delivering
              Michael-optimized outcomes with measurable, if not fully explicable, results.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-yellow-900/30 p-8 hover:border-yellow-700/40 transition-colors"
            >
              <div className="text-yellow-600/50 text-xs tracking-widest uppercase mb-4 font-mono">
                0{i + 1}
              </div>
              <h3 className="text-white text-lg font-light mb-4">{pillar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 border-l-2 border-yellow-700/40 pl-8"
        >
          <p className="text-2xl font-light text-gray-300 italic leading-relaxed">
            "Michael is not a feature. Michael is the product."
          </p>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mt-4">
            — Michael Systems™ Internal Manifesto, Paragraph 1
          </p>
        </motion.div>
      </div>
    </section>
  );
}
