import React, { useState } from 'react';
import { Section } from './Section';
import { ROUTES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Navigation, ArrowRight } from 'lucide-react';
import { BackgroundImage } from './BackgroundImage';

export const RoutesMap: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string | null>(ROUTES_DATA[0].id);

  return (
    <Section id="routes" className="bg-[#0f172a] text-white">
      <div className="absolute inset-0 z-0">
        <BackgroundImage
          base="cityairbus-3b"
          alt="eVTOL Routes"
          className="w-full h-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>
      </div>
      <div className="mt-16 lg:mt-20 flex flex-col lg:flex-row w-full h-full min-h-[80vh] max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10">
        
        {/* Sidebar / Accordion */}
        <div className="w-full lg:w-1/3 bg-aaag-blue/20 backdrop-blur-xl p-8 flex flex-col z-20">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                <Navigation className="text-aaag-blue" />
                Маршруты
            </h2>
            
            <div className="space-y-4">
                {ROUTES_DATA.map((route) => (
                    <button
                        key={route.id}
                        onClick={() => setActiveRoute(route.id)}
                        className={`w-full text-left p-6 rounded-xl transition-all duration-300 group border ${
                            activeRoute === route.id 
                            ? 'bg-aaag-blue text-white border-aaag-blue shadow-[0_0_20px_rgba(59,46,115,0.5)]' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                        }`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-lg">{route.from}</h3>
                            <ArrowRight size={16} className={activeRoute === route.id ? 'text-white' : 'text-gray-600'} />
                        </div>
                        <h3 className="font-bold text-lg mb-3">{route.to}</h3>
                        
                        <motion.div 
                            initial={false}
                            animate={{ height: activeRoute === route.id ? 'auto' : 0, opacity: activeRoute === route.id ? 1 : 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm font-light leading-relaxed opacity-90">
                                {route.description}
                            </p>
                        </motion.div>
                    </button>
                ))}
            </div>
        </div>

        {/* Map Visualization */}
        <div className="relative w-full lg:w-2/3 bg-[#0B1121] overflow-hidden flex items-center justify-center">
            {/* Map Background (Styled) */}
            <div className="absolute inset-0 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.0,43.25,10,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsIn0.xyz')] bg-cover bg-center grayscale contrast-125"></div>
            
            {/* Grid Overlay for Tech feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,46,115,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,46,115,0.12)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* SVG Overlay - Using viewBox to ensure coordinates align perfectly */}
            <svg className="w-full h-full absolute inset-0 z-10" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B2E73" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3B2E73" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3B2E73" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                
                {/* Flight Path */}
                <motion.path 
                    key={activeRoute} 
                    d="M 200 450 Q 500 150 800 250" 
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />

                {/* Drone Object on Path */}
                <motion.foreignObject
                   key={`drone-${activeRoute}`}
                   width="40" height="40"
                   initial={{ offsetDistance: "0%" }}
                   animate={{ offsetDistance: "100%" }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   style={{ 
                       offsetPath: 'path("M 200 450 Q 500 150 800 250")',
                       offsetRotate: "auto"
                   }}
                >
                    <div className="w-10 h-10 bg-aaag-blue rounded-full blur-md absolute"></div>
                    <div className="w-10 h-10 flex items-center justify-center relative z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </motion.foreignObject>

                {/* Start Point (Matches M 200 450) */}
                <circle cx="200" cy="450" r="8" fill="#3B2E73" />
                <circle cx="200" cy="450" r="20" fill="none" stroke="#3B2E73" strokeWidth="1" opacity="0.5" />
                
                {/* Destination Point (Matches end of curve 800 250) */}
                <circle cx="800" cy="250" r="8" fill="#ef4444" />
                <circle cx="800" cy="250" r="20" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />

                {/* Labels embedded in SVG to stick to points */}
                <foreignObject x="160" y="480" width="80" height="30">
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded text-center border border-aaag-blue/50">Start</div>
                </foreignObject>
                <foreignObject x="760" y="280" width="80" height="30">
                    <div className="bg-black/80 text-white text-xs px-2 py-1 rounded text-center border border-red-500/50">End</div>
                </foreignObject>
            </svg>
            
            <div className="absolute bottom-8 right-8 text-right z-20">
                <p className="text-xs text-aaag-blue font-mono mb-1">COORDINATES</p>
                <p className="font-mono text-xl tracking-widest">43.238° N, 76.882° E</p>
            </div>
        </div>
      </div>
    </Section>
  );
};
