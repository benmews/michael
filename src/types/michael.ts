export interface MichaelMetric {
  label: string;
  value: number | string;
  unit?: string;
  trend?: 'up' | 'down' | 'lateral' | 'unclear' | 'accelerating' | 'decelerating' | 'unknown';
  critical?: boolean;
}

export interface MichaelReadinessScore {
  score: number;
  tier: string;
  confidence: number;
  lastCalibrated: string;
}

export interface MichaelSentimentReading {
  index: number;
  classification: string;
  volatility: 'low' | 'moderate' | 'elevated' | 'critical';
  advisoryStatus: string;
}

export interface MichaelComplianceStatus {
  certified: boolean;
  framework: string;
  version: string;
  expiresAt: string;
  riskTier: string;
}

export type MichaelIntensity = 1 | 2 | 3 | 4 | 5;

export interface MichaelSystemState {
  intensity: MichaelIntensity;
  enterpriseMode: boolean;
  optimizationRunning: boolean;
  lastOptimized: string | null;
  detectionConfidence: number;
}
