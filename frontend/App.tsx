import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

const AnimatedShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.996 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -14, scale: 0.996 }}
    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={(
            <AnimatedShell>
              <Landing />
            </AnimatedShell>
          )}
        />
        <Route path="/bezop" element={<Navigate to="/security" replace />} />
        <Route
          path="/security"
          element={(
            <AnimatedShell>
              <SafetyPage />
            </AnimatedShell>
          )}
        />
        <Route
          path="/privacy"
          element={(
            <AnimatedShell>
              <PrivacyPage />
            </AnimatedShell>
          )}
        />
        <Route
          path="/terms"
          element={(
            <AnimatedShell>
              <TermsPage />
            </AnimatedShell>
          )}
        />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
