import { motion } from 'framer-motion';
import { ReadinessScoreCard } from '../../features/bizarre-widgets/ReadinessScoreCard';
import { SentimentIndexCard } from '../../features/bizarre-widgets/SentimentIndexCard';
import { ComplianceConsole } from '../../features/bizarre-widgets/ComplianceConsole';
import { MichaelControlPanel } from '../../features/bizarre-widgets/MichaelControlPanel';
import { MichaelAIChat } from '../../features/bizarre-widgets/MichaelAIChat';

export function WidgetsSection() {
  return (
    <section className="py-32 px-6 border-t border-yellow-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">
            Interactive Intelligence Suite
          </p>
          <h2 className="text-4xl font-light text-white">The Michael Operations Center.</h2>
          <p className="text-gray-500 mt-4 max-w-2xl">
            A unified command interface for monitoring, calibrating, and governing Michael in real time.
            All tools are enterprise-ready and fully operational.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <ReadinessScoreCard />
          <SentimentIndexCard />
          <ComplianceConsole />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MichaelControlPanel />
          <MichaelAIChat />
        </div>
      </div>
    </section>
  );
}
