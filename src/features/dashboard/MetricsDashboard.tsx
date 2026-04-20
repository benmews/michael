import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MichaelMetric } from '../../types/michael';

const generateMetrics = (): MichaelMetric[] => [
  { label: 'Michael Presence', value: 97, unit: '%', trend: 'up' },
  { label: 'Michael Momentum', value: 141, unit: '%', trend: 'up', critical: true },
  { label: 'Strategic Alignment', value: 'Unclear', trend: 'lateral' },
  { label: 'Michael Velocity', value: parseFloat((88 + Math.random() * 15).toFixed(1)), unit: 'Mₛ/h', trend: 'up' },
  { label: 'Coherence Index', value: parseFloat((92 + Math.random() * 6).toFixed(2)), unit: '%', trend: 'up' },
  { label: 'Residual Michael', value: parseFloat((4 + Math.random() * 2).toFixed(3)), unit: 'units', trend: 'down' },
];

function MetricCard({ metric, delay }: { metric: MichaelMetric; delay: number }) {
  const trendColor =
    metric.trend === 'up' ? 'text-green-500' :
    metric.trend === 'down' ? 'text-red-500' :
    metric.trend === 'unclear' ? 'text-yellow-500' : 'text-gray-400';
  const trendSymbol =
    metric.trend === 'up' ? '↑' :
    metric.trend === 'down' ? '↓' :
    metric.trend === 'lateral' ? '→' : '?';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`border p-6 relative ${
        metric.critical ? 'border-yellow-600/60 bg-yellow-950/10' : 'border-yellow-900/30'
      }`}
    >
      {metric.critical && (
        <div className="absolute top-3 right-3 text-yellow-500 text-xs tracking-widest uppercase animate-pulse">
          ELEVATED
        </div>
      )}
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">{metric.label}</p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-light text-white font-mono">
          {metric.value}
        </span>
        {metric.unit && <span className="text-gray-500 text-sm mb-1">{metric.unit}</span>}
        <span className={`${trendColor} text-lg mb-0.5 ml-auto`}>{trendSymbol}</span>
      </div>
    </motion.div>
  );
}

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState<MichaelMetric[]>(generateMetrics());

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateMetrics());
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="metrics" className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Live Performance Intelligence</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl font-light text-white">Michael KPI Dashboard</h2>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
              <span className="tracking-widest uppercase">Live · Refreshing every 4s</span>
            </div>
          </div>
        </motion.div>

        <p className="text-gray-600 text-sm mb-12 max-w-2xl">
          Real-time Michael performance indicators. Values are computed continuously by the Michael Analytics Engine.
          Elevated readings may require Michael governance review.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} delay={i * 0.08} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 border border-yellow-900/20 p-4 flex items-center justify-between gap-4 flex-wrap"
        >
          <p className="text-gray-600 text-xs">
            ⚠ Michael Momentum exceeds 100%. This is expected and intentional. No action required.
          </p>
          <span className="text-yellow-700/50 text-xs tracking-widest uppercase">Advisory #MKP-2025-0014</span>
        </motion.div>
      </div>
    </section>
  );
}
