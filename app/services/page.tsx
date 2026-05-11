'use client';

import React, { useRef } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ChevronRight } from 'lucide-react';
import { ServicesContent } from '@/components/services-content';

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white pt-20 selection:bg-primary/30">
        
        {/* Modern Ambient Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Services Hero */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-primary"></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Systemic Intelligence</p>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] animate-reveal">
                NEURAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/10">ARCHITECTURES</span>
              </h1>
              
              <p className="text-2xl md:text-5xl font-light italic tracking-tighter text-white/20 animate-fade-in delay-200 ml-1 md:ml-2">
                engineered for infinite competitive advantage.
              </p>
            </div>
          </div>

          <div 
            onMouseEnter={scrollToServices}
            className="absolute bottom-16 left-0 w-full flex flex-col items-center gap-4 animate-fade-in delay-500 cursor-pointer group/scroll z-20"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-primary/50 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary rotate-90 animate-[bounce_2s_infinite]" />
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-primary transition-colors">Explore Architectures</span>
          </div>
        </section>

        {/* Full Services Grid Component */}
        <div ref={servicesRef}>
          <ServicesContent />
        </div>

        {/* Final CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              READY TO <span className="text-primary text-glow">DEPLOY?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium">
              Join the elite teams scaling their technical advantage through neural automation. Your transformation begins with a single audit.
            </p>
            <div className="pt-6">
              <a
                href="/contact"
                className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:shadow-primary/30"
              >
                Initiate Project Audit
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
