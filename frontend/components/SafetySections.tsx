import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, BatteryCharging, Anchor } from 'lucide-react';
import SafetyBg from '../assets/images/photo-for-block3.webp';
import SafetyCenter from '../assets/images/for-security-block-1.webp';
import SafetyDiagram from '../assets/images/evtol-for-security-block.webp';

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

const SAFETY_NODES = [
  {
    title: 'Flight Control',
    points: ['Triple redundant controllers', 'Independent buses'],
  },
  {
    title: 'Propulsion',
    points: ['Dual motors per rotor', 'Independent power lines'],
  },
  {
    title: 'Energy',
    points: ['Segmented battery packs', 'Fire-isolated compartments'],
  },
  {
    title: 'Structure',
    points: ['Energy-absorbing fuselage', 'Reinforced landing frame'],
  },
];

const FAILURE_LIST = [
  {
    title: 'Motor failure',
    desc: 'Redundant motor takes over the faulty one. Safe flight continues.',
    icon: <Activity className="w-5 h-5" />,
  },
  {
    title: 'Battery segment failure',
    desc: 'Dual motors per rotor provide power. Safe flight continues.',
    icon: <BatteryCharging className="w-5 h-5" />,
  },
  {
    title: 'Sensor mismatch',
    desc: 'System detects and isolates the faulty sensor. Safe flight continues.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Emergency landing',
    desc: 'Emergency procedures deploy safely. Passengers land unhurt.',
    icon: <Anchor className="w-5 h-5" />,
  },
];

type SafetySectionsMode = 'hero' | 'full';

export const SafetySections: React.FC<{ mode?: SafetySectionsMode }> = ({ mode = 'full' }) => {
  const isHeroOnly = mode === 'hero';
  return (
    <>
      {/* Section 1 */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
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

      {isHeroOnly ? null : (
        <Section id="safety-architecture" className="bg-white text-aaag-dark" dark={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Safety Architecture Diagram</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            >
              {SAFETY_NODES.slice(0, 2).map((node) => (
                <motion.div
                  key={node.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="rounded-2xl border border-[#E8E3F4] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] p-5"
                >
                  <h3 className="text-base font-semibold text-aaag-blue mb-2">{node.title}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {node.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-aaag-blue rounded-full"></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <div className="relative rounded-3xl border border-[#E8E3F4] bg-[#F7F5FB] p-6 shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
              <img
                src={SafetyDiagram}
                alt="Safety diagram"
                className="w-full h-full object-contain opacity-90"
                decoding="async"
                loading="lazy"
              />
            </div>

            <motion.div
              className="space-y-4 lg:col-start-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            >
              {SAFETY_NODES.slice(2).map((node) => (
                <motion.div
                  key={node.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="rounded-2xl border border-[#E8E3F4] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] p-5"
                >
                  <h3 className="text-base font-semibold text-aaag-blue mb-2">{node.title}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {node.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-aaag-blue rounded-full"></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        </Section>
      )}

      {isHeroOnly ? null : (
        <Section id="safety-hero-repeat" className="bg-[#FCFBFE] text-aaag-dark" dark={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="text-aaag-dark">
              <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-aaag-blue">
                <span className="h-px w-10 bg-aaag-blue"></span>
                Safety Visual
                <span className="h-px w-10 bg-aaag-blue"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 leading-tight text-aaag-dark">
                Structural Integrity Preview
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Visual focus on the core architecture and geometry of the AAAG eVTOL platform.
              </p>
            </div>

            <div className="w-full h-full lg:scale-[1.05] lg:origin-center lg:translate-x-6">
              <img
                src={SafetyCenter}
                alt="Safety visual"
                className="w-full h-full object-contain"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        </Section>
      )}

      {isHeroOnly ? null : (
        <Section id="safety-scenarios" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Failure Scenarios</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <div className="space-y-6">
              {FAILURE_LIST.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F1EEFA] border border-[#E7E2F4] flex items-center justify-center text-aaag-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-aaag-dark">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-[#E8E3F4] bg-white p-8 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
              <p className="text-2xl md:text-3xl font-semibold text-aaag-dark leading-snug">
                We do not sell safety as a feature.
                <span className="block text-aaag-blue mt-3">We engineer it as a system.</span>
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mt-6">
                AAAG Engineering Team
              </p>
            </div>
          </div>
        </div>
        </Section>
      )}
    </>
  );
};


