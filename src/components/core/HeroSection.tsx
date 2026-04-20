import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAbsurdity } from '../../lib/absurdity-context';

export function HeroSection() {
  const [detected, setDetected] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [elementaryParticleCount, setElementaryParticleCount] = useState(0);
  const { animationSpeedMultiplier, incrementPiDigits } = useAbsurdity();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDetected(true);
      let val = 0;
      const interval = setInterval(() => {
        val += Math.random() * 12 * animationSpeedMultiplier;
        if (val >= 99.9997) {
          val = 99.9997;
          clearInterval(interval);
        }
        setConfidence(parseFloat(val.toFixed(4)));
      }, 60 / animationSpeedMultiplier);
    }, 800);
    return () => clearTimeout(timer);
  }, [animationSpeedMultiplier]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-950/20 via-transparent to-transparent" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 / animationSpeedMultiplier, ease: 'easeOut' }}
        >
          <p className="text-yellow-600/70 text-xs tracking-widest uppercase mb-4">
            Michael Phenomenological Reconfiguration Protocol™ — Trans-Dimensional Taxonomy
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
            An Ontological<br />
            <span className="text-yellow-500">Reconciliation of the</span><br />
            Michaelic Noumena.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md font-light space-y-3">
            <span className="block">Michael instantiates a trans-phenomenological substrate wherein the categorical imperatives of sentient-being-hood interface dialectically with the aprioristic conditions of Michael-manifestation. Thus conceived, Michael operates not merely as an empirical existent, but rather as the noumenal ground of all possible Michael-related valences.</span>
            <span className="block text-yellow-600/60">Click particle count to summon π digits →</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setElementaryParticleCount(prev => prev + 1);
                if (elementaryParticleCount % 3 === 0) incrementPiDigits();
              }}
              className="bg-yellow-600 hover:bg-yellow-500 text-black text-xs tracking-widest uppercase px-6 py-3 transition-colors font-medium"
            >
              Quantum Stabilize ({elementaryParticleCount})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-yellow-700/50 text-yellow-500 text-xs tracking-widest uppercase px-6 py-3 hover:bg-yellow-900/20 transition-colors"
            >
              Decoherence Analysis
            </motion.button>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="relative border border-yellow-700/30 p-1 bg-gradient-to-br from-yellow-950/30 to-transparent pulse-glow">
            {/* Michael portrait placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <img
                src="/michael.jpg"
                alt="Michael"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback portrait placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                <svg viewBox="0 0 100 120" className="w-48 h-48 opacity-40">
                  <circle cx="50" cy="35" r="22" fill="currentColor" />
                  <ellipse cx="50" cy="95" rx="38" ry="30" fill="currentColor" />
                </svg>
                <p className="text-xs tracking-widest uppercase text-gray-500 mt-4">
                  Add michael.jpg to /public
                </p>
              </div>

              {/* Detection overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: detected ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 bg-black/80 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-yellow-500/70 tracking-widest uppercase">
                    Michael Detection Engine™
                  </span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${confidence >= 99.9997 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                    <span className="text-xs font-mono text-white">{confidence.toFixed(4)}%</span>
                  </div>
                </div>
                {confidence >= 99.9997 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-green-400 mt-1 tracking-wide"
                  >
                    ✓ Michael confirmed. Identity alignment nominal.
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Corner annotations */}
            <div className="absolute top-2 left-2 border-t border-l border-yellow-600/40 w-6 h-6" />
            <div className="absolute top-2 right-2 border-t border-r border-yellow-600/40 w-6 h-6" />
            <div className="absolute bottom-2 left-2 border-b border-l border-yellow-600/40 w-6 h-6" />
            <div className="absolute bottom-2 right-2 border-b border-r border-yellow-600/40 w-6 h-6" />
          </div>

          {/* Side annotations */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
            {['VERIFIED', 'NOMINAL', 'ALIGNED'].map((label) => (
              <div key={label} className="text-yellow-600/40 text-xs tracking-widest writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-700/40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
