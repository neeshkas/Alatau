import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Safety } from './components/Safety';
import { Ecology } from './components/Ecology';
import { Vision } from './components/Vision';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { RoutesMap } from './components/RoutesMap';
import { SafetyPage } from './pages/SafetyPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const Landing: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollRoot = document.querySelector('main');
    if (!(scrollRoot instanceof HTMLElement)) return;

    if (!location.hash) {
      scrollRoot.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(location.hash);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="font-sans text-base">
      <Navigation />
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar overscroll-contain pt-24 md:pt-28">
        <Hero />
        <Technology />
        <Safety />
        <Ecology />
        <Vision />
        <Roadmap />
        <RoutesMap />
        <Footer />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Landing />} />
        <Route path="/bezop" element={<Navigate to="/security" replace />} />
        <Route path="/security" element={<SafetyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
