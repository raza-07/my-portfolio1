'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Shield, Target, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white selection:bg-primary/30 pt-32">
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">The Agency</p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] md:leading-[0.9]">
              RADICES <br />
              <span className="text-white/40">ENGINEERING</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-3xl leading-relaxed font-medium">
              We bridge the gap between human intuition and machine precision. Radices engineers the cognitive foundations for the world's most ambitious brands.
            </p>
          </div>
        </section>

        <section className="py-40 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-[4/3] bg-white/5 border border-white/10 p-2 rounded-none">
                <img src="/radices_hq.png" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Radices HQ" />
              </div>
              <div className="space-y-16">
                 {[
                   { icon: Target, title: 'Precision Orchestration', desc: 'Every agent we deploy is tuned for maximum accuracy and zero-latency performance.' },
                   { icon: Shield, title: 'Hardened Architecture', desc: 'Enterprise-grade security is baked into the neural foundation, not added as an afterthought.' },
                   { icon: Globe, title: 'Global Intelligence', desc: 'Operating at the intersection of international markets and local technical nuance.' }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                         <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                         <p className="text-white/50 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
