'use client';

import React from 'react';
import { Navigation } from '../../components/navigation';
import { Footer } from '../../components/footer';
import { InsightsContent } from '@/components/insights-content';

export default function ROI() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white selection:bg-primary/30 pt-24">
        
        {/* Full Insights Content Component */}
        <InsightsContent />

        {/* CTA Section */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Become Our Next Success Story
            </h2>
            <p className="text-xl text-white/40 mb-12 font-medium">
              Join the elite group of businesses that have unlocked exponential growth with Radices AI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl"
            >
              Get a Free AI Audit
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
