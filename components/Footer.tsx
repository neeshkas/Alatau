import React from 'react';
import { PARTNERS_DATA } from '../constants';
import { MapPin, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import AAAGLogo from '../assets/assets/AAAG Logo.svg';
import FooterBg from '../assets/for footer.png';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-aaag-dark text-white pt-20 pb-10 border-t border-white/10 snap-start relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={FooterBg}
          alt="Footer background"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-aaag-dark/85"></div>
      </div>
        
      {/* Ticker / Partners */}
      <div className="w-full overflow-hidden mb-16 border-b border-white/10 pb-12 relative z-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Наши партнеры</p>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                {[...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA].map((partner, i) => (
                    <span key={i} className="text-2xl font-bold text-gray-600 uppercase hover:text-white transition-colors cursor-default">
                        {partner.name}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
                {[...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA].map((partner, i) => (
                    <span key={i} className="text-2xl font-bold text-gray-600 uppercase hover:text-white transition-colors cursor-default">
                        {partner.name}
                    </span>
                ))}
            </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-2">
              <img src={AAAGLogo} alt="AAAG Logo" width={646} height={317} className="h-14 w-auto mb-6" />
              <p className="text-gray-400 max-w-sm mb-6">
                  Мы создаем будущее городской мобильности сегодня. Инновации, экология и безопасность.
              </p>
              <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-aaag-dark transition-all"><Linkedin size={18}/></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-aaag-dark transition-all"><Twitter size={18}/></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-aaag-dark transition-all"><Instagram size={18}/></a>
              </div>
          </div>

          <div>
              <h4 className="font-bold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                      <MapPin className="mt-1 text-cyan-400" size={18} />
                      <span>Алматы, Казахстан,<br/>ул. Толе Би 101</span>
                  </li>
                  <li className="flex items-center gap-3">
                      <Mail className="text-cyan-400" size={18} />
                      <a href="mailto:info@aaag.kz" className="hover:text-white transition-colors">info@aaag.kz</a>
                  </li>
              </ul>
          </div>

          <div>
              <h4 className="font-bold text-lg mb-6">Меню</h4>
              <ul className="space-y-2 text-gray-400">
                  <li><a href="#technology" className="hover:text-cyan-400 transition-colors">О технологии</a></li>
                  <li><a href="#safety" className="hover:text-cyan-400 transition-colors">Безопасность</a></li>
                  <li><a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
                  <li><a href="#routes" className="hover:text-cyan-400 transition-colors">Маршруты</a></li>
              </ul>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 relative z-10">
          <p>© Alatau Advance Air Group 2026. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
      </div>

      <style>{`
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
        }
      `}</style>
    </footer>
  );
};
