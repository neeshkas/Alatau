import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';
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

const ARCHITECTURE_STEPS = [
  { id: '01', title: 'Detection', desc: 'Failure is detected within milliseconds.' },
  { id: '02', title: 'Isolation', desc: 'Faulty propeller is isolated by shutting down paired motors.' },
  { id: '03', title: 'Reconfiguration', desc: 'Autonomous system redistributes power and adjusts thrust.' },
  { id: '04', title: 'Safe landing', desc: 'Controlled landing remains possible even with 2 propellers operating.' },
];

const ARCHITECTURE_CALLOUTS = [
  { title: 'Propulsion', desc: 'Dual-motor redundant propellers.', positionClass: 'lg:top-1 lg:left-3' },
  { title: 'Power', desc: 'Fail-safe battery backup.', positionClass: 'lg:top-1 lg:right-3' },
  { title: 'Flight control', desc: 'Automated failure detection and balance stabilization.', positionClass: 'lg:bottom-16 lg:left-0' },
  { title: 'Emergency logic', desc: 'Automated reconfiguration for safe landing.', positionClass: 'lg:bottom-16 lg:right-0' },
];

const ARCHITECTURE_SUMMARY = [
  { id: '01', title: 'Propulsion', desc: 'Dual-motor redundant propellers.' },
  { id: '02', title: 'Power', desc: 'Fail-safe battery backup.' },
  { id: '03', title: 'Reconfiguration', desc: 'Autonomous system redistributes power and adjusts thrust.' },
  { id: '04', title: 'Safe landing', desc: 'Controlled landing even with 2 propellers operating.' },
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
                <Link
                  to="/main#safety"
                  className="safety-slide-btn safety-slide-btn--reverse inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  Назад на главную
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

        {/* Section 2 */}
        <Section id="safety-architecture" className="bg-[#F3F4F9] text-aaag-dark" dark={false}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(155,146,198,0.2),transparent_58%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(237,239,247,0.94)_100%)]"></div>
          </div>

          <div className="relative z-10 max-w-[1240px] mx-auto px-6 w-full pt-8 md:pt-10 pb-6 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] lg:grid-rows-[auto_1fr] gap-x-7 gap-y-4 h-full lg:max-h-[calc(100vh-11rem)]">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              >
                <div className="mb-4 inline-flex items-center gap-3">
                  <p className="text-sm md:text-base font-semibold uppercase tracking-[0.34em] text-aaag-blue">Safety Core</p>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[2.85rem] font-bold leading-[1.05] max-w-[34rem]">
                  Fail-safe architecture designed for controlled landing
                </h2>
                <p className="text-[0.96rem] md:text-[1rem] text-[#56516E] leading-relaxed max-w-[31rem] mt-3 mb-5">
                  Redundant propulsion, power segmentation and autonomous emergency logic.
                </p>

                <div className="space-y-3">
                  {ARCHITECTURE_STEPS.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      variants={{ hidden: { opacity: 0, x: -20, y: 10 }, show: { opacity: 1, x: 0, y: 0 } }}
                      transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
                      className="rounded-[20px] border border-[#E2DDEE] bg-white/95 px-4.5 py-3 md:px-5 md:py-3.5 shadow-[0_8px_16px_rgba(41,34,78,0.08)]"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-aaag-blue text-white flex items-center justify-center text-[0.9rem] font-semibold shrink-0">
                          {step.id}
                        </div>
                        <div>
                          <h3 className="text-[0.95rem] md:text-[1.02rem] font-semibold uppercase tracking-[0.03em] text-[#25233B]">
                            {step.title}
                          </h3>
                          <p className="text-[0.88rem] md:text-[0.93rem] text-[#5D5976] mt-1 leading-[1.35]">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 26, y: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative lg:pt-1 lg:row-span-2"
              >
                <div className="relative lg:translate-x-[0.8rem]">
                  <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[84%] h-[76%] rounded-full bg-[radial-gradient(circle,rgba(179,171,214,0.32)_0%,rgba(179,171,214,0.1)_48%,rgba(179,171,214,0)_74%)]"></div>
                  <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[86%] h-[62%] rounded-full border border-[#DCD8EB]/70"></div>
                  <img
                    src={SafetyDiagram}
                    alt="Safety diagram"
                    className="relative z-10 w-full max-w-[680px] mx-auto h-auto object-contain opacity-[0.97]"
                    decoding="async"
                    loading="lazy"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 lg:hidden">
                    {ARCHITECTURE_CALLOUTS.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-[#DCD6EA] bg-white/95 px-4 py-3 shadow-[0_10px_22px_rgba(41,34,78,0.08)]">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-aaag-blue">{item.title}</h4>
                        <p className="text-sm text-[#5E5978] mt-1.5 leading-[1.35]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {ARCHITECTURE_CALLOUTS.map((item) => (
                    <div
                      key={`desktop-${item.title}`}
                      className={`hidden lg:block absolute ${item.positionClass} w-[190px] rounded-xl border border-[#DCD6EA] bg-white/96 px-3.5 py-2 shadow-[0_8px_16px_rgba(41,34,78,0.09)]`}
                    >
                      <h4 className="text-xs font-semibold uppercase tracking-[0.07em] text-aaag-blue">{item.title}</h4>
                      <p className="text-[0.82rem] text-[#5E5978] mt-1 leading-[1.25]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-center px-2">
                  <h3 className="text-[2.2rem] md:text-[2.55rem] font-semibold leading-[1.05] text-[#27253B]">Redundant Safety Architecture</h3>
                  <p className="text-[0.95rem] md:text-[1rem] text-[#5D5976] mt-2">
                    Highly redundant system ensuring safe operation in failure scenarios.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="mt-4 rounded-[20px] border border-[#DDD8EB] bg-white/94 shadow-[0_12px_22px_rgba(41,34,78,0.08)] overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {ARCHITECTURE_SUMMARY.map((item, idx) => (
                      <div
                        key={`summary-${item.id}`}
                        className={`px-4 py-3.5 md:px-5 md:py-3.5 ${
                          idx % 2 === 0 ? 'md:border-r md:border-[#E6E1F1]' : ''
                        } ${idx < 2 ? 'border-b border-[#E6E1F1]' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-full bg-aaag-blue text-white flex items-center justify-center text-[0.9rem] font-semibold shrink-0">
                            {item.id}
                          </div>
                          <div>
                            <h4 className="text-[0.93rem] md:text-[0.98rem] font-semibold uppercase tracking-[0.04em] text-[#25233B]">
                              {item.title}
                            </h4>
                            <p className="text-[0.83rem] md:text-[0.88rem] text-[#5D5976] mt-1 leading-[1.3]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Section 3 */}
        <Section id="safety-scenarios" className="bg-[#F6F8FB] text-aaag-dark" dark={false}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Failure Scenarios</h2>
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
              <div className="space-y-6">
                {FAILURE_LIST.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -28, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.35 }}
                    whileHover={{ scale: 1.015, x: 6 }}
                    className="rounded-[38px] border border-[#DDD4F2] bg-white/95 px-5 py-4 md:px-7 md:py-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_18px_38px_rgba(59,46,115,0.17)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#F1EEFA] border border-[#E7E2F4] flex items-center justify-center text-aaag-blue shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-aaag-dark">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
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






