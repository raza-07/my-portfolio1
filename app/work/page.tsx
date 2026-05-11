'use client';

import React, { useRef } from 'react';
import { Navigation } from '../../components/navigation';
import { Footer } from '../../components/footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { WorkContent } from '@/components/work-content';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToWork = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        
        {/* Experience Hero */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto w-full">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full animate-fade-in">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50">Production Case Studies</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none animate-reveal">
                SYSTEMIC <br /> IMPACT. <br />
                <span className="text-primary text-glow">PROVEN SCALE.</span>
              </h1>
            </div>
          </div>

          <div 
            onMouseEnter={scrollToWork}
            className="absolute bottom-16 left-0 w-full flex flex-col items-center gap-4 animate-fade-in delay-700 cursor-pointer group/scroll z-20"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative w-12 h-12 border border-foreground/10 rounded-full flex items-center justify-center bg-background/50 backdrop-blur-md group-hover:border-primary/50 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary rotate-90 animate-[bounce_2s_infinite]" />
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/20 group-hover:text-primary transition-colors">Navigate Insights</span>
          </div>
        </section>

        {/* Full Work Content Component */}
        <div ref={containerRef}>
          <WorkContent />
        </div>

        {/* Final CTA */}
        <section className="py-40 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">LEAVE YOUR MARK.</h2>
            <p className="text-xl text-foreground/30 font-medium">Ready to build the next system that defines your industry?</p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-primary/80 transition-all duration-500 shadow-2xl"
              >
                Start a Case Study
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
