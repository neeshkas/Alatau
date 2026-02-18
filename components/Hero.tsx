import React from 'react';
import { motion } from 'framer-motion';
import heroPoster from '../assets/evtol-optimized/hero-poster.jpg';

export const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden snap-start snap-always"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px 1000px' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/14278493/14278493-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-aaag-blue/40 via-aaag-dark/30 to-aaag-dark"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6"
        >
           <span className="inline-block px-4 py-1 border border-cyan-400/50 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md">
             Частный Инновационный Проект
           </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-white uppercase tracking-tighter leading-none mb-6 font-sans mix-blend-overlay hero-outline"
        >
          Alatau<br />
          <span className="text-white">Advance</span><br />
          Air Group
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light tracking-wide"
        >
          Новый горизонт для инвестиций и инноваций. <br/>
          Проект городского аэротакси в Alatau City.
        </motion.p>

        
      </div>
      <style>{`
        .hero-outline {
          text-shadow:
            0 0 8px rgba(107, 70, 193, 0.4),
            0 0 16px rgba(107, 70, 193, 0.28);
        }
      `}</style>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-10 h-full w-[1px] bg-white/10 hidden md:block"></div>
      <div className="absolute top-0 right-10 h-full w-[1px] bg-white/10 hidden md:block"></div>
    </div>
  );
};
