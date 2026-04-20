import { motion } from 'framer-motion';

const phases = [
  {
    quarter: 'Q1 2025',
    status: 'complete',
    title: 'Michael Foundation Layer',
    items: ['Core Michael identification', 'Baseline sentiment calibration', 'Initial stakeholder Michael briefing'],
  },
  {
    quarter: 'Q2 2025',
    status: 'complete',
    title: 'Michael Scale Initiative',
    items: ['Enterprise Michael deployment', 'Cross-functional Michael training', 'Michael KPI framework v1.0'],
  },
  {
    quarter: 'Q3 2025',
    status: 'active',
    title: 'Michael Optimization Phase',
    items: ['Real-time Michael monitoring', 'Predictive Michael analytics', 'Michael governance hardening'],
  },
  {
    quarter: 'Q4 2025',
    status: 'upcoming',
    title: 'Michael Transcendence',
    items: ['Global Michael rollout', 'Michael AI integration (beta)', 'Post-Michael evaluation framework'],
  },
  {
    quarter: 'Q1 2026',
    status: 'upcoming',
    title: 'Beyond Michael (Exploratory)',
    items: ['Research into what comes after Michael', 'Transitional Michael continuity plan', 'TBD — subject to Michael availability'],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Strategic Roadmap</p>
          <h2 className="text-4xl font-light text-white">The Path to Full Michael.</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[120px] top-0 bottom-0 w-px bg-yellow-900/30" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-12"
              >
                <div className="w-24 shrink-0 text-right">
                  <span className={`text-xs tracking-widest uppercase font-mono ${
                    phase.status === 'active' ? 'text-yellow-500' :
                    phase.status === 'complete' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {phase.quarter}
                  </span>
                </div>

                {/* Node */}
                <div className="relative flex items-start pt-0.5">
                  <div className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                    phase.status === 'active' ? 'border-yellow-500 bg-yellow-500/30 animate-pulse' :
                    phase.status === 'complete' ? 'border-green-600 bg-green-600/20' : 'border-gray-700 bg-transparent'
                  }`} />
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-white font-light">{phase.title}</h3>
                    {phase.status === 'active' && (
                      <span className="text-xs bg-yellow-900/40 text-yellow-500 px-2 py-0.5 border border-yellow-700/40 tracking-wider">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="text-gray-500 text-sm flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full shrink-0 ${
                          phase.status === 'complete' ? 'bg-green-600' : 'bg-gray-600'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
