import React, { createContext, useContext, useState, useEffect } from 'react';

interface AbsurdityContextType {
  animationSpeedMultiplier: number;
  setAnimationSpeedMultiplier: (speed: number) => void;
  piDigitsDisplayed: number;
  incrementPiDigits: () => void;
  michaelGravityConstant: number;
  quantumFluctuationIntensity: number;
  michaelSecondsElapsed: number;
}

const AbsurdityContext = createContext<AbsurdityContextType | undefined>(undefined);

export function AbsurdityProvider({ children }: { children: React.ReactNode }) {
  const [animationSpeedMultiplier, setAnimationSpeedMultiplier] = useState(1);
  const [piDigitsDisplayed, setPiDigitsDisplayed] = useState(0);
  const [quantumFluctuationIntensity, setQuantumFluctuationIntensity] = useState(0);
  const [michaelSecondsElapsed, setMichaelSecondsElapsed] = useState(0);

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
