'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ChevronRight, X, Check } from 'lucide-react';

function AnimatedCounter({ value, decimals = 0, duration = 2.5 }: { value: number; decimals?: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      
      const currentVal = start + (end - start) * easeProgress;
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(decimals)}
    </span>
  );
}

// Import full-page content components
import { ServicesContent } from '@/components/services-content';
import { WorkContent } from '@/components/work-content';
import { InsightsContent } from '@/components/insights-content';
import { AboutContent } from '@/components/about-content';
import { ContactContent } from '@/components/contact-content';
import { ProcessContent } from '@/components/process-content';

export default function Home() {
  const currentDate = new Date();
  const currentMonthNumber = currentDate.getMonth() + 1;
  const slots = currentMonthNumber % 2 !== 0 ? 2 : 3;
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden w-full relative">
        
        {/* Modern Ambient Glow */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        {/* 00 / Radices Intro Hero */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-20 z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm mb-20 animate-fade-in delay-75">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span suppressHydrationWarning>Only {slots} client slots open for {monthName} {year}</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-normal leading-[1.1] md:leading-[1.1] animate-reveal">
              We Build Your <span className="text-primary font-bold">SaaS MVP</span> <br />
              Live in 6 Weeks, <br />
              <span className="text-foreground/40">or We Keep Going for Free.</span>
            </h1>

            <p className="text-lg md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in delay-100 px-4 sm:px-0">
              <span className="text-foreground font-bold">Non-technical founders:</span> stop spending months finding developers who ghost you or ship broken code. We've built 6 production SaaS platforms from scratch. Yours is next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in delay-200">
              <Link
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-background border border-foreground/10 text-foreground font-bold rounded-xl hover:bg-foreground/5 hover:border-foreground/20 transition-all hover:scale-105 active:scale-95 group"
              >
                See our work first
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 group"
              >
                Book a Free SaaS Audit (30 mins) <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Strategic Impact Metrics */}
            <div className="flex items-center justify-center gap-12 md:gap-24 pt-10 animate-fade-in delay-300">
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-foreground tracking-normal mb-2 group-hover:text-primary group-hover:scale-110 transition-all duration-500 origin-center inline-block">
                  <AnimatedCounter value={99.9} decimals={1} />%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Stability</p>
              </div>
              <div className="w-[1px] h-12 bg-foreground/10"></div>
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-primary tracking-normal mb-2 group-hover:scale-110 transition-all duration-500 origin-center inline-block">
                  <AnimatedCounter value={8} decimals={0} />+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">Live Systems</p>
              </div>
              <div className="w-[1px] h-12 bg-foreground/10"></div>
              <div className="text-center group cursor-default">
                <p className="text-4xl font-bold text-foreground tracking-normal mb-2 group-hover:text-primary group-hover:scale-110 transition-all duration-500 origin-center inline-block">
                  <AnimatedCounter value={310} decimals={0} />%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / Our Niche & Technologies */}
        <section id="info" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-normal mb-10 text-left">
                Building a SaaS shouldn't feel like <span className="line-through decoration-red-500/60 text-foreground/50">this</span>.
              </h2>
              
              <div className="space-y-4">
                {[
                  "You've interviewed 8 developers in the last month. Three ghosted you after the first call.",
                  "You paid someone a deposit. They delivered something broken — or nothing at all.",
                  "Your current dev team is slow. Features that should take days take weeks.",
                  "You're stuck in Notion with a 60-page spec and zero working code.",
                  "Your idea is getting stale while a competitor ships faster."
                ].map((text, i) => (
                  <div key={i} className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl border border-red-500/10 bg-gradient-to-r from-red-500/5 to-transparent hover:border-red-500/20 hover:from-red-500/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                      <X className="w-5 h-5 text-red-500 stroke-[3]" />
                    </div>
                    <p className="text-foreground/80 font-medium text-sm md:text-base">{text}</p>
                  </div>
                ))}

                <div className="!mt-12 p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5 text-foreground/80 font-medium leading-relaxed text-base md:text-lg relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                  By the time most founders have something working, they've burned <span className="text-foreground font-bold">4–6 months of runway</span> and <span className="text-foreground font-bold">$10,000+</span> — and still don't have a live product to show investors or early users.
                </div>
              </div>
            </div>

            {/* MVP Pricing Offer */}
            <div className="max-w-4xl mx-auto mt-20 animate-fade-in">
              <p className="text-lg md:text-xl text-foreground/60 mb-10 font-serif text-center">
                Your MVP, built and live, in 6 weeks. Fixed scope. Fixed price. Real guarantee.
              </p>

              <div className="border border-foreground/10 bg-foreground/[0.02] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[120px] -z-10 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-10">
                  What's Included
                </p>

                <div className="space-y-6">
                  {[
                    { name: 'Core MVP — auth, dashboard, core feature loop, API', value: '$2,500' },
                    { name: 'UI/UX design — responsive, production-ready, dark or light', value: '$800' },
                    { name: 'Deployment setup — server, domain, CI/CD basics', value: '$500' },
                    { name: '30-day post-launch bug fixes — included, no invoice', value: '$600' },
                    { name: '1-hour handoff call + recorded walkthrough', value: '$200' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={3} />
                        <p className="text-foreground/80 font-medium text-sm md:text-base leading-tight">
                          {item.name}
                        </p>
                      </div>
                      <span className="text-foreground/60 font-bold text-sm md:text-base shrink-0">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-foreground/10 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between md:justify-start md:gap-8">
                        <span className="text-foreground/50 font-medium text-sm">Total Value</span>
                        <span className="text-foreground/50 font-bold line-through">$4,600</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                        <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">$2,999</span>
                        <span className="text-foreground/50 font-medium text-sm">
                          introductory rate for first 3 clients
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 shrink-0 group"
                    >
                      Claim a Slot <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  <p className="text-foreground/40 text-sm mt-8 leading-relaxed max-w-2xl">
                    We're offering this rate while we build out our independent agency case studies. The full rate after this cohort is $4,500+.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-32 pb-10">
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="w-full overflow-hidden relative group">
                  <div className="flex animate-ticker whitespace-nowrap gap-12 text-sm font-black uppercase tracking-[0.2em] text-foreground/25 hover:[animation-play-state:paused] transition-colors duration-500">
                    {[1, 2, 3, 4].map((i) => (
                      <React.Fragment key={i}>
                        <span className="hover:text-primary transition-colors cursor-default">OpenAI</span>
                        <span className="hover:text-primary transition-colors cursor-default">NestJS</span>
                        <span className="hover:text-primary transition-colors cursor-default">Next.js 15</span>
                        <span className="hover:text-primary transition-colors cursor-default">Python</span>
                        <span className="hover:text-primary transition-colors cursor-default">FastAPI</span>
                        <span className="hover:text-primary transition-colors cursor-default">Docker</span>
                        <span className="hover:text-primary transition-colors cursor-default">AWS</span>
                        <span className="hover:text-primary transition-colors cursor-default">Playwright</span>
                        <span className="hover:text-primary transition-colors cursor-default">BullMQ</span>
                        <span className="hover:text-primary transition-colors cursor-default">PostgreSQL</span>
                        <span className="hover:text-primary transition-colors cursor-default">LangChain</span>
                        <span className="hover:text-primary transition-colors cursor-default">Pinecone</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / The Process Roadmap & Technical FAQs */}
        <motion.div 
          id="process"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProcessContent />
        </motion.div>

        {/* 02 / Full Services Content */}
        <motion.div 
          id="services"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ServicesContent />
        </motion.div>

        {/* 02 / Full Work Experience Content */}
        <motion.div 
          id="work"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <WorkContent />
        </motion.div>

        {/* 03 / Full Insights Content */}
        <motion.div 
          id="insights"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <InsightsContent />
        </motion.div>


        {/* 05 / Full About Story Content */}
        <motion.div 
          id="about"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutContent />
        </motion.div>

        {/* 07 / Full Contact Inquiry Content */}
        <motion.div 
          id="contact"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactContent />
        </motion.div>

        <Footer />
      </main>
    </>
  );
}
