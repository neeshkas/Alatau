import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AAAGLogo from '../assets/logo/aaag-logo.svg';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSafetyActive, setIsSafetyActive] = useState(false);
  const [isEcologyActive, setIsEcologyActive] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);

  const isMainRoute = location.pathname === '/main';
  const isBezopRoute = location.pathname === '/security';

  const navItems = isBezopRoute
    ? [
        { label: 'Безопасность', href: '#safety-top' },
        { label: 'Архитектура', href: '#safety-architecture' },
        { label: 'Сценарии', href: '#safety-scenarios' },
      ]
    : isMainRoute
      ? [
          { label: 'Технология', href: '#technology' },
          { label: 'Безопасность', href: '#safety' },
          { label: 'Экология', href: '#ecology' },
          { label: 'Vision', href: '#vision' },
          { label: 'Roadmap', href: '#roadmap' },
          { label: 'Маршруты', href: '#routes' },
        ]
      : [
          { label: 'Технология', href: '/main#technology' },
          { label: 'Безопасность', href: '/main#safety' },
          { label: 'Экология', href: '/main#ecology' },
          { label: 'Vision', href: '/main#vision' },
          { label: 'Roadmap', href: '/main#roadmap' },
          { label: 'Маршруты', href: '/main#routes' },
        ];

  const isLightVariant = isFooterActive && !isBezopRoute;

  const scrollToTop = () => {
    const scrollRoot = document.querySelector('main');
    if (scrollRoot instanceof HTMLElement) {
      scrollRoot.scrollTo({ top: 0, behavior: 'smooth' });
      if (isMainRoute && location.hash) {
        navigate('/main', { replace: true });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMainRoute && location.hash) {
      navigate('/main', { replace: true });
    }
  };

  const handleHashClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/main#')) {
      event.preventDefault();
      navigate(href);
      setIsMobileOpen(false);
      return;
    }
    if (!href.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const scrollRoot = document.querySelector('main');
    const target = document.querySelector('#safety');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSafetyActive(entry.isIntersecting);
      },
      { root: scrollRoot ?? null, threshold: 0.4 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollRoot = document.querySelector('main');
    const target = document.querySelector('#ecology');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEcologyActive(entry.isIntersecting);
      },
      { root: scrollRoot ?? null, threshold: 0.4 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollRoot = document.querySelector('main');
    const target = document.querySelector('#footer');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterActive(entry.isIntersecting);
      },
      { root: scrollRoot ?? null, threshold: 0.05, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 ${
    isBezopRoute
      ? 'bg-aaag-blue/90 backdrop-blur-md shadow-lg py-3'
      : isFooterActive
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-aaag-blue/15 py-3 text-aaag-blue'
        : isSafetyActive || isEcologyActive
          ? 'bg-aaag-blue/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Наверх"
        >
          <img src={AAAGLogo} alt="AAAG Logo" width={646} height={317} className="h-16 w-auto" />
        </button>

        <div className={`hidden md:flex items-center gap-8 ${isLightVariant ? 'text-aaag-blue' : 'text-white'}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleHashClick(event, item.href)}
              className={`${isLightVariant ? 'text-aaag-blue hover:text-aaag-dark' : 'text-white hover:text-cyan-400'} text-sm font-medium uppercase tracking-wider transition-colors relative group`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] ${isLightVariant ? 'bg-aaag-blue' : 'bg-cyan-400'} transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
          <a
            href="mailto:info@aaag.kz"
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              isLightVariant
                ? 'border border-aaag-blue text-aaag-blue hover:bg-aaag-blue hover:text-white'
                : 'border border-white text-white hover:bg-white hover:text-cyan-400'
            }`}
          >
            Связаться
          </a>
        </div>

        <button
          className={`md:hidden ${isLightVariant ? 'text-aaag-blue' : 'text-white'}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-aaag-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleHashClick(event, item.href)}
            className="text-2xl font-light text-white uppercase tracking-widest hover:text-cyan-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
