import React from 'react';
import { Section } from './Section';
import { Cpu, Wind, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { BackgroundImage } from './BackgroundImage';

export const Technology: React.FC = () => {
  return (
    <Section id="technology" className="bg-aaag-dark text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <BackgroundImage
          base="lilium-jet"
          alt="eVTOL Technology"
          className="w-full h-full object-cover"
          width={1440}
          height={1080}
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-aaag-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 justify-center"
          >
             <div className="h-[1px] w-12 bg-cyan-400"></div>
             <span className="uppercase tracking-widest text-cyan-400 text-sm font-bold">О технологии</span>
             <div className="h-[1px] w-12 bg-cyan-400"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
          >
            Urban Air Mobility:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Эволюция Транспорта</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto mb-16"
          >
            Alatau Advance Air Group внедряет технологии eVTOL (electric Vertical Take-Off and Landing). 
            Это не просто транспорт, это новая кровеносная система умного города, обеспечивающая 
            бесшовную интеграцию в городскую среду.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="p-8 border border-white/20 bg-black/40 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Electric</h4>
              <p className="text-sm text-gray-300">100% электрическая тяга, нулевые выбросы.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="p-8 border border-white/20 bg-black/40 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wind className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Vertical</h4>
              <p className="text-sm text-gray-300">Взлет и посадка без взлетно-посадочных полос.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="p-8 border border-white/20 bg-black/40 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
            >
               <div className="w-14 h-14 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-purple-400" />
               </div>
              <h4 className="text-2xl font-bold mb-3">Smart</h4>
              <p className="text-sm text-gray-300">Интеллектуальная система управления трафиком.</p>
            </motion.div>
          </div>
      </div>
    </Section>
  );
};
