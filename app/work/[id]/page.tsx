'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { projects } from '@/data/portfolio';
import { ChevronLeft, Zap, ArrowUpRight, TrendingUp, Shield, Layers, Bot, ChevronRight, Layout, Search, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CaseStudy() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-6">Case Study Under Construction</h1>
        <p className="text-foreground/40 mb-8 max-w-md">We're currently documenting the systemic impact for {project?.title || 'this project'}. Check back soon.</p>
        <button onClick={() => router.back()} className="px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] rounded-full">Go Back</button>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        
        {/* Case Study Hero */}
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-12">
               <div className="flex items-center justify-between animate-fade-in">
                  <button onClick={() => router.back()} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30 hover:text-foreground transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Work
                  </button>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/20">CASE_ID: {project.title.toUpperCase().replace(' ', '_')}</span>
                  </div>
               </div>

               <div className="space-y-8 max-w-5xl">
                 <h1 className="text-5xl md:text-8xl font-serif tracking-normal leading-[0.9] animate-reveal">
                   {caseStudy.heroTitle}
                 </h1>
                 <p className="text-xl md:text-2xl text-foreground/40 font-medium leading-relaxed max-w-3xl animate-fade-in delay-200">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-3 animate-fade-in delay-300">
                   {project.stack.map(tech => (
                     <span key={tech} className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/40">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Metric Cards */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in delay-400">
                 {caseStudy.metrics.map((metric, i) => (
                   <div key={i} className="p-6 md:p-8 bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] group hover:border-primary/40 transition-all duration-500">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{metric.value}</span>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${metric.delta.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                          {metric.delta}
                        </span>
                     </div>
                     <p className="text-[11px] font-black uppercase tracking-widest text-foreground/30 group-hover:text-foreground/60 transition-colors">{metric.label}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Business Context Section */}
        <section className="py-32 px-6 border-t border-foreground/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
               <span className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-foreground/30">Business Context</span>
               <h2 className="text-4xl md:text-6xl font-serif tracking-normal leading-none uppercase">{caseStudy.context.title}</h2>
               <p className="text-xl text-foreground/50 leading-relaxed font-medium">
                 {caseStudy.context.description}
               </p>
            </div>
            <div className="grid gap-4">
               {caseStudy.context.stats.map((stat, i) => (
                 <div key={i} className="p-8 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] flex items-center justify-between group hover:bg-foreground/[0.05] transition-all">
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">{stat.value}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Problem Analysis */}
        <section className="py-32 px-6 bg-foreground/[0.02]">
           <div className="max-w-7xl mx-auto space-y-16">
              <div className="space-y-6">
                <span className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[9px] font-black uppercase tracking-widest text-foreground/30">Problem Analysis</span>
                <h2 className="text-4xl md:text-6xl font-serif tracking-normal uppercase">{caseStudy.problem.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.problem.cards.map((card, i) => (
                  <div key={i} className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] space-y-6 group hover:border-red-500/30 transition-all duration-500">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black text-foreground/20">0{i+1}</span>
                       <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${card.severity === 'CRITICAL' ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'}`}>
                         {card.severity}
                       </span>
                    </div>
                    <h3 className="text-xl font-serif tracking-normal leading-none uppercase">{card.title}</h3>
                    <p className="text-sm text-foreground/30 font-medium leading-relaxed group-hover:text-foreground/50 transition-colors">{card.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Solution Architecture */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="space-y-6">
                 <span className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[9px] font-serif tracking-normal uppercase tracking-widest text-foreground/30">Solution Architecture</span>
                 <h2 className="text-4xl md:text-6xl font-serif tracking-normal leading-none uppercase">{caseStudy.solution.title}</h2>
                 <p className="text-xl text-foreground/40 leading-relaxed font-medium">{caseStudy.solution.description}</p>
               </div>
               <div className="space-y-4">
                 {caseStudy.solution.features.map((feature, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs">{i+1}</div>
                        {i < caseStudy.solution.features.length - 1 && <div className="w-[1px] flex-grow bg-foreground/10 my-2"></div>}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-lg font-serif mb-2 tracking-normal uppercase">{feature.title}</h4>
                        <p className="text-sm text-foreground/30 leading-relaxed font-medium group-hover:text-foreground/50 transition-colors">{feature.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative aspect-square bg-foreground/[0.02] border border-foreground/10 rounded-[3rem] overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
               <Zap className="w-32 h-32 text-primary opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
            </div>
          </div>
        </section>

        {/* Results & ROI */}
        <section className="py-32 px-6 bg-primary/[0.02] border-y border-foreground/5">
           <div className="max-w-7xl mx-auto text-center space-y-20">
              <div className="space-y-6">
                 <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black uppercase tracking-widest text-primary">Results</span>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter">{caseStudy.results.title}</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.results.cards.map((card, i) => (
                   <div key={i} className="p-10 bg-background border border-foreground/10 rounded-[2.5rem] group hover:border-primary/50 transition-all">
                      <p className="text-4xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">{card.value}</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors">{card.label}</p>
                   </div>
                ))}
              </div>

              <div className="p-12 md:p-20 bg-primary/10 border border-primary/20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-[40%] h-full bg-foreground/5 blur-3xl -z-10"></div>
                 <div className="text-left space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">Total ROI</p>
                    <p className="text-6xl md:text-9xl font-black tracking-tighter text-foreground group-hover:scale-105 transition-transform duration-1000">{caseStudy.results.roi}</p>
                    <p className="text-sm font-bold text-foreground/20 uppercase tracking-widest italic">first year projection</p>
                 </div>
                 <Link href="/contact" className="px-12 py-6 bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-xs rounded-full hover:bg-primary/80 transition-all duration-500 flex items-center gap-4">
                    Get Similar Results <ArrowUpRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
