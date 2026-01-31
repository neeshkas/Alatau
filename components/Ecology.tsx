import React from 'react';
import { Section } from './Section';
import { motion, useReducedMotion } from 'framer-motion';
import { BackgroundImage } from './BackgroundImage';

const NOISE_LEVELS = [
  { label: 'Грузовик', value: 80, tone: '#F97316' },
  { label: 'Автомобиль', value: 70, tone: '#F59E0B' },
  { label: 'eVTOL (AAAG)', value: 65, tone: '#10B981' },
];

export const Ecology: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="ecology" className="bg-white text-aaag-dark relative" dark={false}>
      <div className="absolute inset-0 z-0">
        <BackgroundImage
          base="cityairbus-nextgen"
          alt="Clean Sky"
          className="w-full h-full object-cover"
          width={1600}
          height={478}
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
              <span className="h-px w-10 bg-aaag-blue"></span>
              Экология и тишина
              <span className="h-px w-10 bg-aaag-blue"></span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Чистое небо,
              <span className="block text-aaag-blue">тихие маршруты</span>
            </h2>

            <div
              className="bg-white/90 border border-aaag-blue/10 shadow-[0_30px_60px_rgba(15,23,42,0.12)] p-6 md:p-8 mb-10"
              style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 18%)' }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Электрическая тяга eVTOL снижает шумовую нагрузку и полностью исключает выбросы CO2,
                сохраняя воздух Alatau City прозрачным.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-aaag-blue/10 bg-white/80 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">Уровень шума</p>
                <svg viewBox="0 0 280 160" className="w-full h-40">
                  {NOISE_LEVELS.map((item, idx) => {
                    const amplitude = 40 - idx * 8;
                    const y = 35 + idx * 40;
                    const path = `M 0 ${y} Q 30 ${y - amplitude} 60 ${y} T 120 ${y} T 180 ${y} T 240 ${y} T 300 ${y}`;
                    return (
                      <motion.path
                        key={item.label}
                        d={path}
                        stroke={item.tone}
                        strokeWidth="3"
                        fill="none"
                        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        viewport={{ once: true, amount: 0.6 }}
                      />
                    );
                  })}
                </svg>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  {NOISE_LEVELS.map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.value} dB</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-aaag-blue/10 bg-white/80 p-6 shadow-xl flex flex-col justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">CO2</p>
                <div className="flex items-center gap-6 mt-6">
                  <div className="w-24 h-24 rounded-full border-2 border-aaag-blue flex items-center justify-center text-3xl font-bold text-aaag-blue">
                    0%
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-aaag-blue mb-2">Нулевые выбросы</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      100% электрическая силовая установка без локальных загрязнений.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-400">
                  Quiet · Clean · Efficient
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-white/70 rounded-[42%] blur-2xl"></div>
            <div className="relative rounded-[32%] overflow-hidden border border-aaag-blue/10 shadow-2xl">
              <BackgroundImage
                base="cityairbus-3b"
                alt="Clean Sky"
                className="w-full h-full object-cover"
                width={1600}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 border border-white/70 px-6 py-4 text-center uppercase text-xs tracking-[0.35em] text-gray-600">
                  Чистое небо
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gray-400">
              <span>Low noise</span>
              <span>Zero CO2</span>
              <span>Fresh air</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
