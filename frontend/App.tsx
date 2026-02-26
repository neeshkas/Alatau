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

    let rafId: number | null = null;
    let settleId: number | null = null;
    let restoreId: number | null = null;

    const withStableSnap = (run: () => void) => {
      const prevSnapInline = scrollRoot.style.scrollSnapType;
      const prevBehaviorInline = scrollRoot.style.scrollBehavior;
      scrollRoot.style.scrollSnapType = 'none';
      scrollRoot.style.scrollBehavior = 'auto';
      run();
      restoreId = window.setTimeout(() => {
        scrollRoot.style.scrollSnapType = prevSnapInline;
        scrollRoot.style.scrollBehavior = prevBehaviorInline;
      }, 180);
    };

    const jumpToTop = () => {
      withStableSnap(() => {
        scrollRoot.scrollTo({ top: 0, behavior: 'auto' });
      });
    };

    if (!location.hash) {
      jumpToTop();
      return () => {
        if (restoreId !== null) window.clearTimeout(restoreId);
      };
    }

    const id = location.hash.startsWith('#') ? location.hash.slice(1) : location.hash;
    const target = document.getElementById(id);
    if (!(target instanceof HTMLElement)) return;

    rafId = window.requestAnimationFrame(() => {
      withStableSnap(() => {
        const rootRect = scrollRoot.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const nextTop = targetRect.top - rootRect.top + scrollRoot.scrollTop;
        scrollRoot.scrollTo({ top: Math.max(0, nextTop), behavior: 'auto' });

        // Second pass after layout settles (images/content-visibility) to avoid off-by-one section jumps.
        settleId = window.setTimeout(() => {
          const updatedRootRect = scrollRoot.getBoundingClientRect();
          const updatedTargetRect = target.getBoundingClientRect();
          const settledTop = updatedTargetRect.top - updatedRootRect.top + scrollRoot.scrollTop;
          scrollRoot.scrollTo({ top: Math.max(0, settledTop), behavior: 'auto' });
        }, 70);
      });
    });

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      if (settleId !== null) window.clearTimeout(settleId);
      if (restoreId !== null) window.clearTimeout(restoreId);
    };
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

const AnimatedPage: React.FC<{ children: React.ReactNode; tone: 'main' | 'security' | 'legal' }> = ({ children, tone }) => {
  const xOffset = tone === 'security' ? 56 : -56;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, scale: 0.985, filter: 'blur(9px)' }}
      animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -xOffset * 0.75, scale: 0.992, filter: 'blur(7px)' }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route
          path="/main"
          element={(
            <AnimatedPage tone="main">
              <Landing />
            </AnimatedPage>
          )}
        />
        <Route path="/bezop" element={<Navigate to="/security" replace />} />
        <Route
          path="/security"
          element={(
            <AnimatedPage tone="security">
              <SafetyPage />
            </AnimatedPage>
          )}
        />
        <Route
          path="/privacy"
          element={(
            <AnimatedPage tone="legal">
              <PrivacyPage />
            </AnimatedPage>
          )}
        />
        <Route
          path="/terms"
          element={(
            <AnimatedPage tone="legal">
              <TermsPage />
            </AnimatedPage>
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
