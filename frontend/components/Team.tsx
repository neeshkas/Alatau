import React from 'react';
import { Section } from './Section';
import { TEAM_MEMBERS } from '../constants';
import { motion } from 'framer-motion';
import { BackgroundImage } from './BackgroundImage';

export const Team: React.FC = () => {
  return (
    <Section id="team" className="bg-white text-aaag-dark" dark={false}>
      <div className="absolute inset-0 z-0">
        <BackgroundImage
          base="ehang184"
          alt="eVTOL Team"
          className="w-full h-full object-cover"
          width={1138}
          height={622}
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="mb-16 border-l-4 border-aaag-blue pl-6">
            <h2 className="text-5xl font-bold mb-2">Команда</h2>
            <p className="text-gray-500 uppercase tracking-widest">Лидеры инноваций</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-200">
                        {/* Placeholder for Team Images - In production use actual assets */}
                        <img 
                            src={`https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=3B2E73&color=fff&size=512&font-size=0.3`}
                            alt={member.name}
                            width={512}
                            height={512}
                            decoding="async"
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-aaag-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium text-sm">Alatau Advance Air Group</span>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-aaag-dark mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                    <div className="w-8 h-[2px] bg-gray-300 mt-3 group-hover:w-full group-hover:bg-aaag-blue transition-all duration-300"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};
