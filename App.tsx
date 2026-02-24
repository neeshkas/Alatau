import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Safety } from './components/Safety';
import { Ecology } from './components/Ecology';
import { Vision } from './components/Vision';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

const RoutesMap = lazy(() => import('./components/RoutesMap').then((m) => ({ default: m.RoutesMap })));
const SafetyPage = lazy(() => import('./pages/SafetyPage').then((m) => ({ default: m.SafetyPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));

const PageFallback: React.FC = () => <div className="min-h-screen w-full bg-aaag-dark" aria-hidden="true" />;

const Landing: React.FC = () => {
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
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bezop" element={<SafetyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
