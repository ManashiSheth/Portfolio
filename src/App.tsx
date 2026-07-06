import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import ExperienceSection from './components/ExperienceSection';
import ExplorationsSection from './components/ExplorationsSection';
import StatsSection from './components/StatsSection';
import ContactFooter from './components/ContactFooter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <Navbar />

      <main
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <HeroSection />
        <WorksSection />
        <ExperienceSection />
        <ExplorationsSection />
        <StatsSection />
        <ContactFooter />
      </main>
    </>
  );
}

export default App;
