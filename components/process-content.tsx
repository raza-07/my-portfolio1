'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Rocket, Shield } from 'lucide-react';
import { FAQContent } from './faq-content';

const processes = [
  { 
    step: '01', 
    title: 'Book a Free SaaS Audit', 
    desc: 'We review your idea, identify what to build first, and give you an honest scope breakdown. No pitch. No pressure. Just an actionable plan you can use even if you don\'t work with us.',
    sub: 'Most founders leave the call with more clarity than 3 months of planning gave them.',
    icon: Search
  },
  { 
    step: '02', 
    title: 'Kick off within 48 hours', 
    desc: 'Once you\'re in, we move fast. Design, build, and deploy over 6 focused weeks — with weekly async updates so you always know what\'s shipping.',
    sub: 'You don\'t need to manage us. We handle the full stack: design, dev, deployment, testing.',
    icon: Zap
  },
  { 
    step: '03', 
    title: 'Your MVP goes live', 
    desc: 'You get a fully deployed, working product — on your domain, with your branding, ready for real users. Plus a 1-hour recorded walkthrough so you understand every piece.',
    sub: 'From here, you can raise, sell, or iterate. The hard part is done.',
    icon: Rocket
  }
];

export function ProcessContent() {
  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-foreground/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-primary hidden sm:block"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-foreground">
              Three Steps, <span className="text-foreground/40">Six Weeks.</span> <span className="text-primary">One Live Product.</span>
            </p>
            <div className="w-12 h-[1px] bg-primary hidden sm:block"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-normal uppercase">THE PROCESS.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {processes.map((proc, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={i} 
              className="group relative p-8 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] hover:bg-foreground/[0.05] hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                <proc.icon className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors duration-500" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/70 group-hover:text-primary transition-colors duration-500 mb-2">Step {proc.step}</p>
              <h3 className="text-xl font-bold mb-3 tracking-normal group-hover:text-primary transition-colors duration-500">{proc.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed font-medium group-hover:text-foreground transition-colors duration-500 mb-6 flex-grow">{proc.desc}</p>
              <p className="text-primary/60 italic text-xs leading-relaxed font-medium group-hover:text-primary transition-colors duration-500">{proc.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* The Guarantee Section */}
        <div className="max-w-4xl mx-auto mb-32 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center mb-8 shadow-sm group hover:scale-105 transition-transform duration-500">
            <Shield className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-normal mb-10 text-foreground">The Radices <span className="text-primary">Guarantee</span></h2>

          <div className="border border-foreground/10 bg-foreground/[0.02] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.05)] relative overflow-hidden group w-full">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[100px] -z-10 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>

            <h3 className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8 text-center">
              Your MVP will be live and functional within 6 weeks of kickoff <br className="hidden md:block" />
              or we keep building at <span className="text-primary font-bold">no extra cost</span> until it is.
            </h3>

            <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              We don't disappear after a deposit. We don't ship half-finished work and call it done. We have built 6 production SaaS platforms, enterprise hosting systems, multi-hospital medical platforms, and AI-powered data pipelines. A focused MVP for a single client is well within our ability to deliver and guarantee.
            </p>

            <p className="text-foreground/60 text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
              If we miss the deadline, we work for free until you have a live product. No excuses. No extra invoices. Just results.
            </p>
          </div>

          <p className="text-foreground/40 text-sm mt-8">
            We can offer this because we've never missed. Our track record: <span className="text-foreground font-bold">zero failed deployments</span> across all client handoffs.
          </p>
        </div>

        {/* Integrated FAQ as a sub-part */}
        <FAQContent />
      </div>
    </section>
  );
}
