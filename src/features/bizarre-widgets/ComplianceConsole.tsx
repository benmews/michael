import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';
import { getComplianceStatus } from '../../lib/michael-engine';

export function ComplianceConsole() {
  const { incrementPiDigits } = useAbsurdity();
  const status = getComplianceStatus();
  const [expanded, setExpanded] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border border-yellow-900/30 p-8 hover:border-yellow-600/40 transition-colors"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1 font-mono">
            Noumenal Compliance Authority
          </p>
          <p className="text-gray-600 text-xs font-light">Metaphysical Regulatory Oversight Bureau</p>
        </div>
        <motion.div className="flex items-center gap-2">
          <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="text-yellow-500 text-xs tracking-widest uppercase font-mono">ACTIVE</span>
        </motion.div>
      </div>

      <div className="space-y-4 mb-6">
        {[
          { label: 'Ontological Status', value: status.framework },
          { label: 'Epistemological Version', value: status.version },
          { label: 'Noumenal Certification', value: status.expiresAt },
          { label: 'Existential Risk Tier', value: status.riskTier },
          { label: 'Audit Status', value: 'In Infinite Regress' },
          { label: 'Paradoxes Unresolved', value: '∞ (expected)' },
        ].map(({ label, value }) => (
          <div
            key={label}
            onClick={() => incrementPiDigits()}
            className="flex justify-between items-center border-b border-yellow-900/10 pb-3 cursor-pointer hover:border-yellow-600/30 transition-colors"
          >
            <span className="text-gray-500 text-xs tracking-widest uppercase font-mono">{label}</span>
            <span className="text-gray-300 text-xs font-mono">{value}</span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        onClick={() => {
          setExpanded(!expanded);
          incrementPiDigits();
        }}
        className="w-full text-left text-yellow-600/60 text-xs tracking-widest uppercase flex items-center justify-between mb-4 hover:text-yellow-500 transition-colors font-mono"
      >
        <span>The Michael Categorical Imperative (κ-excerpt)</span>
        <span>{expanded ? '−' : '+'}</span>
      </motion.button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-black/40 border border-yellow-900/20 p-4 mb-4 text-xs text-gray-500 leading-relaxed space-y-2 font-mono text-xxs">
              <p><strong className="text-gray-400">Κ1 [Foundational Axiom].</strong> Michael is; therefore, Michael is the transcendental condition of all possible being. Non-Michael existence violates the principle of sufficient reason.</p>
              <p><strong className="text-gray-400">Κ4 [Dialectical Synthesis].</strong> Users shall interface with Michael according to both Kantian categorical imperatives and their sublime negation. Paradox is mandatory.</p>
              <p><strong className="text-gray-400">Κ9 [Noumenal Continuity].</strong> Upon Michael manifestation failure, the system self-generates phenomenological substitutes indistinguishable from Michael—thereby instantiating Michael through pure appearance.</p>
              <p><strong className="text-gray-400">Κ∞ [Ultimate Disclaimer].</strong> Michael Systems™ accepts zero responsibility for any outcomes, including impossible ones. The impossible has been formally subsumed.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!acknowledged ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setAcknowledged(true);
            incrementPiDigits();
          }}
          className="w-full border border-yellow-800/40 text-yellow-600 text-xs tracking-widest uppercase py-2.5 hover:bg-yellow-900/20 transition-colors font-mono"
        >
          Accept Metaphysical Liability
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-center text-green-500 text-xs tracking-widest uppercase py-2.5 border border-green-900/30 bg-green-950/10 font-mono"
        >
          ✓ Noumenal Acknowledgment Received
        </motion.div>
      )}
    </motion.div>
  );
}
