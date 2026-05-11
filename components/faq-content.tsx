'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We focus on high-stakes sectors including FinTech, HealthTech, Logistics, and Enterprise SaaS where AI reliability and data security are paramount."
  },
  {
    question: "How long does a typical AI integration take?",
    answer: "A standard MVP deployment takes 4-8 weeks. Complex custom neural architectures and full-stack enterprise automation systems typically span 3-6 months."
  },
  {
    question: "Do you handle data privacy and security?",
    answer: "Absolutely. All our systems are built with a privacy-first architecture, supporting on-premise deployment or private cloud VPCs with full encryption and SOC2 compliance standards."
  },
  {
    question: "Can you automate existing legacy workflows?",
    answer: "Yes, our 'Bridge Agents' are designed specifically to interface with legacy APIs and databases, providing a modern AI layer without requiring a full infrastructure overhaul."
  }
];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Common Inquiries</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif tracking-normal uppercase">QUESTIONS.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                openIndex === i 
                  ? 'bg-foreground/[0.05] border-primary/30' 
                  : 'bg-foreground/[0.02] border-foreground/10 hover:border-foreground/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
              >
                <span className={`text-xl font-bold tracking-tight transition-colors ${openIndex === i ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary border-primary rotate-180' : 'group-hover:border-primary/50'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5 text-primary-foreground" /> : <Plus className="w-5 h-5 text-foreground/40 group-hover:text-primary" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-lg text-foreground/60 font-medium leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
