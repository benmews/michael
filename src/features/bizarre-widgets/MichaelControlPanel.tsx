import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MichaelIntensity } from '../../types/michael';
import { getMichaelInsight } from '../../lib/michael-engine';

const INTENSITY_LABELS: Record<MichaelIntensity, string> = {
  1: 'Minimal Michael',
  2: 'Standard Michael',
  3: 'Enhanced Michael',
  4: 'Enterprise Michael',
  5: 'MAXIMUM MICHAEL',
};

const INTENSITY_COLORS: Record<MichaelIntensity, string> = {
  1: 'text-gray-400',
  2: 'text-yellow-600',
  3: 'text-yellow-500',
  4: 'text-orange-500',
  5: 'text-red-400',
};

export function MichaelControlPanel() {
  const [intensity, setIntensity] = useState<MichaelIntensity>(2);
  const [enterpriseMode, setEnterpriseMode] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [optimizationLog, setOptimizationLog] = useState<string[]>([]);
  const [insight, setInsight] = useState(getMichaelInsight());

  const handleOptimize = () => {
    setOptimizing(true);
    setOptimizationLog([]);
    const steps = [
      'Initializing Michael optimization pipeline…',
      'Scanning Michael parameter space…',
      'Running 2,048 Michael simulations…',
      `Applying intensity level ${intensity} (${INTENSITY_LABELS[intensity]})…`,
      'Resolving Michael alignment conflicts…',
      'Committing Michael configuration…',
      enterpriseMode ? 'Enterprise Michael mode enabled — applying governance layer…' : 'Standard Michael governance applied.',
      '✓ Michael successfully optimized.',
    ];
    steps.forEach((step, i) => {
      setTimeout(() => {
        setOptimizationLog((prev) => [...prev, step]);
        if (i === steps.length - 1) {
          setOptimizing(false);
          setInsight(getMichaelInsight());
        }
      }, i * 400 + 300);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="border border-yellow-900/30 p-8"
    >
      <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1">
        Michael Control Panel
      </p>
      <p className="text-gray-600 text-xs mb-8">Operational configuration · Live</p>

      {/* Intensity slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label className="text-gray-400 text-xs tracking-widest uppercase">Michael Intensity</label>
          <span className={`text-xs tracking-widest uppercase font-medium ${INTENSITY_COLORS[intensity]}`}>
            {INTENSITY_LABELS[intensity]}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={5}
          value={intensity}
          onChange={(e) => setIntensity(parseInt(e.target.value) as MichaelIntensity)}
          className="w-full accent-yellow-600"
        />
        <div className="flex justify-between text-gray-700 text-xs mt-1">
          <span>Low</span>
          <span>Max</span>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-4 mb-8">
        {[
          {
            label: 'Enterprise Michael Mode',
            desc: 'Enables governance, audit trail, and 3x Michael throughput',
            value: enterpriseMode,
            onChange: setEnterpriseMode,
          },
        ].map((toggle) => (
          <div key={toggle.label} className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">{toggle.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{toggle.desc}</p>
            </div>
            <button
              onClick={() => toggle.onChange(!toggle.value)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                toggle.value ? 'bg-yellow-700' : 'bg-gray-800'
              }`}
            >
              <motion.div
                animate={{ x: toggle.value ? 24 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-white shadow"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Optimize button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleOptimize}
        disabled={optimizing}
        className={`w-full py-3 text-xs tracking-widest uppercase mb-6 transition-colors font-medium ${
          intensity === 5
            ? 'bg-red-900/40 border border-red-700/50 text-red-400 hover:bg-red-900/60'
            : 'bg-yellow-700/20 border border-yellow-700/50 text-yellow-500 hover:bg-yellow-700/30'
        } disabled:opacity-40`}
      >
        {optimizing ? 'Optimizing…' : 'Optimize Michael'}
      </motion.button>

      {/* Optimization log */}
      {optimizationLog.length > 0 && (
        <div className="bg-black/50 border border-yellow-900/20 p-4 font-mono text-xs text-green-500/80 space-y-1 max-h-48 overflow-y-auto mb-6">
          {optimizationLog.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={line.startsWith('✓') ? 'text-green-400' : 'text-green-600/70'}
            >
              {line}
            </motion.div>
          ))}
        </div>
      )}

      {/* Insight */}
      <div className="border-t border-yellow-900/20 pt-4">
        <p className="text-yellow-600/50 text-xs tracking-widest uppercase mb-2">Latest Michael Insight</p>
        <p className="text-gray-500 text-xs leading-relaxed italic">{insight}</p>
      </div>
    </motion.div>
  );
}
