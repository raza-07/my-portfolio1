'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentDate = new Date();
  const currentMonthNumber = currentDate.getMonth() + 1;
  const slots = currentMonthNumber % 2 !== 0 ? 2 : 3;
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer className="relative bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Final CTA Card */}
        <div className="relative group mb-24 max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] p-8 md:p-12 text-center space-y-6 overflow-hidden backdrop-blur-sm">
            {/* Acceptance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm animate-fade-in mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span suppressHydrationWarning>Only {slots} client slots open for {monthName} {year}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
              Ready to scale your <br />
              <span className="text-primary italic">Systemic Intelligence?</span>
            </h2>
            
            <p className="text-sm md:text-base text-foreground/50 max-w-lg mx-auto font-medium leading-relaxed">
              We architect the neural foundations that automate high-stakes complexity. Schedule a system audit to map your path to 10x operational scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/radices-the-roots-8a673b2ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-background border border-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/5 hover:border-foreground/20 transition-all hover:scale-105 active:scale-95 group text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-colors" /> LinkedIn
              </a>
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 group text-sm sm:text-base whitespace-nowrap"
              >
                Initiate System Audit <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Minimalist Dark Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-foreground/5">
          {/* Logo Section */}
          <Link href="/" onClick={handleScrollToTop} className="group flex items-center gap-4">
            <img src="/logo.svg" alt="Radices Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500" />
            <span className="font-black text-2xl tracking-[0.3em] text-foreground uppercase group-hover:text-primary transition-colors">Radices</span>
          </Link>

          {/* Tagline & Copyright */}
          <div className="flex flex-col items-center gap-3 text-center w-full px-4">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.4em] text-foreground/40 leading-relaxed max-w-full">
              Engineering-first — AI-driven — Results-focused
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-bold text-foreground/80 tracking-widest uppercase w-full">
              <span className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                HQ: Silicon Valley, CA
              </span>
              <span className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                +1 (650) 665-6019
              </span>
            </div>
            <p className="text-[9px] font-bold text-foreground/30 tracking-widest uppercase text-center mt-1">
              &copy; {year} <Link href="/" onClick={handleScrollToTop} className="text-primary/50 hover:text-primary transition-colors font-black">RADICES</Link>. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-all duration-300"
            >
              Upwork <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:radices.technologies@gmail.com" 
              className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-all duration-300"
            >
              Email <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/radices-the-roots-8a673b2ba/" 
              className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-all duration-300"
            >
              LinkedIn <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
