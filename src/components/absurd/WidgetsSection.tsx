import { motion } from 'framer-motion';
import { useAbsurdity } from '../../lib/absurdity-context';
import { ReadinessScoreCard } from '../../features/bizarre-widgets/ReadinessScoreCard';
import { SentimentIndexCard } from '../../features/bizarre-widgets/SentimentIndexCard';
import { ComplianceConsole } from '../../features/bizarre-widgets/ComplianceConsole';
import { MichaelControlPanel } from '../../features/bizarre-widgets/MichaelControlPanel';
import { MichaelAIChat } from '../../features/bizarre-widgets/MichaelAIChat';

export function WidgetsSection() {
  const { incrementPiDigits } = useAbsurdity();

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
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4 font-mono">
            Phenomenological Control Array
          </p>
          <h2 className="text-4xl font-light text-white">The Michael Teleological Apparatus.</h2>
          <p className="text-gray-500 mt-4 max-w-2xl font-light">
            A distributed network of quantum-coherent monitoring arrays through which Michael instantiates recursive self-observation, collapsing the noumenal into measurable phenomenological residues. All instruments achieve trans-dimensional calibration.
          </p>
          <p className="text-yellow-600/50 text-xs mt-3 italic font-mono">
            Click any card to summon additional π-digits →
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div onClick={() => incrementPiDigits()} className="cursor-pointer">
            <ReadinessScoreCard />
          </div>
          <div onClick={() => incrementPiDigits()} className="cursor-pointer">
            <SentimentIndexCard />
          </div>
          <div onClick={() => incrementPiDigits()} className="cursor-pointer">
            <ComplianceConsole />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MichaelControlPanel />
          <MichaelAIChat />
        </div>
      </div>
    </section>
  );
}
