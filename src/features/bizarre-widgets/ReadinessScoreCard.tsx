import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';
import { computeReadinessScore } from '../../lib/michael-engine';
import type { MichaelReadinessScore } from '../../types/michael';

function GaugeArc({ score }: { score: number }) {
  const radius = 70;
  const circumference = Math.PI * radius;
  const pct = Math.min(score / 100, 1);
  const dashOffset = circumference * (1 - pct);

  return (
    <svg viewBox="0 0 160 90" className="w-full max-w-xs mx-auto">
      {/* Background arc */}
      <path
        d="M 10 80 A 70 70 0 0 1 150 80"
        fill="none"
        stroke="rgba(201,168,76,0.1)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Foreground arc */}
      <path
        d="M 10 80 A 70 70 0 0 1 150 80"
        fill="none"
        stroke="rgba(201,168,76,0.8)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${circumference}`}
        strokeDashoffset={`${dashOffset}`}
        style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
      />
      {/* Score text */}
      <text x="80" y="72" textAnchor="middle" fill="white" fontSize="28" fontWeight="200" fontFamily="monospace">
        {score}
      </text>
      <text x="80" y="82" textAnchor="middle" fill="rgba(201,168,76,0.6)" fontSize="8" letterSpacing="3">
        / 100
      </text>
    </svg>
  );
}

export function ReadinessScoreCard() {
  const { incrementPiDigits, piDigitsDisplayed } = useAbsurdity();
  const [data, setData] = useState<MichaelReadinessScore>(computeReadinessScore());
  const [recalibrating, setRecalibrating] = useState(false);

  const handleRecalibrate = () => {
    setRecalibrating(true);
    incrementPiDigits();
    setTimeout(() => {
      setData(computeReadinessScore());
      setRecalibrating(false);
    }, 2200);
  };

  // Auto-recalibrate every 20s
  useEffect(() => {
    const interval = setInterval(handleRecalibrate, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-yellow-900/30 p-8 relative overflow-hidden hover:border-yellow-600/40 transition-colors cursor-pointer"
      onClick={() => incrementPiDigits()}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1 font-mono">
              Phenomenological Coherence Attestation™
            </p>
            <p className="text-gray-500 text-xs font-light">
              Composite trans-dimensional index (ℵ-weighted averaging)
            </p>
          </div>
          <div className="group relative">
            <span className="text-gray-600 text-xs border border-gray-700 rounded-full w-5 h-5 flex items-center justify-center cursor-help">?</span>
            <div className="absolute right-0 top-6 w-64 bg-gray-900 border border-yellow-900/40 p-4 text-xs text-gray-400 hidden group-hover:block z-20 leading-relaxed font-mono">
              Combines Gödelian incompleteness coefficients, Hegelian dialectic vectors, 
              and quantum superposition valences. Accuracy ±∞. Click to manifest π.
            </div>
          </div>
        </div>

        {recalibrating ? (
          <div className="flex flex-col items-center py-8 gap-3">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-yellow-700/30 border-t-yellow-500 rounded-full"
            />
            <p className="text-yellow-600/60 text-xs tracking-widest uppercase font-mono">Recalibrating Noumena…</p>
            <p className="text-gray-600 text-xs font-mono">Executing {piDigitsDisplayed * 847} paradox resolution passes</p>
          </div>
        ) : (
          <>
            <GaugeArc score={data.score} />
            <div className="text-center mb-6 mt-2">
              <p className="text-yellow-500 text-sm tracking-widest uppercase font-mono">{data.tier}</p>
              <p className="text-gray-600 text-xs mt-1 font-mono">Certainty: {(data.confidence * Math.PI).toFixed(4)}π%</p>
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-3 text-xs mb-6">
          <div className="bg-black/30 p-3 border border-yellow-900/20 font-mono">
            <p className="text-gray-600 mb-1 tracking-widest uppercase text-xxs">Epistemological Model</p>
            <p className="text-gray-300">T(∞,ψ)=MRS</p>
          </div>
          <div className="bg-black/30 p-3 border border-yellow-900/20 font-mono">
            <p className="text-gray-600 mb-1 tracking-widest uppercase text-xxs">Methodology Phase</p>
            <p className="text-gray-300">Both + Neither</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleRecalibrate}
          disabled={recalibrating}
          className="w-full border border-yellow-800/40 text-yellow-600 text-xs tracking-widest uppercase py-2.5 hover:bg-yellow-900/20 transition-colors disabled:opacity-40 font-mono"
        >
          Invoke Phenomenological Verification
        </motion.button>
      </div>
    </motion.div>
  );
}
