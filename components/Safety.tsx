import React, { useRef, useState } from 'react';
import { Section } from './Section';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ShieldCheck, Anchor, BatteryCharging, Activity } from 'lucide-react';
import SafetyBg from '../assets/assets/photo_for_block3.png';
import SafetyCenter from '../eVTOL.png';

const SAFETY_POINTS = [
  {
    title: 'Двойная тяга',
    desc: 'Два независимых мотора на каждом роторе — запас тяги и устойчивости в любой ситуации.',
    icon: <Activity className="w-6 h-6" />,
    marker: { x: '12%', y: '18%' },
  },
  {
    title: 'Баланс',
    desc: 'Система выравнивает нагрузку и сохраняет симметрию даже при отказе пары двигателей.',
    icon: <ShieldCheck className="w-6 h-6" />,
    marker: { x: '78%', y: '12%' },
  },
  {
    title: 'Посадка',
    desc: 'Сценарии мягкой посадки рассчитаны на частичные отказы винтов и критические режимы.',
    icon: <Anchor className="w-6 h-6" />,
    marker: { x: '18%', y: '78%' },
  },
  {
    title: 'Резерв',
    desc: 'Три независимых контура управления и аварийная батарея для экстремальных сценариев.',
    icon: <BatteryCharging className="w-6 h-6" />,
    marker: { x: '82%', y: '76%' },
  },
];

export const Safety: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (shouldReduceMotion) return;
    const nextIndex = Math.min(3, Math.max(0, Math.floor(v * 4)));
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  return (
    <Section id="safety" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
      <div className="absolute inset-0 z-0">
        <img
          src={SafetyBg}
          alt="Safety"
          width={2624}
          height={1632}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#F1EEFA]/90"></div>
      </div>
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
              <span className="h-px w-10 bg-aaag-blue"></span>
              Safety Architecture
              <span className="h-px w-10 bg-aaag-blue"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-4 leading-tight text-aaag-dark">
              Safety is not a feature.
              <span className="block text-aaag-blue">It is a system.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Every AAAG aircraft is designed around failure<br />
              scenarios, not ideal conditions.
            </p>
          </div>

          <div className="w-full h-full lg:scale-[0.92] lg:origin-center lg:translate-x-6">
            <img
              src={SafetyCenter}
              alt="Safety"
              className="w-full h-full object-contain"
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-aaag-blue/60"></span>
            <p className="text-xs font-semibold text-aaag-dark uppercase tracking-[0.35em]">Design Philosophy</p>
            <span className="h-px w-10 bg-aaag-blue/60"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SAFETY_POINTS.slice(0, 3).map((point, idx) => {
              const isActive = idx === activeIndex || shouldReduceMotion;
              return (
                <motion.div
                  key={point.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`rounded-xl border p-6 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition-colors min-h-[160px] aspect-[5/2] ${
                    isActive ? 'border-[#CFC6E8]' : 'border-[#EEEAF7]'
                  }`}
                >
                  <div className="flex items-center gap-3 text-[#4E3C8B] mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F1EEFA] border border-[#E7E2F4]">
                      {React.isValidElement(point.icon)
                        ? React.cloneElement(point.icon, { className: 'w-4.5 h-4.5' })
                        : point.icon}
                    </span>
                    <h3 className="text-base font-semibold text-aaag-dark">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
