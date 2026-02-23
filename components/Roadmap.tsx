import React from 'react';
import { Section } from './Section';
import { ROADMAP_DATA } from '../constants';
import { motion } from 'framer-motion';
import RoadmapBg from '../assets/routes.png';

export const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap" className="text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={RoadmapBg}
          alt="eVTOL Roadmap"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-aaag-dark/70"></div>
      </div>
      <div className="w-full h-full flex flex-col justify-center py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
            <h2 className="text-5xl font-bold text-white mb-2">Roadmap</h2>
            <p className="text-gray-400">Путь в будущее</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto no-scrollbar pb-12 pl-6 md:pl-[calc(50vw-600px)]">
            <div className="flex gap-8 md:gap-16 w-max pr-12">
                {ROADMAP_DATA.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: item.year === '2028' ? 0.35 : 0.8,
                          delay: item.year === '2028' ? index * 0.08 : index * 0.2,
                        }}
                        viewport={{ once: true }}
                        className="relative w-[300px] md:w-[400px] group"
                    >
                        {/* Timeline Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 group-hover:bg-aaag-blue transition-colors duration-500"></div>
                        <div className="absolute top-[-5px] left-0 w-3 h-3 bg-aaag-blue rounded-full shadow-[0_0_15px_rgba(59,46,115,0.6)]"></div>

                        <div className="pt-8 pl-2 border-l border-white/10 group-hover:border-white/30 transition-all p-6 min-h-[300px] bg-white/5 backdrop-blur-sm rounded-br-3xl mt-4">
                            <span className="text-6xl font-black text-white/10 absolute top-4 right-4 z-0 group-hover:text-white/20 transition-colors">
                                {item.year}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-[#6495ED] mb-2">{item.year}</h3>
                                <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                                <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">{item.description}</p>
                                
                                <ul className="space-y-3">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1 h-1 bg-white rounded-full"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
                
                {/* Future Connector */}
                <div className="w-[100px] flex items-center justify-center border-t border-dashed border-white/20 mt-[-300px]">
                     <span className="text-gray-600 uppercase text-xs tracking-widest mt-8">Future</span>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
