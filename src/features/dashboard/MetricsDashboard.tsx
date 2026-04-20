import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';
import type { MichaelMetric } from '../../types/michael';

function generateMetrics(piDigits: number, gravityConstant: number, animationSpeed: number): MichaelMetric[] {
  const impossibleValue = piDigits > 10 ? parseFloat((Math.PI * piDigits).toFixed(4)) : 0;
  
  return [
    { label: 'Phenomenological Coherence', value: (97 + Math.sin(Date.now() / 1000) * 3).toFixed(2), unit: '%', trend: 'up' },
    { label: 'Quantum Superposition Density', value: Math.floor(Math.random() * 1000 * piDigits), unit: 'ψ-units', trend: 'up', critical: piDigits > 20 },
    { label: 'Noumenal Manifestation Index', value: 'BOTH/NEITHER', trend: 'lateral' },
    { label: 'Michael Gravity Pull', value: gravityConstant.toFixed(3), unit: 'm/s²', trend: 'up' },
    { label: 'Ontological Coherence', value: (98 - Math.random() * 2).toFixed(1), unit: '%', trend: Math.random() > 0.5 ? 'up' : 'down' },
    { label: 'Causality Compliance', value: parseFloat((50 + Math.random() * 100).toFixed(1)), unit: '∑/∞', trend: 'unclear' },
    { label: 'π-Dimensional Resonance', value: impossibleValue.toFixed(2), unit: 'Hz', trend: piDigits > 0 ? 'up' : 'unknown' },
    { label: 'Animation Chronometry Factor', value: animationSpeed.toFixed(2), unit: 'x', trend: animationSpeed > 1 ? 'accelerating' : 'decelerating' },
  ];
}

function MetricCard({ metric, delay, onClick }: { metric: MichaelMetric; delay: number; onClick?: () => void }) {
  const trendColor =
    metric.trend === 'up' ? 'text-green-500' :
    metric.trend === 'down' ? 'text-red-500' :
    metric.trend === 'accelerating' ? 'text-yellow-500' :
    metric.trend === 'decelerating' ? 'text-orange-500' :
    metric.trend === 'lateral' ? 'text-blue-500' :
    metric.trend === 'unclear' ? 'text-purple-500' :
    metric.trend === 'unknown' ? 'text-cyan-500' : 'text-gray-400';
  const trendSymbol =
    metric.trend === 'up' ? '↑' :
    metric.trend === 'down' ? '↓' :
    metric.trend === 'accelerating' ? '⟿' :
    metric.trend === 'decelerating' ? '⟸' :
    metric.trend === 'lateral' ? '→' :
    metric.trend === 'unclear' ? '¿' :
    metric.trend === 'unknown' ? '?' : '?';

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`border p-6 relative cursor-pointer transition-colors ${
        metric.critical ? 'border-red-600/60 bg-red-950/10 hover:border-red-500/80' : 'border-yellow-900/30 hover:border-yellow-700/50'
      }`}
    >
      {metric.critical && (
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-3 right-3 text-red-500 text-xs tracking-widest uppercase font-bold"
        >
          CRITICAL
        </motion.div>
      )}
      <p className="text-gray-500 text-xs tracking-widest uppercase mb-3 font-mono">{metric.label}</p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-light text-white font-mono">
          {metric.value}
        </span>
        {metric.unit && <span className="text-gray-500 text-sm mb-1 font-mono">{metric.unit}</span>}
        <span className={`${trendColor} text-lg mb-0.5 ml-auto font-mono`}>{trendSymbol}</span>
      </div>
    </motion.div>
  );
}

export function MetricsDashboard() {
  const { animationSpeedMultiplier, piDigitsDisplayed, michaelGravityConstant, incrementPiDigits } = useAbsurdity();
  const [metrics, setMetrics] = useState<MichaelMetric[]>(
    generateMetrics(piDigitsDisplayed, michaelGravityConstant, animationSpeedMultiplier)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateMetrics(piDigitsDisplayed, michaelGravityConstant, animationSpeedMultiplier));
    }, 3000 / animationSpeedMultiplier);
    return () => clearInterval(interval);
  }, [piDigitsDisplayed, michaelGravityConstant, animationSpeedMultiplier]);

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
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">Transcendental Performance Telemetry</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl font-light text-white">Michaelic Observable Manifold</h2>
            <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-yellow-500 inline-block"
              />
              <span className="tracking-widest uppercase">Observing · Collapsing Wavefunction Every {(3000 / animationSpeedMultiplier).toFixed(0)}ms</span>
            </div>
          </div>
        </motion.div>

        <p className="text-gray-600 text-sm mb-12 max-w-2xl font-light">
          Continuous telemetry streams from the Michael quantum substrate. These values emerge from simultaneous superposition of all possible Michael states, collapsing upon observation. Click any metric to increase phenomenological resonance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <MetricCard
              key={m.label}
              metric={m}
              delay={i * 0.08}
              onClick={() => {
                if (Math.random() > 0.5) incrementPiDigits();
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 border border-yellow-900/20 p-4 flex items-center justify-between gap-4 flex-wrap"
        >
          <p className="text-gray-600 text-xs font-mono">
            ⚠ ADVISORY: Several metrics exceed Gödelian incompleteness thresholds. System continues operating in undefined state. This is theoretically impossible but empirically verified.
          </p>
          <span className="text-yellow-700/50 text-xs tracking-widest uppercase">ℵ-DECREE-∞</span>
        </motion.div>
      </div>
    </section>
  );
}
