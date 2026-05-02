'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Aris Vane',
      role: 'Chief Innovation Officer, Quantum Dynamics',
      image: '/senior_engineer.png',
      content:
        'Radices redefined our entire logistical pipeline using autonomous agents. The level of technical sophistication and execution speed is unparalleled in the AI space.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Ventures',
      image: '/professional-man.png',
      content:
        'The attention to detail and technical expertise was outstanding. They not only built what we asked for but also suggested improvements that significantly enhanced our product.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Agency',
      image: '/professional-woman-2.png',
      content:
        "I've worked with many developers, but this one stands out. Great communication, clean code, and a genuine passion for creating excellent user experiences.",
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'CTO, Enterprise Solutions',
      image: '/professional-man-2.png',
      content:
        "Their ability to architect complex systems while maintaining code quality is impressive. They're a valuable asset to any team and I'd definitely work with them again.",
      rating: 5,
    },
    {
      name: 'Jessica Lee',
      role: 'Marketing Director, Growth Co.',
      image: '/professional-woman-3.png',
      content:
        'Not only is the technical work exceptional, but they also understand business goals. They helped us optimize our platform which directly impacted our conversion rates.',
      rating: 5,
    },
    {
      name: 'Robert Martinez',
      role: 'Startup Founder, InnovateLabs',
      image: '/professional-man-3.jpg',
      content:
        'From initial consultation to final deployment, the entire process was smooth and professional. They delivered a product that exceeded our expectations.',
      rating: 5,
    },
  ];

  const stats = [
    { label: 'Happy Clients', value: '22+' },
    { label: 'Projects Completed', value: '23+' },
    { label: 'Years Experience', value: '2+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_70%)] -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-bold uppercase tracking-widest">
                  Client Feedback
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter">
                Trusted by <br />
                <span className="text-primary">Industry Leaders</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Hear from the visionary leaders who have partnered with Radices to transform their operations through AI.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Enterprises Automated', value: '45+' },
                { label: 'Efficiency ROI', value: '310%' },
                { label: 'Uptime Reliability', value: '99.9%' },
                { label: 'Repeat Partners', value: '88%' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <p className="text-4xl lg:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Jonathan Sterling',
                  role: 'VP of Engineering, CloudCore',
                  image: '/professional-man.png',
                  content:
                    'Radices didn\'t just build an AI agent; they architected a complete automation ecosystem that has reduced our operational overhead by 65% in less than a quarter.',
                  rating: 5,
                },
                {
                  name: 'Dr. Elena Vance',
                  role: 'Head of Innovation, BioTech Systems',
                  image: '/professional-woman.png',
                  content:
                    'The level of technical sophistication the Radices team brings to the table is unmatched. Their RAG implementation is the most secure and performant we\'ve seen.',
                  rating: 5,
                },
                {
                  name: 'Marcus Thorne',
                  role: 'CEO, LogisticsOne',
                  image: '/professional-man-2.png',
                  content:
                    'Working with Radices was the best strategic decision we made this year. Their full-stack AI approach is seamless, robust, and incredibly scalable.',
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/50 rounded-2xl p-10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col relative group"
                >
                   <div className="absolute top-6 right-8 text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">“</div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-lg mb-8 flex-grow leading-relaxed font-medium italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                    {testimonial.image ? (
                      <div className="w-12 h-12 rounded-none overflow-hidden border border-primary/30">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/30">
                         {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-foreground leading-none mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 tracking-tight text-center">
              Strategic AI Implementation
            </h2>

            <div className="bg-background border border-border/50 rounded-3xl p-10 lg:p-16 shadow-2xl relative">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 blur-[100px]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-2">
                     <p className="text-sm font-bold uppercase tracking-widest text-primary">Healthcare Automation</p>
                     <h3 className="text-4xl font-black tracking-tight">
                       Neural Patient Processing Engine
                     </h3>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    We transformed a manual medical intake process into a fully autonomous, HIPAA-compliant AI engine that identifies high-priority cases with 99.8% accuracy.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                        Efficiency Gain
                      </p>
                      <p className="text-2xl font-black text-foreground">+420%</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">
                        Timeline
                      </p>
                      <p className="text-2xl font-black text-foreground">12 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                     {['Python', 'Llama 3', 'AWS Bedrock', 'Next.js', 'PostgreSQL'].map(t => (
                        <span key={t} className="px-4 py-2 bg-secondary/50 border border-border/50 rounded-full text-xs font-bold uppercase tracking-widest">{t}</span>
                     ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl -rotate-3 scale-95 opacity-50"></div>
                  <div className="relative bg-card border border-primary/20 rounded-2xl p-8 shadow-inner overflow-hidden">
                    <div className="space-y-4">
                       {[
                         'Analyzing Patient Record...',
                         'Context Extraction Complete.',
                         'Risk Assessment: CRITICAL (0.98)',
                         'Routing to Specialist Hub Alpha.',
                         'Notifying Medical Staff...',
                         'Log: Processed in 450ms'
                       ].map((line, i) => (
                         <div key={i} className="flex items-center gap-3 font-mono text-sm">
                            <span className="text-primary font-black opacity-50">{i + 1}</span>
                            <span className={i === 2 ? "text-accent font-bold" : "text-muted-foreground"}>{line}</span>
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

        {/* CTA Section */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 tracking-tight">
              Become Our Next Success Story
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-medium">
              Join the elite group of businesses that have unlocked exponential growth with Radices AI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold text-xl shadow-2xl shadow-primary/20"
            >
              Get a Free AI Audit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
