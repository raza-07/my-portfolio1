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
    <div className="bg-background text-foreground">
      {/* Premium Testimonials Grid - Now at the Top */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.03),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-primary"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Strategic Proof</p>
              <div className="w-12 h-[1px] bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-normal uppercase">CUSTOMERS INSIGHTS.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-8 bg-foreground/[0.02] border border-foreground/10 rounded-3xl hover:bg-foreground/[0.04] hover:border-primary/50 transition-all duration-700 flex flex-col min-h-[480px] overflow-hidden backdrop-blur-sm"
              >
                
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                     <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary">Verified Partner</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 group-hover:text-foreground/40 transition-colors">{testimonial.tag}</span>
                </div>

                <div className="flex-grow">
                  <p className="text-xl md:text-2xl font-medium text-foreground/70 leading-relaxed tracking-tight group-hover:text-foreground transition-colors italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-5 pt-8 border-t border-foreground/5">
                  <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center font-black text-primary group-hover:border-primary/50 transition-all">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground tracking-wide leading-none mb-2 uppercase">{testimonial.name}</h4>
                    <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Now follows Testimonials */}
      <section className="py-20 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section - High Achievement */}
      <section className="py-24 px-6 bg-foreground/[0.02] relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 tracking-normal text-center uppercase text-foreground/50">
            Strategic Work Achievement
          </h2>

          <div className="group bg-background border border-foreground/10 rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl relative overflow-hidden transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)] hover:scale-[1.01]">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                   <p className="text-sm font-bold uppercase tracking-widest text-primary">{featuredProject.category}</p>
                   <h3 className="text-4xl font-black tracking-tight group-hover:text-primary transition-colors duration-500">
                     {featuredProject.title}
                   </h3>
                </div>
                
                <p className="text-xl text-foreground/50 leading-relaxed font-medium italic group-hover:text-foreground/70 transition-colors duration-500">
                  &quot;{featuredProject.impact}&quot;
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div className="group/stat">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                      Efficiency Gain
                    </p>
                    <p className="text-2xl font-black text-foreground group-hover/stat:text-primary transition-colors">+99% Uptime</p>
                  </div>
                  <div className="group/stat">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                      Scale
                    </p>
                    <p className="text-2xl font-black text-foreground group-hover/stat:text-primary transition-colors">Global Reach</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                   {featuredProject.stack.map((t: string) => (
                      <span 
                        key={t} 
                        className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {t}
                      </span>
                   ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl -rotate-3 scale-95 opacity-50"></div>
                <div className="relative bg-background border border-primary/20 rounded-2xl p-8 shadow-inner overflow-hidden">
                  <div className="space-y-4">
                     {[
                       'Analyzing Production Logs...',
                       'Core Stability: 99.98%',
                       'Detecting Regression Patterns...',
                       'Resolution: Automated Fix Deployed',
                       'Scaling Worker Nodes...',
                       'Log: Processed in 220ms'
                     ].map((line, i) => (
                       <div key={i} className="flex items-center gap-3 font-mono text-sm">
                          <span className="text-primary font-black opacity-50">{i + 1}</span>
                          <span className={i === 1 ? "text-primary font-bold" : "text-foreground/40"}>{line}</span>
                       </div>
                     ))}
                  </div>
                  <div className="mt-8 h-1 w-full bg-primary/10 rounded-full overflow-hidden">
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
