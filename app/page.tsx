'use client';

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ArrowRight, ChevronRight, Cpu, Layers, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white selection:bg-primary/30">
        
        {/* Modern Ambient Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">The Future of Automation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] md:leading-[0.9] animate-reveal">
              RADICES <br />
              <span className="text-primary">INTELLIGENCE</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in delay-100 px-4 sm:px-0">
              High-stakes AI engineering for the world's most ambitious teams. We turn complexity into autonomous competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 animate-fade-in delay-200">
              <Link
                href="/contact"
                className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  Start Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="group relative px-12 py-5 bg-transparent border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-full backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white/5 active:scale-95"
              >
                Our Protocol
              </Link>
            </div>
          </div>

          {/* Minimalist Logo Bar */}
          <div className="absolute bottom-20 left-0 w-full flex justify-center opacity-30 gap-12 text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden whitespace-nowrap">
             {['Next-Gen Agents', 'Neural Architecture', 'Vector Scaling', 'Production AI'].map(item => (
               <span key={item}>{item}</span>
             ))}
          </div>
        </section>

        {/* Features Grid - Clean & Minimal */}
        <section className="py-40 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Cpu, 
                  title: 'Autonomous Agents', 
                  desc: 'Self-healing AI systems that manage complex operations with zero human friction.' 
                },
                { 
                  icon: Layers, 
                  title: 'Vector Scaling', 
                  desc: 'Enterprise-grade RAG architectures for massive high-dimensional data pools.' 
                },
                { 
                  icon: Shield, 
                  title: 'Secure Protocol', 
                  desc: 'Privacy-first deployment models engineered for maximum data sovereignty.' 
                }
              ].map((feature, i) => (
                <div key={i} className="p-12 bg-white/[0.02] border border-white/10 rounded-none group hover:border-primary/50 transition-all duration-500">
                  <feature.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Showcase - Pure Aesthetic */}
        <section className="py-40 px-6 relative z-10 overflow-hidden">
           <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 p-2 lg:p-4 rounded-none">
              <div className="relative aspect-video overflow-hidden">
                 <img 
                    src="/radices_hq.png" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                    alt="Radices Vision"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-12 left-12">
                    <h2 className="text-5xl font-black tracking-tighter mb-4">ENGINEERED <br /> BEYOND LIMITS.</h2>
                    <Link href="/about" className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group">
                       The Radices Story <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
