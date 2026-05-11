'use client';

import React from 'react';
import { Navigation } from '../../components/navigation';
import { Footer } from '../../components/footer';
import { AboutContent } from '@/components/about-content';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-hidden">
        
        {/* Ambient Neural Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]"></div>
        </div>

        {/* Full About Content Component */}
        <AboutContent />

        {/* Final CTA */}
        <section className="py-40 px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex justify-center mb-8">
               <div className="w-24 h-24 p-4 bg-foreground/[0.02] border border-foreground/10 rounded-3xl">
                  <img src="/logo.svg" alt="Radices Roots" className="w-full h-full object-contain opacity-50 grayscale" />
               </div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              READY TO <br /> <span className="text-primary">TRANSFORM?</span>
            </h2>
            <p className="text-xl text-foreground/30 font-medium">Let's build the digital roots of your next 10x success story.</p>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-16 py-6 bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-primary/80 transition-all duration-500 shadow-2xl"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
