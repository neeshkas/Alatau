import React from 'react';
import { Section } from './Section';
import { motion, useReducedMotion } from 'framer-motion';
import Block4Photo from '../assets/assets/photo_for_block4.png';

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
        <img
          src={Block4Photo}
          alt="Clean Sky"
          width={2624}
          height={1632}
          className="w-full h-full object-cover"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 md:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_1fr] gap-12 items-start">
          <div className="space-y-10 lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
              <span className="h-px w-10 bg-aaag-blue"></span>
              Экология и тишина
              <span className="h-px w-10 bg-aaag-blue"></span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Чистое небо,
              <span className="block text-aaag-blue">тихие маршруты</span>
            </h2>
          </div>

          <div className="space-y-10 lg:col-start-1 lg:row-start-2">
            <div
              className="bg-white/90 border border-aaag-blue/10 shadow-[0_30px_60px_rgba(15,23,42,0.12)] p-6 md:p-8"
              style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 18%)' }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Электрическая тяга eVTOL снижает шумовую нагрузку и полностью исключает выбросы CO2,
                сохраняя воздух Alatau City прозрачным.
              </p>
            </div>

            <div className="rounded-3xl border border-aaag-blue/10 bg-white/80 p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Уровень шума</p>
              <span className="text-xs uppercase tracking-[0.35em] text-gray-400">dB scale</span>
            </div>
            <div className="mt-6 space-y-4">
              {NOISE_LEVELS.map((item, idx) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-28 text-xs uppercase tracking-wide text-gray-500">{item.label}</div>
                  <div className="flex-1">
                    <div className="h-3 rounded-full bg-gray-200/70 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.tone }}
                        initial={shouldReduceMotion ? { width: `${item.value}%` } : { width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 0.9, delay: idx * 0.15 }}
                        viewport={{ once: true, amount: 0.6 }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-gray-700">{item.value} dB</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-5 text-[10px] uppercase tracking-[0.35em] text-gray-400">
              {[0, 25, 50, 75, 100].map((tick) => (
                <span key={tick} className="text-center">{tick}</span>
              ))}
            </div>
          </div>
          </div>

          <div className="rounded-[28px] border border-aaag-blue/15 bg-gradient-to-br from-white via-white to-aaag-blue/5 p-6 md:p-8 shadow-[0_25px_50px_rgba(15,23,42,0.12)] lg:col-start-2 lg:row-start-2 lg:self-stretch">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">CO2</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-aaag-blue mt-3">
                  Нулевые выбросы
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2 max-w-lg">
                  100% электрическая силовая установка без локальных загрязнений.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-aaag-blue/60 bg-white flex items-center justify-center text-3xl md:text-4xl font-bold text-aaag-blue shadow-[0_12px_30px_rgba(59,46,115,0.18)]">
                  0%
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  Quiet · Clean · Efficient
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
