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
    <section className="py-20 px-6 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 animate-fade-in text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Capabilities</p>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">OUR SERVICES.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((service: any, idx: number) => (
             <div 
               key={idx} 
               className="group relative p-8 bg-white/[0.01] border border-white/10 rounded-2xl flex flex-col justify-between transition-all duration-700 hover:bg-white/[0.03] hover:border-primary/40 hover:-translate-y-1 overflow-hidden"
             >
               <div className="scanline"></div>
               
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                       <service.icon className="w-5 h-5 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                     </div>
                  </div>
                  
                  <h3 className="text-xl font-black mb-2 tracking-tight group-hover:text-white transition-colors leading-tight">{service.title}</h3>
                  <p className="text-white/30 text-[10px] mb-6 leading-relaxed font-medium group-hover:text-white/60 transition-colors line-clamp-2">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-white/[0.03] border border-white/5 rounded-md text-[7px] font-black uppercase tracking-[0.1em] text-white/40 group-hover:text-primary transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                     {service.features.map((f: string) => (
                       <div key={f} className="flex items-center gap-2">
                         <div className="w-1 h-[1px] bg-primary/50"></div>
                         <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{f}</span>
                       </div>
                     ))}
                  </div>
                  <Link href="/contact" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 group/btn">
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
