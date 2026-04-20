import React, { createContext, useContext, useState, useEffect } from 'react';

const LOREM_POOL = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'eiusmod', 'tempor', 'incididunt', 'labore', 'dolore', 'magna', 'aliqua',
  'veniam', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'aliquip',
  'commodo', 'consequat', 'aute', 'irure', 'reprehenderit', 'voluptate',
  'cillum', 'fugiat', 'pariatur', 'occaecat', 'cupidatat', 'officia', 'laborum',
];

interface WordScramble { from: string; to: string; }

interface AbsurdityContextType {
  animationSpeedMultiplier: number;
  setAnimationSpeedMultiplier: (speed: number) => void;
  piDigitsDisplayed: number;
  incrementPiDigits: () => void;
  michaelGravityConstant: number;
  quantumFluctuationIntensity: number;
  michaelSecondsElapsed: number;
  pageTiltDegrees: number;
  addPageTilt: () => void;
  navSymbol: string;
  setNavSymbol: (s: string) => void;
  wordScrambles: WordScramble[];
  triggerWordScramble: () => void;
  clearWordScrambles: () => void;
}

const AbsurdityContext = createContext<AbsurdityContextType | undefined>(undefined);

export function AbsurdityProvider({ children }: { children: React.ReactNode }) {
  const [animationSpeedMultiplier, setAnimationSpeedMultiplier] = useState(1);
  const [piDigitsDisplayed, setPiDigitsDisplayed] = useState(0);
  const [quantumFluctuationIntensity, setQuantumFluctuationIntensity] = useState(0);
  const [michaelSecondsElapsed, setMichaelSecondsElapsed] = useState(0);
  const [pageTiltDegrees, setPageTiltDegrees] = useState(0);
  const [navSymbol, setNavSymbol] = useState('∞');
  const [wordScrambles, setWordScrambles] = useState<WordScramble[]>([]);

  // Calculate Michael Gravity Constant based on pi digits and animation speed
  const michaelGravityConstant = (piDigitsDisplayed + 1) * animationSpeedMultiplier * 9.81;

  // Quantum fluctuation based on time and pi
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumFluctuationIntensity(Math.sin(Date.now() / 1000 + piDigitsDisplayed) * 0.5 + 0.5);
      setMichaelSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [piDigitsDisplayed]);

  const incrementPiDigits = () => {
    setPiDigitsDisplayed((prev) => prev + 1);
  };

  const addPageTilt = () => {
    setPageTiltDegrees((prev) => Math.min(prev + 0.5, 8));
  };

  const triggerWordScramble = () => {
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
    const words: string[] = [];
    let n: Node | null;
    while ((n = walker.nextNode()) !== null) {
      const matches = (n.textContent || '').match(/\b[A-Za-z]{5,}\b/g);
      if (matches) words.push(...matches);
    }
    const unique = [...new Set(words.filter(w => !/^(lorem|ipsum|dolor|amet|elit)$/i.test(w)))];
    if (unique.length === 0) return;
    const picked = unique.sort(() => Math.random() - 0.5).slice(0, 10);
    const newScrambles: WordScramble[] = picked.map(w => ({
      from: w,
      to: LOREM_POOL[Math.floor(Math.random() * LOREM_POOL.length)],
    }));
    setWordScrambles(prev => {
      const existing = new Map(prev.map(s => [s.from, s.to]));
      for (const s of newScrambles) existing.set(s.from, s.to);
      return Array.from(existing.entries()).map(([from, to]) => ({ from, to }));
    });
  };

  const clearWordScrambles = () => setWordScrambles([]);

  return (
    <AbsurdityContext.Provider
      value={{
        animationSpeedMultiplier,
        setAnimationSpeedMultiplier,
        piDigitsDisplayed,
        incrementPiDigits,
        michaelGravityConstant,
        quantumFluctuationIntensity,
        michaelSecondsElapsed,
        pageTiltDegrees,
        addPageTilt,
        navSymbol,
        setNavSymbol,
        wordScrambles,
        triggerWordScramble,
        clearWordScrambles,
      }}
    >
      {children}
    </AbsurdityContext.Provider>
  );
}

export function useAbsurdity() {
  const context = useContext(AbsurdityContext);
  if (!context) {
    throw new Error('useAbsurdity must be used within AbsurdityProvider');
  }
  return context;
}
