'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Final CTA Card - Based on veloq.tech style */}
        <div className="relative group mb-32 max-w-6xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-foreground/5 border border-foreground/10 rounded-[3rem] p-12 md:p-16 text-center space-y-8 overflow-hidden backdrop-blur-sm">
            {/* Acceptance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/70">Currently accepting new partners</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[0.9]">
              Ready to scale your <br />
              <span className="text-primary italic">Systemic Intelligence?</span>
            </h2>
            
            <p className="text-lg text-foreground/40 max-w-xl mx-auto font-medium leading-relaxed">
              We architect the neural foundations that automate high-stakes complexity. Schedule a system audit to map your path to 10x operational scale.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="/contact"
                className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-xl shadow-primary/20"
              >
                Initiate System Audit <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://www.linkedin.com/in/radices-the-roots-8a673b2ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-5 bg-foreground/[0.03] border border-foreground/10 text-foreground rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-foreground/5 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Dark Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-foreground/5">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-4">
            <img src="/logo.svg" alt="Radices Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500" />
            <span className="font-black text-2xl tracking-[0.3em] text-foreground uppercase group-hover:text-primary transition-colors">Radices</span>
          </Link>

          {/* Tagline & Copyright */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
              Engineering-first — AI-driven — Results-focused
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-bold text-foreground/80 tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                HQ: Silicon Valley, CA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                +1 (650) 665-6019
              </span>
            </div>
            <p className="text-[9px] font-bold text-foreground/30 tracking-widest">
              &copy; {currentYear} <span className="text-primary/50">RADICES</span>. ALL RIGHTS RESERVED.
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
