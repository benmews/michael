import React, { useLayoutEffect } from 'react';
import { NavBar } from './components/core/NavBar';
import { HeroSection } from './components/core/HeroSection';
import { NewsTicker } from './components/core/NewsTicker';
import { AboutSection } from './components/core/AboutSection';
import { MetricsDashboard } from './features/dashboard/MetricsDashboard';
import { WidgetsSection } from './components/absurd/WidgetsSection';
import { GovernanceSection } from './components/core/GovernanceSection';
import { RoadmapSection } from './components/core/RoadmapSection';
import { TestimonialsSection } from './components/core/TestimonialsSection';
import { ContactSection } from './components/core/ContactSection';
import { Footer } from './components/core/Footer';
import { AbsurdityProvider, useAbsurdity } from './lib/absurdity-context';
import { AbsurdityConsole } from './components/absurd/AbsurdityConsole';

function TiltingWrapper({ children }: { children: React.ReactNode }) {
  const { pageTiltDegrees } = useAbsurdity();
  return (
    <div style={{ transform: `rotate(${pageTiltDegrees}deg)`, transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1)', transformOrigin: 'center top' }}>
      {children}
    </div>
  );
}

// Applies word scrambles after EVERY render (before paint) so React re-renders never undo them.
function WordScrambleOverlay() {
  const { wordScrambles } = useAbsurdity();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    if (wordScrambles.length === 0) return;
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          const tag = p.tagName.toLowerCase();
          if (['script', 'style', 'input', 'textarea', 'noscript'].includes(tag))
            return NodeFilter.FILTER_REJECT;
          return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        },
      }
    );
    let n: Node | null;
    while ((n = walker.nextNode()) !== null) {
      let text = n.textContent || '';
      let changed = false;
      for (const { from, to } of wordScrambles) {
        const re = new RegExp(`\\b${from}\\b`, 'g');
        if (re.test(text)) { text = text.replace(re, to); changed = true; }
      }
      if (changed) n.textContent = text;
    }
  }); // intentionally no deps — re-run after every render to persist scrambles

export default function App() {
  return (
    <AbsurdityProvider>
      <WordScrambleOverlay />
      <TiltingWrapper>
        <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
          <NavBar />
          <HeroSection />
          <NewsTicker />
          <AboutSection />
          <MetricsDashboard />
          <WidgetsSection />
          <GovernanceSection />
          <RoadmapSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </TiltingWrapper>
      <AbsurdityConsole />
    </AbsurdityProvider>
  );
}
