'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, History } from 'lucide-react';

export function AboutContent() {
  return (
    <div className="bg-background text-foreground border-t border-foreground/5">
      {/* Hero Section - The Roots of Radices */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Our Origin Story</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif tracking-normal leading-[1.1]">
                ROOTED IN <br />
                <span className="text-primary text-glow font-sans font-bold">REALITY.</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg text-foreground/40 font-medium leading-relaxed max-w-xl">
                  Radices was born from a single observation: the physical world is ripe for 10x digital transformation. We don&apos;t just build software; we architect the roots of your future infrastructure.
                </p>
                <p className="text-base md:text-lg text-foreground/40 font-medium leading-relaxed max-w-xl">
                  Our mission is to bypass the noise of generic AI implementations and deliver hardened, autonomous systems that drive genuine operational value. We specialize in high-stakes environments where reliability is the only metric that matters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {[
                  { label: 'Systemic Integrity', icon: Target },
                  { label: 'Autonomous Logic', icon: Rocket },
                  { label: 'Measurable ROI', icon: Users }
                ].map((pillar, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 group/pillar">
                    <pillar.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-foreground/60 transition-colors">{pillar.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-1000"></div>
                <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-3xl bg-foreground/[0.02] border border-foreground/10 p-8 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <img 
                    src="/logo.svg" 
                    alt="Radices Roots Logo" 
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Lahore Insight Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden group relative">
                <img 
                  src="/images/about/minar-e-pakistan.png" 
                  alt="Minar-e-Pakistan Lahore" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 italic">Site Visit: Lahore, 2023</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-500 cursor-default group/chip">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Est. 2023</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
                THE LAHORE <br /> <span className="text-primary">EPIPHANY.</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-base text-foreground/50 leading-relaxed font-medium">
                  In 2023, during our final semester, we stood on-site at a massive physical infrastructure project in Lahore. We had just deployed a thermofarming digital solution, but seeing the operations in person changed everything.
                </p>
                <p className="text-base text-foreground/50 leading-relaxed font-medium">
                  As three friends and engineers, we saw the friction, the manual overhead, and the wasted potential. We realized that if we could translate these physical challenges into mature, automated digital systems, we could unlock <span className="font-bold text-foreground">10x+ ROI</span> for any client.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="group p-8 bg-foreground/5 border border-foreground/10 rounded-3xl transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 cursor-default">
                  <h4 className="text-3xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:scale-110 origin-left">10X+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 group-hover:text-foreground/80 transition-colors">Target ROI Boost</p>
                </div>
                <div className="group p-8 bg-foreground/5 border border-foreground/10 rounded-3xl transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 cursor-default">
                  <h4 className="text-3xl font-bold text-primary mb-2 transition-transform duration-500 group-hover:scale-110 origin-left">3</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 group-hover:text-foreground/80 transition-colors">Founding Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">

            <h2 className="text-3xl md:text-4xl font-serif tracking-normal uppercase">OUR MISSION.</h2>
            <p className="text-base text-foreground/40 max-w-2xl mx-auto font-medium italic mt-4">Transforming physical ideas into high-achievable digital reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: '10x Profitability',
                desc: 'We engineer systems specifically designed to boost ROI and profit margins for clients and investors.'
              },
              {
                icon: Target,
                title: 'Mature Systems',
                desc: 'From physical concept to robust digital architecture, we build systems that are production-ready from day one.'
              },
              {
                icon: Users,
                title: 'Founder-Led',
                desc: 'We remain a lean team of dedicated friends and engineers, bringing personal ownership to every line of code.'
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-foreground/[0.02] border border-foreground/10 rounded-3xl hover:border-primary/50 transition-all duration-700 group">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all">
                  <item.icon className="w-6 h-6 text-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium group-hover:text-foreground/70 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
