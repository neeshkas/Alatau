import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AAAGLogo from '../assets/assets/AAAG Logo.svg';

export const Navigation: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSafetyActive, setIsSafetyActive] = useState(false);
  const [isEcologyActive, setIsEcologyActive] = useState(false);
  const navItems = [
    { label: '\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f', href: '#technology' },
    { label: '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c', href: '#safety' },
    { label: '\u042d\u043a\u043e\u043b\u043e\u0433\u0438\u044f', href: '#ecology' },
    { label: 'Vision', href: '#vision' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: '\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u044b', href: '#routes' },
  ];

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

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 ${
    isSafetyActive || isEcologyActive
      ? 'bg-aaag-blue/90 backdrop-blur-md shadow-lg py-3'
      : 'bg-transparent py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src={AAAGLogo} alt="AAAG Logo" width={646} height={317} className="h-16 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-cyan-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-6 py-2 border border-white rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-cyan-400 transition-all duration-300">
            {'\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f'}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-aaag-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-2xl font-light text-white uppercase tracking-widest hover:text-cyan-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
