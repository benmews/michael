import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getComplianceStatus } from '../../lib/michael-engine';

export function ComplianceConsole() {
  const status = getComplianceStatus();
  const [expanded, setExpanded] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border border-yellow-900/30 p-8"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1">
            Michael Compliance Console
          </p>
          <p className="text-gray-600 text-xs">Governance & Regulatory Affairs</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500 text-xs tracking-widest uppercase">Certified</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {[
          { label: 'Compliance Framework', value: status.framework },
          { label: 'Version', value: status.version },
          { label: 'Certificate Expires', value: status.expiresAt },
          { label: 'Risk Classification', value: status.riskTier },
          { label: 'Audit Status', value: 'Pending (since Q1 2024)' },
          { label: 'Outstanding Findings', value: '0 (defined)' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center border-b border-yellow-900/10 pb-3">
            <span className="text-gray-500 text-xs tracking-widest uppercase">{label}</span>
            <span className="text-gray-300 text-xs font-mono">{value}</span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left text-yellow-600/60 text-xs tracking-widest uppercase flex items-center justify-between mb-4 hover:text-yellow-500 transition-colors"
      >
        <span>Michael Terms of Service (excerpt)</span>
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
            <div className="bg-black/40 border border-yellow-900/20 p-4 mb-4 text-xs text-gray-500 leading-relaxed space-y-2">
              <p><strong className="text-gray-400">Section 1. Definition of Michael.</strong> For purposes of this Agreement, "Michael" refers to Michael, the entirety of Michael, and any derivative Michael-adjacent constructs.</p>
              <p><strong className="text-gray-400">Section 4. Acceptable Michael Interaction.</strong> Users shall interact with Michael content in a manner consistent with Michael governance policy. Unsanctioned Michael interpretation is prohibited.</p>
              <p><strong className="text-gray-400">Section 9. Michael Continuity.</strong> In the event of Michael unavailability, the platform reserves the right to substitute equivalent Michael until normal Michael operations resume.</p>
              <p><strong className="text-gray-400">Section 17. Limitation of Michael Liability.</strong> Michael Systems™ shall not be liable for any outcomes arising from Michael misalignment, Michael surplus, or the unexpected emergence of non-Michael variables.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!acknowledged ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setAcknowledged(true)}
          className="w-full border border-yellow-800/40 text-yellow-600 text-xs tracking-widest uppercase py-2.5 hover:bg-yellow-900/20 transition-colors"
        >
          Acknowledge Michael Compliance
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full text-center text-green-500 text-xs tracking-widest uppercase py-2.5 border border-green-900/30 bg-green-950/10"
        >
          ✓ Compliance Acknowledged
        </motion.div>
      )}
    </motion.div>
  );
}
