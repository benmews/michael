export function Footer() {
  return (
    <footer className="border-t border-yellow-900/20 py-16 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full border border-yellow-600/50 flex items-center justify-center">
                <span className="text-yellow-500 text-xs font-bold">M</span>
              </div>
              <span className="text-yellow-500/80 tracking-widest text-xs uppercase">Michael Systems™</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              The world's leading platform for Michael-centric enterprise solutions.
            </p>
          </div>
          {[
            {
              heading: 'Platform',
              links: ['Michael Core', 'Michael Analytics', 'Michael API', 'Enterprise Michael'],
            },
            {
              heading: 'Governance',
              links: ['Compliance Center', 'Risk Framework', 'Audit Protocol', 'Michael Ethics Board'],
            },
            {
              heading: 'Resources',
              links: ['Documentation', 'Michael Quarterly', 'Investor Relations', 'Michael Blog'],
            },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-yellow-600/60 text-xs tracking-widest uppercase mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-yellow-900/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            © 2025 Michael Systems™. All Michael reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-700">
            <a href="#" className="hover:text-gray-500 transition-colors">Michael Privacy Policy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Michael Terms</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Cookie Michael</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
