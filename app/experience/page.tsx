'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Aether Labs',
      location: 'Lahore, Pakistan',
      period: 'Jan 2025 - Present',
      description:
        'Contributing to the development of modern, scalable web applications across healthcare, e-commerce, and hosting automation. Building advanced solutions using Next.js, Vue 3, NestJS, and MySQL, integrating ML-driven automation and real-time collaboration features.',
      highlights: [
        'NestJS',
        'Next.js',
        'React.js',
        'Vue.js',
        'TypeScript',
        'MySQL',
        'TypeORM',
        'Machine Learning',
        'Healthcare',
        'E-commerce',
        'Hosting Automation',
        'SaaS',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'RecruitEye',
      location: 'Pennsylvania, United States',
      period: 'July 2024 - September 2024',
      description:
        'Co-developed an AI-driven recruitment platform using React.js and Node.js, integrating automation, data enrichment, and AWS-hosted microservices for intelligent candidate-job matching.',
      highlights: [
        'React.js',
        'Node.js',
        'Express',
        'MongoDB',
        'AWS EC2',
        'AWS S3',
        'Python',
        'AI',
        'Zapier',
        'Coresignal',
      ],
    },
    {
      role: 'Amal Fellow',
      company: 'Amal Academy',
      location: 'New York, NY',
      period: 'August 2023 - Oct 2023',
      description:
        'Built responsive web applications and contributed to product development. Learned best practices in code quality and collaboration.',
      highlights: [
        'Leadership',
        'Teamwork',
        'Communication',
        'Problem Solving',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'NAMAL UNIVERSITY MIANWALI',
      year: '2020 - 2024',
      details: 'GPA: 3.05/4.0 | 2nd Best FYP Award National Level',
    },
    {
      degree: 'DevOps Essentials Certification',
      school: 'Coursera',
      year: 'March 31, 2023',
      details:
        'Intensive 12-week program covering CI/CD, containerization, and cloud services.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.1),transparent_50%)] -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-bold uppercase tracking-widest">Case Studies</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter">
                Proven <br />
                <span className="text-primary">Impact</span> & Innovation
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                A selection of our most impactful AI automation projects that have redefined efficiency for our partners.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 tracking-tight">Success Stories</h2>

            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  title: 'Enterprise Recruitment Orchestration',
                  client: 'RecruitEye (USA)',
                  impact: '85% Reduction in Time-to-Hire',
                  description:
                    'Developed a comprehensive AI recruitment ecosystem that autonomously sources, enriches, and matches candidates using multi-agent systems and real-time data pipelines.',
                  tech: [
                    'Multi-Agent LLMs',
                    'Node.js Microservices',
                    'AWS Lambda',
                    'Vector Search',
                    'Real-time Webhooks',
                  ],
                },
                {
                  title: 'Automated Compliance & Risk Engine',
                  client: 'Synthetix Finance',
                  impact: '99.9% Fraud Detection Accuracy',
                  description:
                    'Engineered a real-time AI risk assessment engine that autonomously monitors transactions and flags compliance anomalies using advanced anomaly detection models.',
                  tech: [
                    'Python/FastAPI',
                    'Financial-LLMs',
                    'NestJS',
                    'Redis',
                    'MLOps Pipeline',
                  ],
                },
                {
                  title: 'E-commerce Support Automation',
                  client: 'Global Logistics Corp',
                  impact: '24/7 Support with 92% Resolution Rate',
                  description:
                    'Implemented an autonomous support agent that handles order tracking, returns, and complex technical queries without human intervention.',
                  tech: [
                    'OpenAI GPT-4',
                    'LangChain',
                    'React/Next.js',
                    'Redis Caching',
                    'Shopify API',
                  ],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border/50 rounded-3xl p-10 lg:p-16 hover:border-primary/50 transition-all duration-500 shadow-xl group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="space-y-2">
                         <p className="text-sm font-bold uppercase tracking-widest text-primary">{project.client}</p>
                         <h3 className="text-3xl lg:text-4xl font-black tracking-tight">{project.title}</h3>
                      </div>
                      
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl inline-block">
                         <p className="text-primary font-black text-xl">{project.impact}</p>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 aspect-video rounded-2xl flex items-center justify-center border border-primary/20 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                       <Zap className="w-24 h-24 text-primary animate-pulse" />
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Visual */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-6 tracking-tight">Radices Timeline</h2>
                <p className="text-muted-foreground text-lg font-medium">Our journey of scaling intelligence.</p>
             </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-[7px] top-0 bottom-0 w-1 bg-primary/10"></div>
              
              {[
                {
                  year: '2026',
                  milestone: 'Launch of Radices AI Agent Orchestrator',
                },
                {
                  year: '2025',
                  milestone: 'Expansion into Global AI Automation Markets',
                },
                {
                  year: '2024',
                  milestone:
                    'Awarded Top AI Implementation Agency / National Tech Summit',
                },
                {
                  year: '2023',
                  milestone:
                    'Radices Founded with a Focus on Full-Stack AI Integration',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-10 mb-12 last:mb-0 group">
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></div>
                  </div>
                  <div className="bg-secondary/20 p-6 rounded-2xl border border-border/50 flex-1 hover:border-primary/50 transition-colors">
                    <p className="text-sm font-black text-primary uppercase tracking-widest mb-1">
                      {item.year}
                    </p>
                    <p className="text-foreground text-lg font-bold">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-5xl font-black mb-8 tracking-tight">Let&apos;s Build Your Success Story</h2>
            <p className="text-xl text-muted-foreground mb-12 font-medium">
              Join the ranks of high-performance companies powered by Radices AI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold text-xl shadow-2xl shadow-primary/20"
            >
              Start Your Case Study
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
