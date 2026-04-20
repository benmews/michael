import { motion } from 'framer-motion';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-yellow-900/30 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-yellow-600/60 flex items-center justify-center">
            <span className="text-yellow-500 text-xs font-bold">M</span>
          </div>
          <span className="text-yellow-500/90 tracking-widest text-xs uppercase font-medium">
            Michael Systems™
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-gray-400 uppercase">
          <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
          <a href="#metrics" className="hover:text-yellow-500 transition-colors">Metrics</a>
          <a href="#governance" className="hover:text-yellow-500 transition-colors">Governance</a>
          <a href="#roadmap" className="hover:text-yellow-500 transition-colors">Roadmap</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Investor Relations</a>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-xs tracking-widest uppercase border border-yellow-700/50 text-yellow-500 px-4 py-2 hover:bg-yellow-900/20 transition-colors"
        >
          Enterprise Access
        </motion.button>
      </div>
    </nav>
  );
}
