import { motion } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';

export function NavBar() {
  const { piDigitsDisplayed, addPageTilt, pageTiltDegrees, navSymbol } = useAbsurdity();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-900/30 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: pageTiltDegrees > 0 ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 0.4 }}
            className="w-6 h-6 rounded-full border border-yellow-600/60 flex items-center justify-center"
          >
            <span className="text-yellow-500 text-xs font-bold">{navSymbol}</span>
          </motion.div>
          <span className="text-yellow-500/90 tracking-widest text-xs uppercase font-medium font-mono">
            Michael Noumena™
          </span>
          {piDigitsDisplayed > 0 && (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-yellow-600/60 text-xs font-mono"
            >
              [π: {piDigitsDisplayed}]
            </motion.span>
          )}
          {pageTiltDegrees > 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-orange-500/70 text-xs font-mono tracking-widest"
            >
              TILT: {pageTiltDegrees.toFixed(1)}°
            </motion.span>
          )}
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-gray-400 uppercase font-mono">
          <a href="#about" className="hover:text-yellow-500 transition-colors">Phenomenology</a>
          <a href="#metrics" className="hover:text-yellow-500 transition-colors">Observable</a>
          <a href="#governance" className="hover:text-yellow-500 transition-colors">Authority</a>
          <a href="#roadmap" className="hover:text-yellow-500 transition-colors">Temporal Map</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Transmission</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98, rotate: -2 }}
          onClick={addPageTilt}
          title="Click to destabilize reality"
          className="text-xs tracking-widest uppercase border border-yellow-700/50 text-yellow-500 px-4 py-2 hover:bg-yellow-900/20 transition-colors font-mono"
        >
          Access Portal
        </motion.button>
      </div>
    </nav>
  );
}
