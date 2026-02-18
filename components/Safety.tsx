import React, { useRef, useState } from 'react';
import { Section } from './Section';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ShieldCheck, Anchor, BatteryCharging, Activity } from 'lucide-react';
import Block3Photo from '../assets/assets/photo_for_block3.png';

const SAFETY_POINTS = [
  {
    title: 'Двойная тяга',
    desc: '2 независимых двигателя на каждый пропеллер — отказоустойчивость по контуру.',
    icon: <Activity className="w-6 h-6" />,
    marker: { x: '12%', y: '18%' },
  },
  {
    title: 'Баланс',
    desc: 'Авто-отключение парного двигателя при сбое с сохранением симметрии.',
    icon: <ShieldCheck className="w-6 h-6" />,
    marker: { x: '78%', y: '12%' },
  },
  {
    title: 'Посадка',
    desc: 'Планирование и посадка возможны даже при отказе части винтов.',
    icon: <Anchor className="w-6 h-6" />,
    marker: { x: '18%', y: '78%' },
  },
  {
    title: 'Резерв',
    desc: '3 контура управления + аварийная батарея для критических ситуаций.',
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
          src={Block3Photo}
          alt="Safety"
          width={2624}
          height={1632}
          className="w-full h-full object-cover"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 md:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
              <span className="h-px w-10 bg-aaag-blue"></span>
              Безопасность
              <span className="h-px w-10 bg-aaag-blue"></span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Safety as a system,
              <span className="block text-aaag-blue">not a feature</span>
            </h2>

            <div
              className="bg-white/90 border border-aaag-blue/10 shadow-[0_25px_60px_rgba(15,23,42,0.12)] p-6 md:p-8 mb-10"
              style={{ clipPath: 'polygon(0 0, 92% 0, 100% 18%, 100% 100%, 0 100%)' }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Инженерия AAAG строится вокруг сценариев отказа. Архитектура силовых и управляющих
                контуров продумана так, чтобы каждый этап полета был контролируемым.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAFETY_POINTS.map((point, idx) => {
                const isActive = idx === activeIndex || shouldReduceMotion;
                return (
                  <motion.div
                    key={point.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`rounded-2xl border p-5 transition-colors ${
                      isActive
                        ? 'bg-white border-aaag-blue/40 shadow-[0_12px_30px_rgba(30,64,175,0.12)]'
                        : 'bg-white/70 border-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 text-aaag-blue">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${isActive ? 'bg-aaag-blue text-white' : 'bg-aaag-blue/10'}`}>
                        {point.icon}
                      </span>
                      <h3 className="text-lg font-semibold">{point.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/70 rounded-[40%] blur-2xl"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[38%] border border-aaag-blue/20 bg-white/60"></div>
              <div className="absolute inset-6 rounded-[35%] border border-dashed border-aaag-blue/30"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-[32%] border border-aaag-blue/40 bg-white shadow-lg"></div>
                <div className="absolute w-20 h-2 bg-aaag-blue/40 rounded-full"></div>
                <div className="absolute h-20 w-2 bg-aaag-blue/40 rounded-full"></div>
              </div>

              {SAFETY_POINTS.map((point, idx) => {
                const isActive = idx === activeIndex || shouldReduceMotion;
                return (
                  <motion.div
                    key={point.title}
                    className="absolute flex items-center gap-2"
                    style={{ left: point.marker.x, top: point.marker.y }}
                    animate={shouldReduceMotion ? {} : { scale: isActive ? 1.1 : 0.95, opacity: isActive ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className={`w-3 h-3 rounded-full ${isActive ? 'bg-aaag-blue' : 'bg-aaag-blue/40'}`}></span>
                    <span className="text-xs font-semibold text-gray-700">{idx + 1}</span>
                  </motion.div>
                );
              })}

              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" aria-hidden>
                  <path d="M15 20 Q50 5 85 20" stroke="#93C5FD" strokeWidth="0.6" fill="none" />
                  <path d="M15 80 Q50 95 85 80" stroke="#93C5FD" strokeWidth="0.6" fill="none" />
                  <path d="M20 15 Q5 50 20 85" stroke="#93C5FD" strokeWidth="0.6" fill="none" />
                  <path d="M80 15 Q95 50 80 85" stroke="#93C5FD" strokeWidth="0.6" fill="none" />
                </svg>
              </div>
            </div>

            <div className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-gray-500">
              Interactive Drone Safety Matrix
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
