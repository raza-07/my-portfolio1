'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Cpu, Code2, Bot, Layers, Repeat, AudioLines, Link as LinkIcon } from 'lucide-react';
import { services as servicesData } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  'Full-Stack AI Products': Code2,
  'Agentic AI Systems': Bot,
  'RAG & Knowledge Systems': Layers,
  'Workflow Automation': Repeat,
  'Voice AI Agents': AudioLines,
  'Custom AI Integrations': LinkIcon,
};

export function ServicesContent() {
  const services = servicesData.map((s: any) => ({
    ...s,
    icon: iconMap[s.title as keyof typeof iconMap] || Cpu
  }));

  return (
    <section className="py-20 px-6 relative z-10 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 animate-fade-in text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Capabilities</p>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-normal uppercase">OUR SERVICES.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((service: any, idx: number) => (
             <div 
               key={idx} 
               className="group relative p-8 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] hover:bg-foreground/[0.05] hover:border-primary/50 transition-all duration-500 flex flex-col justify-between"
             >
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                     <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                       <service.icon className="w-5 h-5 text-foreground/45 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                     </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 tracking-normal group-hover:text-primary transition-colors duration-500 leading-tight">{service.title}</h3>
                  <p className="text-foreground/50 text-sm mb-6 leading-relaxed font-medium group-hover:text-foreground transition-colors duration-500">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-foreground/[0.03] border border-foreground/10 rounded-md text-[10px] font-semibold uppercase tracking-wider text-foreground/50 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="relative z-10 pt-4 border-t border-foreground/5 flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                     {service.features.map((f: string) => (
                       <div key={f} className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                         <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest group-hover:text-foreground/75 transition-colors">{f}</span>
                       </div>
                     ))}
                  </div>
                  <Link href="/contact" className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/50 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary hover:!bg-primary hover:!border-primary hover:!text-white transition-all duration-500 group/btn">
                     <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
