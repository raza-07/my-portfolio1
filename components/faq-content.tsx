'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How is this different from hiring a freelancer on Upwork?",
    answer: "Unlike a freelancer who might only handle code or design, we act as your dedicated technical partner. We manage the entire lifecycle—from architecture and UI/UX to deployment and testing. No micromanagement required, and no disappearing halfway through."
  },
  {
    question: "What if my idea needs more features than a basic MVP?",
    answer: "We focus heavily on scoping the core value loop for the first 6 weeks to ensure you launch fast. If your vision requires more, we'll map out a phase 2 roadmap and can continue building on a monthly retainer after the initial launch."
  },
  {
    question: "I'm non-technical. Will I understand what you're building?",
    answer: "Absolutely. We speak your language, not just code. Every handoff includes a 1-hour recorded walkthrough explaining exactly how your app works, how to manage it, and what happens under the hood in plain English."
  },
  {
    question: "What if my process needs changes after launch?",
    answer: "Our 6-week MVP package includes 30 days of post-launch bug fixes. If you need structural changes or new features, we offer continuous development packages to iterate on the product based on real user feedback."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We're happy to sign a standard NDA before we even begin our initial audit call to ensure your intellectual property remains completely protected."
  },
  {
    question: "What tech stack will you use?",
    answer: "We typically build with Next.js, Node/NestJS, Python, and PostgreSQL. We choose modern, enterprise-grade technologies that are scalable, secure, and easy for future developers to pick up if you bring development in-house."
  },
  {
    question: "Can I see more of your work?",
    answer: "Definitely. Our 'Proven Results' section highlights some of our public case studies, and we can walk you through other live deployments on our discovery call."
  }
];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden pb-12">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center mb-8 shadow-sm group hover:scale-105 transition-transform duration-500">
            <HelpCircle className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-normal">Everything you're wondering about</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                openIndex === i 
                  ? 'bg-foreground/[0.05] border-primary/30' 
                  : 'bg-foreground/[0.02] border-foreground/10 hover:border-foreground/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
              >
                <span className={`text-sm md:text-base font-semibold transition-colors ${openIndex === i ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === i ? 'bg-primary border-primary rotate-180' : 'group-hover:border-primary/50'}`}>
                  {openIndex === i ? <Minus className="w-4 h-4 text-primary-foreground" /> : <Plus className="w-4 h-4 text-foreground/40 group-hover:text-primary" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-foreground/60 leading-relaxed max-w-3xl">
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
