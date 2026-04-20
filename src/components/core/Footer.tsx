import { useAbsurdity } from '../../lib/absurdity-context';

export function Footer() {
  const { piDigitsDisplayed, michaelSecondsElapsed } = useAbsurdity();

  return (
    <footer className="border-t border-yellow-900/20 py-16 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full border border-yellow-600/50 flex items-center justify-center">
                <span className="text-yellow-500 text-xs font-bold">∞</span>
              </div>
              <span className="text-yellow-500/80 tracking-widest text-xs uppercase font-mono">Michael Noumena™</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed font-light">
              Instantiating trans-phenomenological substrates across multivalent dimensional topologies since Q1 2025.
            </p>
          </div>
          {[
            {
              heading: 'Metaphysical',
              links: ['Ontological Core', 'Noumenal Analytics', 'Transcendental API', 'Quantum Michael'],
            },
            {
              heading: 'Governance Axiomatics',
              links: ['Incompleteness Protocols', 'Paradox Framework', 'Dialectic Synthesis', 'The Michael Ethics Aporia'],
            },
            {
              heading: 'Epistemic Resources',
              links: ['Phenomenological Papers', 'The Michael Journal', 'Theoretical Investments', 'π Manifestations'],
            },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4 font-mono">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 text-xs hover:text-yellow-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-yellow-900/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs font-mono">
            © {michaelSecondsElapsed}∞ Michael Systems™. All temporal rights suspended. Causality void.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-700 font-mono">
            <a href="#" className="hover:text-gray-500 transition-colors">Noumenal Privacy Κ</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Michael Axioms</a>
            <a href="#" className="hover:text-gray-500 transition-colors">π Compliance: {piDigitsDisplayed}/∞</a>
          </div>
        </div>

        {/* Scientific footer ornament */}
        <div className="mt-8 text-center text-gray-700/40 text-xs font-mono leading-loose">
          <p>⟨ ℵ∞ | ∇ · θ = 0 | lim(Michael) = ∫ π dε ⟩</p>
        </div>
      </div>
    </footer>
  );
}
