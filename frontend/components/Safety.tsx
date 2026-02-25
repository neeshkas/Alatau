import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyBg from '../assets/assets/photo_for_block3.webp';
import SafetyCenter from '../assets/for security block 1.webp';

const SAFETY_CARDS = [
  {
    title: 'Fail-safe first',
    desc: 'Every function has redundancy to ensure safe flight in case of failure.',
    icon: <Activity className="w-5 h-5" />,
  },
  {
    title: 'Redundancy by design',
    desc: 'Critical systems are duplicated to withstand multiple failures.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Controlled degradation',
    desc: 'Systems gracefully degrade over time instead of abrupt shutdown.',
    icon: <Anchor className="w-5 h-5" />,
  },
];

export const Safety: React.FC = () => {
  return (
    <Section id="safety" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
      <div className="absolute inset-0 z-0">
        <img
          src={SafetyBg}
          alt="Safety background"
          width={2624}
          height={1632}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#FCFBFE]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
              <span className="h-px w-10 bg-aaag-blue"></span>
              Safety Architecture
              <span className="h-px w-10 bg-aaag-blue"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-4 leading-tight text-aaag-dark">
              Safety is not a feature.
              <span className="block text-aaag-blue">It is a system.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Every AAAG aircraft is designed around failure scenarios, not ideal conditions.
            </p>
            <Link
              to="/security"
              className="safety-slide-btn inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.35em]"
            >
              Узнать больше
            </Link>
          </div>

          <div className="w-full h-full lg:scale-[1.05] lg:origin-center lg:translate-x-6">
            <img
              src={SafetyCenter}
              alt="Safety hero"
              className="w-full h-full object-contain"
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-aaag-blue/60"></span>
            <p className="text-xs font-semibold text-aaag-dark uppercase tracking-[0.35em]">Design Philosophy</p>
            <span className="h-px w-10 bg-aaag-blue/60"></span>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
          >
            {SAFETY_CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={{ hidden: { opacity: 0, y: 14, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="rounded-xl border p-6 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)] border-[#EEEAF7]"
              >
                <div className="flex items-center gap-3 text-[#4E3C8B] mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F1EEFA] border border-[#E7E2F4]">
                    {card.icon}
                  </span>
                  <h3 className="text-base font-semibold text-aaag-dark">{card.title}</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
