'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Zap, Settings } from 'lucide-react';
import { FAQContent } from './faq-content';

const processes = [
  { step: '01', title: 'Audit & Analysis', desc: 'Identifying high-ROI automation opportunities.', icon: Search },
  { step: '02', title: 'Neural Architecture', desc: 'Designing bespoke AI frameworks.', icon: Layout },
  { step: '03', title: 'Agile Deployment', desc: 'Rapid rollout of production agents.', icon: Zap },
  { step: '04', title: 'Optimization Loop', desc: 'Continuous scaling and fine-tuning.', icon: Settings },
];

export function ProcessContent() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-foreground/[0.02] border-y border-foreground/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Technical Roadmap</p>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-normal uppercase">OUR PROCESS.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {processes.map((proc, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={i} 
              className="group relative p-8 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] hover:bg-foreground/[0.05] hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <proc.icon className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Step {proc.step}</p>
              <h3 className="text-xl font-bold mb-2 tracking-normal">{proc.title}</h3>
              <p className="text-foreground/30 text-xs leading-relaxed font-medium group-hover:text-foreground/50 transition-colors">{proc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Integrated FAQ as a sub-part */}
        <div className="pt-20 border-t border-foreground/5">
          <FAQContent />
        </div>
      </div>
    </section>
  );
}
