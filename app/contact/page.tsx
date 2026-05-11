'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ContactContent } from '@/components/contact-content';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Full Contact Content Component */}
        <ContactContent />

        {/* Bottom Insights Section (to fill empty space) */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6"
          >
            <div className="space-y-4 p-8 rounded-[2rem] bg-foreground/[0.02] border border-foreground/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Uplink Status: Active</p>
              </div>
              <p className="text-2xl font-black tracking-tighter leading-none">~2 HOURS</p>
              <p className="text-xs font-bold text-foreground/20 uppercase tracking-widest">Average engineer response time during work hours.</p>
            </div>

            <div className="space-y-4 p-8 rounded-[2rem] bg-foreground/[0.02] border border-foreground/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50">Neural Protocol</p>
              </div>
              <p className="text-2xl font-black tracking-tighter leading-none">PRIVACY FIRST</p>
              <p className="text-xs font-bold text-foreground/20 uppercase tracking-widest">Your technical stack and data are protected by our non-disclosure policy.</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
