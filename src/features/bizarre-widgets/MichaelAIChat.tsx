import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatMichaelTime } from '../../lib/michael-engine';

export function MichaelAIChat() {
  const [query, setQuery] = useState('');
  const [thinking, setThinking] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [michaelTime, setMichaelTime] = useState(formatMichaelTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setMichaelTime(formatMichaelTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const RESPONSES: Record<string, string> = {
    default: 'Michael analysis complete. The primary variable remains Michael. No further context is available at this time.',
    who: 'Michael is Michael. For additional clarification, please consult the Michael Governance Framework v4.1 or submit a formal Michael inquiry.',
    why: 'The question of why Michael is addressed in Section 7 of the Michael Strategic Manifesto, which is confidential. The short answer is: Michael.',
    how: 'Michael operates through a combination of proprietary presence indicators and undisclosed heuristics. The full methodology is available to Enterprise clients upon Michael approval.',
    when: 'Michael is ongoing. There is no scheduled end to Michael at this time.',
    what: 'Michael encompasses a broad but well-defined set of Michael-adjacent constructs. Please narrow your inquiry for a more targeted Michael response.',
    help: 'Available MichaelAI commands: who, why, how, when, what. All queries are interpreted through a Michael-first lens. Results may vary.',
  };

  const handleAsk = () => {
    if (!query.trim() || thinking) return;
    setThinking(true);
    setResponse(null);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let answer = RESPONSES.default;
      for (const key of Object.keys(RESPONSES)) {
        if (lower.includes(key)) {
          answer = RESPONSES[key];
          break;
        }
      }
      setResponse(answer);
      setThinking(false);
    }, 1800 + Math.random() * 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="border border-yellow-900/30 p-8"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-1">MichaelAI™</p>
          <p className="text-gray-600 text-xs">Semantic Portrait Understanding Engine</p>
        </div>
        <div className="text-right">
          <p className="text-gray-700 text-xs tracking-widest font-mono">{michaelTime}</p>
          <p className="text-gray-700 text-xs">Michael Time</p>
        </div>
      </div>

      <div className="bg-black/40 border border-yellow-900/20 p-4 mb-4 min-h-24 flex flex-col justify-end">
        {!thinking && !response && (
          <p className="text-gray-700 text-xs italic">
            Ask MichaelAI anything. Results are guaranteed to be about Michael.
          </p>
        )}
        {thinking && (
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-yellow-500/60 text-xs"
            >
              ●
            </motion.span>
            <span className="text-yellow-600/50 text-xs tracking-widest uppercase">
              MichaelAI is processing…
            </span>
          </div>
        )}
        {response && !thinking && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 text-sm leading-relaxed"
          >
            {response}
          </motion.p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="Ask about Michael…"
          className="flex-1 bg-black border border-yellow-900/40 text-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-700/60 placeholder-gray-700"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAsk}
          disabled={thinking || !query.trim()}
          className="border border-yellow-700/50 text-yellow-500 text-xs tracking-widest uppercase px-4 py-2.5 hover:bg-yellow-900/20 transition-colors disabled:opacity-40"
        >
          Ask
        </motion.button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Who is Michael?', 'Why Michael?', 'How does Michael work?'].map((q) => (
          <button
            key={q}
            onClick={() => { setQuery(q); }}
            className="text-xs text-gray-600 hover:text-gray-400 border border-gray-800 hover:border-gray-600 px-3 py-1 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
