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
import { AbsurdityProvider } from './lib/absurdity-context';
import { AbsurdityConsole } from './components/absurd/AbsurdityConsole';

export default function App() {
  return (
    <AbsurdityProvider>
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
        <AbsurdityConsole />
      </div>
    </AbsurdityProvider>
  );
}
