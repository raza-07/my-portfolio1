'use client';

import React from 'react';
import { Quote, Zap } from 'lucide-react';
import { testimonials, projects } from '@/data/portfolio';

export function InsightsContent() {
  const featuredProject = projects.find(p => p.title === 'EngineHire') || projects[0];

  const stats = [
    { label: 'Enterprises Automated', value: '45+' },
    { label: 'Efficiency ROI', value: '310%' },
    { label: 'Uptime Reliability', value: '99.9%' },
    { label: 'Repeat Partners', value: '88%' },
  ];

  return (
    <div className="bg-background text-foreground border-t border-foreground/5">
      {/* Premium Testimonials Grid - Now follows Stats */}
      <section className="py-20 px-6 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-primary"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Strategic Proof</p>
              <div className="w-12 h-[1px] bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-normal uppercase">CUSTOMERS INSIGHTS.</h2>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1 group-hover:scale-105 group-hover:text-primary transition-all duration-500">
                    {stat.value}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-8 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] hover:bg-foreground/[0.05] hover:border-primary/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-500">
                      <Quote className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-foreground/50 transition-colors">{testimonial.tag}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                       <div className="w-1.5 h-1.5 rounded-full bg-foreground/30"></div>
                       <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-foreground/50">Verified Partner</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm md:text-base font-medium text-foreground/60 leading-relaxed group-hover:text-foreground transition-colors">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-foreground/5">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center font-bold text-foreground/60 group-hover:text-primary group-hover:border-primary/50 transition-all">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground tracking-wide leading-none mb-1.5 uppercase">{testimonial.name}</h4>
                    <p className="text-[9px] font-bold text-foreground/35 uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section - High Achievement */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 tracking-normal text-center uppercase text-foreground/50">
            Strategic Work Achievement
          </h2>

          <div className="group bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] p-6 md:p-10 shadow-xl relative overflow-hidden transition-all duration-700 hover:bg-foreground/[0.05] hover:border-primary/50">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -z-10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-1">
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/45 mb-1">{featuredProject.category}</p>
                   <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors duration-500">
                     {featuredProject.title}
                   </h3>
                </div>
                
                <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-medium italic group-hover:text-foreground/80 transition-colors duration-500">
                  &quot;{featuredProject.impact}&quot;
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group/stat">
                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1 group-hover/stat:text-primary transition-colors">
                      Efficiency Gain
                    </p>
                    <p className="text-xl font-black text-foreground group-hover/stat:text-primary transition-colors">+99% Uptime</p>
                  </div>
                  <div className="group/stat">
                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-1 group-hover/stat:text-primary transition-colors">
                      Scale
                    </p>
                    <p className="text-xl font-black text-foreground group-hover/stat:text-primary transition-colors">Global Reach</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                   {featuredProject.stack.map((t: string) => (
                      <span 
                        key={t} 
                        className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full text-[9px] font-bold uppercase tracking-wider text-foreground/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 cursor-default"
                      >
                        {t}
                      </span>
                   ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl -rotate-3 scale-95 opacity-50"></div>
                <div className="relative bg-background border border-foreground/10 group-hover:border-primary/30 rounded-2xl p-6 shadow-inner overflow-hidden transition-all duration-500">
                  <div className="space-y-4">
                     {[
                       'Analyzing Production Logs...',
                       'Core Stability: 99.98%',
                       'Detecting Regression Patterns...',
                       'Resolution: Automated Fix Deployed',
                       'Scaling Worker Nodes...',
                       'Log: Processed in 220ms'
                     ].map((line, i) => (
                       <div key={i} className="flex items-center gap-3 font-mono text-xs">
                          <span className="text-primary font-black opacity-50">{i + 1}</span>
                          <span className={i === 1 ? "text-primary font-bold" : "text-foreground/45"}>{line}</span>
                       </div>
                     ))}
                  </div>
                  <div className="mt-6 h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-full animate-progress-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes progress-glow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-glow {
          animation: progress-glow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
