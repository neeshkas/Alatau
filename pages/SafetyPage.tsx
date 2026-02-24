import React from 'react';
import { Navigation } from '../components/Navigation';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, BatteryCharging, Anchor } from 'lucide-react';
import SafetyBg from '../assets/assets/photo_for_block3.png';
import SafetyCenter from '../assets/for security block 1.png';
import SafetyDiagram from '../assets/evtol for security block.png';

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

export const SafetyPage: React.FC = () => {
  return (
    <div className="font-sans text-base">
      <Navigation />
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar overscroll-contain pt-24 md:pt-28">
        {/* Section 1 */}
        <Section id="safety-top" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
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

        {/* Section 2 */}
        <Section id="safety-architecture" className="bg-white text-aaag-dark" dark={false}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Safety Architecture Diagram</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div className="space-y-6">
                {SAFETY_NODES.slice(0, 2).map((node) => (
                  <div key={node.title} className="rounded-2xl border border-[#E8E3F4] bg-white shadow-[0_12px_26px_rgba(15,23,42,0.06)] p-6">
                    <h3 className="text-lg font-semibold text-aaag-blue mb-3">{node.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {node.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-aaag-blue rounded-full"></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative rounded-3xl border border-[#E8E3F4] bg-[#F7F5FB] p-8 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                <img
                  src={SafetyDiagram}
                  alt="Safety diagram"
                  className="w-full h-full object-contain opacity-90"
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 lg:col-start-2">
                {SAFETY_NODES.slice(2).map((node) => (
                  <div key={node.title} className="rounded-2xl border border-[#E8E3F4] bg-white shadow-[0_12px_26px_rgba(15,23,42,0.06)] p-6">
                    <h3 className="text-lg font-semibold text-aaag-blue mb-3">{node.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {node.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-aaag-blue rounded-full"></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3 */}
        <Section id="safety-scenarios" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
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

        <Footer />
      </main>
    </div>
  );
};
