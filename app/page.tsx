'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ChevronRight } from 'lucide-react';

// Import full-page content components
import { ServicesContent } from '@/components/services-content';
import { WorkContent } from '@/components/work-content';
import { InsightsContent } from '@/components/insights-content';
import { AboutContent } from '@/components/about-content';
import { ContactContent } from '@/components/contact-content';
import { ProcessContent } from '@/components/process-content';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        
        {/* Modern Ambient Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        {/* 00 / Radices Intro Hero */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-20 z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-[2.5rem] sm:text-5xl md:text-8xl lg:text-9xl font-serif tracking-normal leading-[0.95] md:leading-[0.9] animate-reveal">
              BUILT TO LAST, <br />
              <span className="text-primary text-2xl sm:text-4xl md:text-6xl lg:text-7xl block mt-4 font-sans font-bold">NOT JUST TO LAUNCH</span>
            </h1>

            <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in delay-100 px-4 sm:px-0">
              Deep-rooted AI engineering. We build the full-stack automation and GenAI products that turn technical complexity into a competitive edge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in delay-200">
              <Link
                href="/contact"
                className="group relative px-12 py-5 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95"
              >
                Book a Call
              </Link>
              <Link
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-12 py-5 bg-transparent border border-foreground/10 text-foreground font-black uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-500 hover:bg-foreground/5 hover:border-foreground/30 hover:scale-105 active:scale-95"
              >
                View Work
              </Link>
            </div>

            {/* Strategic Impact Metrics */}
            <div className="flex items-center justify-center gap-12 md:gap-24 pt-20 animate-fade-in delay-300">
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-foreground tracking-normal mb-2 group-hover:text-primary transition-colors duration-500">99.9%</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Stability</p>
              </div>
              <div className="w-[1px] h-12 bg-foreground/10"></div>
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-primary tracking-normal mb-2 group-hover:scale-110 transition-all duration-500">8+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Live Systems</p>
              </div>
              <div className="w-[1px] h-12 bg-foreground/10"></div>
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-foreground tracking-normal mb-2 group-hover:text-primary transition-colors duration-500">310%</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Avg. ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Our Niche & Technologies */}
        <section id="info" className="py-24 bg-foreground/[0.02] border-y border-foreground/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16 text-center animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Strategic Focus</p>
                <div className="w-12 h-[1px] bg-primary"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-normal mb-8 uppercase">OUR NICHE.</h2>
              <p className="text-xl text-foreground/40 max-w-3xl mx-auto font-medium leading-relaxed">
                We specialize in bridging the gap between <span className="text-foreground font-bold">complex physical operations</span> and <span className="text-primary font-bold">mature AI ecosystems</span>. Our niche is high-stakes automation where reliability, security, and 10x ROI are non-negotiable.
              </p>
            </div>

            <div className="mt-20">
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="w-full overflow-hidden relative group">
                  <div className="flex animate-ticker whitespace-nowrap gap-12 text-sm font-black uppercase tracking-[0.2em] text-foreground/25 hover:[animation-play-state:paused] transition-colors duration-500">
                    {[1, 2, 3, 4].map((i) => (
                      <React.Fragment key={i}>
                        <span className="hover:text-primary transition-colors cursor-default">OpenAI</span>
                        <span className="hover:text-primary transition-colors cursor-default">NestJS</span>
                        <span className="hover:text-primary transition-colors cursor-default">Next.js 15</span>
                        <span className="hover:text-primary transition-colors cursor-default">Python</span>
                        <span className="hover:text-primary transition-colors cursor-default">FastAPI</span>
                        <span className="hover:text-primary transition-colors cursor-default">Docker</span>
                        <span className="hover:text-primary transition-colors cursor-default">AWS</span>
                        <span className="hover:text-primary transition-colors cursor-default">Playwright</span>
                        <span className="hover:text-primary transition-colors cursor-default">BullMQ</span>
                        <span className="hover:text-primary transition-colors cursor-default">PostgreSQL</span>
                        <span className="hover:text-primary transition-colors cursor-default">LangChain</span>
                        <span className="hover:text-primary transition-colors cursor-default">Pinecone</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / Full Services Content */}
        <motion.div 
          id="services"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ServicesContent />
        </motion.div>

        {/* 02 / Full Work Experience Content */}
        <motion.div 
          id="work"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <WorkContent />
        </motion.div>

        {/* 03 / Full Insights Content */}
        <motion.div 
          id="insights"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <InsightsContent />
        </motion.div>

        {/* 04 / The Process Roadmap & Technical FAQs */}
        <motion.div 
          id="process"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProcessContent />
        </motion.div>

        {/* 05 / Full About Story Content */}
        <motion.div 
          id="about"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutContent />
        </motion.div>

        {/* 07 / Full Contact Inquiry Content */}
        <motion.div 
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactContent />
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
