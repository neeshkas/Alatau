import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AAAGLogo from '../assets/assets/AAAG Logo.svg';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-4 ${
    isScrolled ? 'bg-aaag-blue/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
  }`;

  return (
    <nav class={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src={AAAGLogo} alt="AAAG Logo" width={646} height={317} className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Технология', 'Безопасность', 'Roadmap', 'Маршруты', 'Команда'].map((item, idx) => (
             <a 
               key={idx} 
               href={`#section-${idx + 2}`} 
               className="text-white text-sm font-medium uppercase tracking-wider hover:text-cyan-400 transition-colors relative group"
             >
               {item}
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
             </a>
          ))}
          <button className="px-6 py-2 border border-white rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-aaag-blue transition-all duration-300">
            Связаться
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
         {['Технология', 'Безопасность', 'Roadmap', 'Маршруты', 'Команда'].map((item, idx) => (
             <a 
               key={idx} 
               href={`#section-${idx + 2}`} 
               onClick={() => setIsMobileOpen(false)}
               className="text-2xl font-light text-white uppercase tracking-widest hover:text-aaag-blue transition-colors"
             >
               {item}
             </a>
          ))}
      </div>
    </nav>
  );
};
