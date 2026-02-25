import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Cpu, Wind, Zap } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import Block2Photo from '../assets/images/photo-for-block2.webp';
import EvtolModel from '../assets/images/evtol-model.webp';

export const Technology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollRoot, setScrollRoot] = useState<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setScrollRoot(document.querySelector('main'));
  }, []);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    if (shouldReduceMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: scrollRoot ?? null,
        threshold: 0.35,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [scrollRoot, shouldReduceMotion]);

  return (
    <Section id="technology" className="bg-aaag-dark text-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Block2Photo}
          alt="Urban Air Mobility"
          width={2624}
          height={1632}
          className="w-full h-full object-cover brightness-125"
          decoding="async"
          loading="lazy"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-aaag-dark/65 backdrop-blur-[2px]"></div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto px-6 lg:mx-0 lg:pl-20 lg:pr-6 lg:-mt-6">
        <div className="relative grid grid-cols-1 gap-10 items-center">
          <img
            src={EvtolModel}
            alt="eVTOL model"
            width={11513}
            height={4397}
            className="hidden lg:block absolute right-[-35vw] top-1/2 -translate-y-1/2 w-[55vw] max-w-[900px] object-contain pointer-events-none"
            decoding="async"
            loading="lazy"
          />
          <div className={`text-left max-w-3xl tech-copy ${isInView && !shouldReduceMotion ? 'tech-copy--in' : ''}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#6495ED]"></div>
              <span className="uppercase tracking-widest text-[#6495ED] text-[0.82rem] font-bold">О технологии</span>
              <div className="h-[1px] w-12 bg-[#6495ED]"></div>
            </div>

            <h2 className="text-4xl md:text-[3.6rem] font-bold leading-tight mb-6">
              Urban Air Mobility:<br />
              <span className="text-[#6495ED]">Эволюция транспорта</span>
            </h2>

            <p className="text-gray-200 text-lg md:text-[1.12rem] leading-relaxed font-light max-w-2xl mb-10">
              Alatau Advance Air Group внедряет технологии eVTOL (electric Vertical Take-Off and Landing).
              Это не просто транспорт, это новая кровеносная система умного города, обеспечивающая
              бесшовную интеграцию в городскую среду.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Electric',
                  desc: '100% электрическая тяга, нулевые выбросы.',
                  icon: <Zap className="w-5 h-5" />,
                  tone: 'text-yellow-400',
                },
                {
                  title: 'Vertical',
                  desc: 'Взлет и посадка без взлетно-посадочных полос.',
                  icon: <Wind className="w-5 h-5" />,
                  tone: 'text-cyan-300',
                },
                {
                  title: 'Smart',
                  desc: 'Интеллектуальная система управления трафиком.',
                  icon: <Cpu className="w-5 h-5" />,
                  tone: 'text-purple-300',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-white/10 bg-white/5 px-5 py-6 hover:bg-white/10 transition-colors tech-card ${
                    isInView && !shouldReduceMotion ? 'tech-card--in' : ''
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 mb-3 ${item.tone}`}>
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      {item.icon}
                    </span>
                    <h4 className="text-[1rem] font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-[0.9rem] text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .tech-copy {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition: transform 600ms ease-out 150ms, opacity 450ms ease-out 150ms;
          will-change: transform, opacity;
        }
        .tech-copy--in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .tech-card {
          opacity: 0;
          transform: translate3d(0, 10px, 0) scale(0.99);
          transition: transform 500ms ease-out, opacity 350ms ease-out;
          will-change: transform, opacity;
        }
        .tech-card--in {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-copy,
          .tech-card {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </Section>
  );
};


