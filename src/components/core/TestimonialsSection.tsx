import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Since integrating the Michael framework, our organization has experienced a 40% increase in Michael awareness across all departments.',
    author: 'VP of Michael Operations',
    company: 'A Fortune 500 Company (Undisclosed)',
  },
  {
    quote: 'Michael has fundamentally changed how we think about existence. We no longer ask "why" — we ask "Michael."',
    author: 'Chief Michael Officer',
    company: 'Redacted per NDA',
  },
  {
    quote: 'The Michael dashboard gave us visibility into things we did not previously know needed visibility. We are still processing the implications.',
    author: 'Director of Strategic Michael Initiatives',
    company: 'Global Advisory Consortium™',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 border-t border-yellow-900/20 bg-gradient-to-b from-transparent to-yellow-950/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Client Outcomes</p>
          <h2 className="text-4xl font-light text-white">The World Has Noticed Michael.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-yellow-900/30 p-8 flex flex-col gap-6"
            >
              <div className="text-yellow-600/30 text-5xl font-serif leading-none">"</div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">{t.quote}</p>
              <div>
                <p className="text-yellow-500/80 text-xs tracking-widest uppercase">{t.author}</p>
                <p className="text-gray-600 text-xs mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
