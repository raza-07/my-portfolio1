'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Code2, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-fade-in-up delay-100">
                  <span className="text-sm text-primary font-bold uppercase tracking-wider">
                    The Future of Automation is Here
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter animate-fade-in-up delay-200">
                  Full Stack <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    AI Automation
                  </span>
                  <br /> Engineering
                </h1>

                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium animate-fade-in-up delay-300">
                  Radices delivers state-of-the-art AI-driven workflows and full-stack solutions that transform how modern businesses operate.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold gap-2 shadow-lg shadow-primary/25"
                  >
                    Start Your Transformation <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-bold"
                  >
                    Our Solutions
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                  <div>
                    <p className="text-3xl font-black text-primary">50+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                      AI Agents Deployed
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">95%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                      Efficiency Gain
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">24/7</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                      Intelligent Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Visual - Tech Wall */}
              <div className="relative hidden lg:block animate-scale-in delay-400">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/10 rounded-none blur-2xl -rotate-6 scale-95 opacity-50"></div>
                
                <div className="relative bg-card/50 backdrop-blur-xl border border-white/10 rounded-none p-8 shadow-2xl">
                   <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'LLM Orchestration', tech: 'LangChain / AutoGPT' },
                        { label: 'Cloud Infrastructure', tech: 'AWS / GCP / Azure' },
                        { label: 'Full Stack', tech: 'Next.js / Python / Go' },
                        { label: 'Data Pipelines', tech: 'Spark / Airflow' }
                      ].map((box, i) => (
                        <div key={i} className="p-4 bg-background/50 border border-primary/10 rounded-2xl">
                          <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{box.label}</p>
                          <p className="text-sm font-bold">{box.tech}</p>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary fill-primary/20" />
                        Live AI Status
                      </h4>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 animate-pulse"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          <span>Processing</span>
                          <span>75% Efficiency</span>
                        </div>
                      </div>
                   </div>

                   <div className="mt-8 flex justify-center gap-8 opacity-50">
                      <div className="text-2xl font-black italic tracking-tighter">Radices_AI</div>
                      <div className="text-2xl font-black italic tracking-tighter">Automate_Next</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-6 bg-secondary/30 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Our Core Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
                We don&apos;t just build software; we engineer intelligence into your business fabric.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'AI Workflow Automation',
                  description:
                    'Autonomous agents that handle complex business logic, lead generation, and customer operations.',
                },
                {
                  icon: Code2,
                  title: 'Custom LLM Solutions',
                  description:
                    'Fine-tuned models and RAG pipelines tailored specifically to your proprietary data and industry.',
                },
                {
                  icon: Users,
                  title: 'Full-Stack Ecosystems',
                  description:
                    'High-performance web and mobile applications that serve as the interface for your AI-powered backend.',
                },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                    <Icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
              <span className="text-sm text-accent font-bold uppercase tracking-wider">
                Limited Project Slots Available
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              Ready to Automate Your <br />
              <span className="text-primary">Competitive Advantage?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              Join the elite businesses leveraging Radices AI to outpace the market. Let&apos;s build your intelligent future today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold text-lg gap-2 shadow-xl shadow-primary/20"
              >
                Get a Custom Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
