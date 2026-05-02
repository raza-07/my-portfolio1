'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Zap, Database, Code2, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Autonomous AI Agents',
      description: 'End-to-end self-correcting agents that manage operations with zero human friction.',
      features: ['24/7 Operations', 'Cross-Platform Sync', 'Self-Healing Loops']
    },
    {
      icon: Database,
      title: 'Intelligent RAG Systems',
      description: 'Retrieval-Augmented Generation systems designed for massive enterprise data lakes.',
      features: ['Vector Sharding', 'Semantic Indexing', 'Privacy-First Design']
    },
    {
      icon: Code2,
      title: 'Full-Stack AI Apps',
      description: 'Custom web and mobile ecosystems with high-performance LLM integration.',
      features: ['Real-time Streaming', 'Scalable Backends', 'Edge Deployment']
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white pt-32">
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">The Protocol</p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] md:leading-[0.9]">
              CORE <br />
              <span className="text-white/40">SOLUTIONS</span>
            </h1>
          </div>
        </section>

        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
             {services.map((service, idx) => (
               <div key={idx} className="p-16 bg-white/[0.02] border border-white/10 hover:border-primary transition-all duration-500 group">
                  <service.icon className="w-12 h-12 text-primary mb-12 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-white/50 text-lg mb-12 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-4 pt-12 border-t border-white/5 mb-12">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-4 transition-all">
                    Initiate Audit <ChevronRight className="w-4 h-4" />
                  </Link>
               </div>
             ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
