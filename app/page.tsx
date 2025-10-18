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
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
                  <span className="text-sm text-primary font-medium">
                    Welcome to my portfolio
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Full Stack Developer
                  <span className="text-primary"> Crafting</span> Digital
                  Excellence
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  I build scalable, performant web applications with modern
                  technologies. From concept to deployment, I deliver solutions
                  that matter.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium gap-2"
                  >
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div>
                    <p className="text-2xl font-bold text-primary">23+</p>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">2+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">22+</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Visual - horizontal scrolling */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>

                <div className="relative bg-card border border-primary/20 rounded-2xl p-6 overflow-hidden">
                  <div className="w-full h-16 flex items-center overflow-hidden">
                    <div
                      className="scroll-track flex items-center gap-6"
                      style={{
                        willChange: 'transform',
                        animation: 'tech-scroll 18s linear infinite',
                      }}
                    >
                      {[
                        'NestJS',
                        'TypeORM',
                        'Prisma',
                        'Next.js',
                        'React',
                        'TypeScript',
                        'Node.js',
                        'PostgreSQL',
                        'Redis',
                        'Tailwind CSS',
                        'GraphQL',
                        'Docker',
                      ].map((t, i) => (
                        <div
                          key={i}
                          className="inline-block text-primary font-medium px-4 py-2 bg-card/30 border border-primary/10 rounded-lg flex-shrink-0"
                        >
                          {t}
                        </div>
                      ))}

                      {/* duplicate list to create seamless horizontal loop */}
                      {[
                        'NestJS',
                        'TypeORM',
                        'Prisma',
                        'Next.js',
                        'React',
                        'TypeScript',
                        'Node.js',
                        'PostgreSQL',
                        'Redis',
                        'Tailwind CSS',
                        'GraphQL',
                        'Docker',
                      ].map((t, i) => (
                        <div
                          key={`dup-${i}`}
                          className="inline-block text-primary font-medium px-4 py-2 bg-card/30 border border-primary/10 rounded-lg flex-shrink-0"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <style>{`
                @keyframes tech-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }
                /* If the content is smaller than the container, center items and pause animation */
                @media (min-width: 0px) {
                .scroll-track {
                  /* ensure items don't wrap and keep their intrinsic width */
                  white-space: nowrap;
                }
                }
              `}</style>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  title: 'Web Development',
                  description:
                    'Full-stack applications built with React, Next.js, and Node.js',
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description:
                    'Optimized for speed, scalability, and user experience',
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description:
                    'Working closely with teams to deliver exceptional results',
                },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate and create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
