import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';
import { computeSentimentIndex } from '../../lib/michael-engine';
import type { MichaelSentimentReading } from '../../types/michael';

export function SentimentIndexCard() {
  const { incrementPiDigits } = useAbsurdity();
  const [reading, setReading] = useState<MichaelSentimentReading>(computeSentimentIndex());
  const [history, setHistory] = useState<number[]>([reading.index]);
  const [advisoryVisible, setAdvisoryVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = computeSentimentIndex();
      setReading(next);
      setHistory((prev) => [...prev.slice(-11), next.index]);
      if (next.advisoryStatus !== 'No advisory') {
        setAdvisoryVisible(true);
        incrementPiDigits();
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [incrementPiDigits]);

  const volatilityColor = {
    low: 'text-green-500',
    moderate: 'text-yellow-500',
    elevated: 'text-orange-500',
    critical: 'text-red-500',
  }[reading.volatility];

  const miniMax = Math.max(...history);
  const miniMin = Math.min(...history);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="border border-yellow-900/30 p-8 relative hover:border-yellow-600/40 transition-colors cursor-pointer"
      onClick={() => incrementPiDigits()}
    >
      <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1 font-mono">
        Michaelic Affect Topology™ (Real-Time)
      </p>
      <p className="text-gray-600 text-xs mb-6 font-light">Quantum fluctuation monitoring · Non-causal sequencing</p>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl font-mono font-light text-white">{reading.index.toFixed(2)}</span>
        <div>
          <p className={`text-sm ${volatilityColor} tracking-widest uppercase font-mono`}>{reading.classification}</p>
          <p className="text-gray-600 text-xs mt-1 font-mono">
            Decoherence: <span className={volatilityColor}>{reading.volatility}</span>
          </p>
        </div>
      </div>

      {/* Sparkline */}
      <div className="mb-6">
        <p className="text-gray-600 text-xs tracking-widest uppercase mb-2 font-mono">Phenomenological History</p>
        <svg viewBox={`0 0 ${history.length * 20} 40`} className="w-full h-10" preserveAspectRatio="none">
          {history.map((val, i) => {
            const x = i * 20 + 10;
            const range = miniMax - miniMin || 1;
            const y = 36 - ((val - miniMin) / range) * 32;
            return (
              <g key={i}>
                {i > 0 && (
                  <line
                    x1={(i - 1) * 20 + 10}
                    y1={36 - ((history[i - 1] - miniMin) / (range)) * 32}
                    x2={x}
                    y2={y}
                    stroke="rgba(201,168,76,0.5)"
                    strokeWidth="1.5"
                  />
                )}
                <motion.circle
                  animate={{ r: [2, 2.5, 2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  cx={x}
                  cy={y}
                  fill="rgba(201,168,76,0.8)"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="bg-black/30 p-3 border border-yellow-900/20">
          <p className="text-gray-600 mb-1 tracking-widest uppercase text-xxs">Status Notice</p>
          <p className="text-gray-300 text-xs">{reading.advisoryStatus}</p>
        </div>
        <div className="bg-black/30 p-3 border border-yellow-900/20">
          <p className="text-gray-600 mb-1 tracking-widest uppercase text-xxs">Epistemology</p>
          <p className="text-gray-300 text-xs">Undisclosed</p>
        </div>
      </div>

      <AnimatePresence>
        {advisoryVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 border border-red-600/40 bg-red-950/20 p-3 flex items-center justify-between"
          >
            <p className="text-red-500 text-xs tracking-widest font-mono">
              ⚠ PHENOMENOLOGICAL ANOMALY DETECTED
            </p>
            <button
              onClick={() => setAdvisoryVisible(false)}
              className="text-gray-600 hover:text-gray-400 text-xs ml-4 font-mono"
            >
              Suppress
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
