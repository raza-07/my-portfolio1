'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '/professional-woman.png',
      content:
        'Working with this developer was a game-changer for our startup. They delivered a scalable solution ahead of schedule and were incredibly responsive to our needs. Highly recommended!',
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
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-medium">
                  Testimonials
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                What Clients
                <span className="text-primary"> Say About Me</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Real feedback from real clients who've experienced the quality
                of my work and dedication to their success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Client Feedback</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors flex flex-col"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-primary/10"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
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
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              Featured Project Success
            </h2>

            <div className="bg-background border border-border rounded-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    E-Commerce Platform Redesign
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Redesigned and rebuilt a legacy e-commerce platform,
                    resulting in a 45% increase in conversion rates and 60%
                    improvement in page load times.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">
                        Client
                      </p>
                      <p className="text-muted-foreground">
                        Major Retail Company
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">
                        Timeline
                      </p>
                      <p className="text-muted-foreground">6 months</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">
                        Technologies
                      </p>
                      <p className="text-muted-foreground">
                        Next.js, React, Node.js, PostgreSQL, AWS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl"></div>
                  <div className="relative bg-card border border-primary/20 rounded-lg p-6">
                    {(() => {
                      const quotes = [
                        'Let’s build your MVP- fast, scalable, and user-first.',
                        'Ship faster with clean code and predictable delivery.',
                        'Turn ideas into products that users love and investors back.',
                        'From prototype to production- I handle the tech so you don’t have to.',
                        'Reduce time-to-market with battle-tested architecture.',
                        'Custom solutions that scale with your business goals.',
                      ];

                      function AutoScrollQuotes() {
                        const containerRef =
                          React.useRef<HTMLDivElement | null>(null);
                        const rafRef = React.useRef<number | null>(null);
                        const pausedRef = React.useRef(false);
                        const speed = 0.6; // pixels per frame (tweak as needed)

                        React.useEffect(() => {
                          const el = containerRef.current;
                          if (!el) return;

                          // Start RAF loop
                          function step() {
                            if (!el || pausedRef.current) {
                              rafRef.current = requestAnimationFrame(step);
                              return;
                            }

                            el.scrollLeft += speed;

                            // When we've scrolled past the first half (the duplicated point), reset
                            if (el.scrollLeft >= el.scrollWidth / 2) {
                              el.scrollLeft -= el.scrollWidth / 2;
                            }

                            rafRef.current = requestAnimationFrame(step);
                          }

                          rafRef.current = requestAnimationFrame(step);
                          return () => {
                            if (rafRef.current)
                              cancelAnimationFrame(rafRef.current);
                          };
                        }, []);

                        return (
                          <>
                            <div
                              ref={containerRef}
                              className="overflow-x-auto w-full"
                              onMouseEnter={() => (pausedRef.current = true)}
                              onMouseLeave={() => (pausedRef.current = false)}
                              style={{ scrollbarWidth: 'none' as const }}
                              aria-hidden={false}
                            >
                              <div className="inline-flex gap-4 items-center whitespace-nowrap">
                                {[...quotes, ...quotes].map((q, i) => (
                                  <div
                                    key={i}
                                    className="inline-flex items-center px-4 py-2 bg-primary/8 text-primary rounded-full text-sm font-medium min-w-[180px] max-w-[320px] truncate"
                                  >
                                    “{q}”
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        );
                      }

                      // Render component
                      return <AutoScrollQuotes />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Be the Next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate and create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
