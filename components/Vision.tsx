import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { BackgroundImage } from './BackgroundImage';

// CountUp Component
const Counter = ({ value, from = 0, prefix = "", suffix = "" }: { value: number, from?: number, prefix?: string, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      return springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = prefix + latest.toFixed(0) + suffix;
        }
      });
    }, [springValue, prefix, suffix]);
  
    return <span ref={ref} />;
};

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-gradient-to-r from-aaag-blue to-purple-900 snap-start snap-always h-screen flex items-center justify-center text-center text-white p-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
            <BackgroundImage
                base="lilium-model"
                alt="eVTOL Vision"
                className="w-full h-full object-cover opacity-20"
                width={1600}
                height={834}
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-aaag-dark/50 to-aaag-dark/80"></div>
        
        <div className="relative z-10 max-w-5xl">
            <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
            >
                Центр Евразии
            </motion.h2>
            
            <motion.p 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-light mb-16 text-gray-200"
            >
                Alatau UAM — ядро для науки и производства.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-colors"
                >
                    <div className="text-5xl font-bold text-cyan-400 block mb-3">
                        <Counter value={500} prefix="$" suffix="M+" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Потенциальные инвестиции</span>
                </motion.div>

                {/* Stat 2 */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-colors"
                >
                     <div className="text-5xl font-bold text-cyan-400 block mb-3">
                        <Counter from={300} value={1} prefix="#" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Smart City в ЦА</span>
                </motion.div>

                {/* Stat 3 */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-md hover:border-cyan-400/50 transition-colors"
                >
                     <div className="text-5xl font-bold text-cyan-400 block mb-3">
                        <Counter value={2030} />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Полная интеграция</span>
                </motion.div>
            </div>
        </div>
    </section>
  );
};
