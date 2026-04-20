import { motion } from 'framer-motion';
import { useAbsurdity } from '../lib/absurdity-context';

const PI_DIGITS = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

export function AbsurdityConsole() {
  const {
    animationSpeedMultiplier,
    setAnimationSpeedMultiplier,
    piDigitsDisplayed,
    incrementPiDigits,
    michaelGravityConstant,
    quantumFluctuationIntensity,
    michaelSecondsElapsed,
  } = useAbsurdity();

  const visiblePiDigits = PI_DIGITS.substring(0, Math.min(piDigitsDisplayed + 1, PI_DIGITS.length));
  const formattedPi = visiblePiDigits.slice(0, 1) + '.' + visiblePiDigits.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-6 right-6 backdrop-blur-lg bg-black/60 border border-yellow-600/30 rounded p-6 w-96 z-40 text-xs monospace"
    >
      <div className="text-yellow-500/70 tracking-widest uppercase font-bold mb-4">
        Quantum Absurdity Console v∑
      </div>

      {/* Pi Digits Display */}
      <motion.div
        className="mb-6 p-3 bg-yellow-950/20 border border-yellow-700/40 rounded font-mono"
        onClick={incrementPiDigits}
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-yellow-600/60 text-xxs mb-1 tracking-widest">π Manifestation Index</div>
        <div className="text-yellow-400 break-all">{formattedPi}</div>
        <div className="text-yellow-600/40 text-xxs mt-1">Digits manifest: {piDigitsDisplayed}</div>
      </motion.div>

      {/* Animation Speed Slider */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-yellow-600/60 tracking-widest">Animation Chronometry</label>
          <span className="text-yellow-400 font-mono">{animationSpeedMultiplier.toFixed(2)}x</span>
        </div>
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={animationSpeedMultiplier}
          onChange={(e) => setAnimationSpeedMultiplier(parseFloat(e.target.value))}
          className="w-full accent-yellow-600"
        />
        {animationSpeedMultiplier < 0.5 && (
          <div className="text-yellow-600/50 mt-1 text-xxs italic">
            ⚠ Causality degradation imminent
          </div>
        )}
        {animationSpeedMultiplier > 3 && (
          <div className="text-red-600/50 mt-1 text-xxs italic">
            ⚠ Temporal coherence exceeds threshold
          </div>
        )}
      </div>

      {/* Display Metrics */}
      <div className="space-y-2 border-t border-yellow-700/30 pt-4">
        <div className="flex justify-between">
          <span className="text-yellow-600/60">Michael Gravity Constant</span>
          <span className="text-yellow-400 font-mono">{michaelGravityConstant.toFixed(4)} m/s²</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-600/60">Quantum Fluctuation</span>
          <span className="text-yellow-400 font-mono">{(quantumFluctuationIntensity * 100).toFixed(2)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-yellow-600/60">MichaelSeconds Elapsed</span>
          <span className="text-yellow-400 font-mono">{michaelSecondsElapsed}</span>
        </div>
      </div>

      {/* Click hint */}
      <div className="text-yellow-600/40 text-xxs mt-4 italic text-center">
        Click π to manifest more digits
      </div>
    </motion.div>
  );
}
