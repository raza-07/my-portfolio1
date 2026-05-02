'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        'Next.js',
        'React',
        'Vue.js',
        'Vuetify',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: [
        'NestJS',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'REST APIs',
      ],
    },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'] },
  ];

  const values = [
    {
      title: 'Clean Code',
      description:
        'I write maintainable, well-documented code that scales with your business.',
    },
    {
      title: 'User First',
      description:
        'Every decision is made with the end user in mind, ensuring great experiences.',
    },
    {
      title: 'Performance',
      description:
        'Speed matters. I optimize for performance at every level of the stack.',
    },
    {
      title: 'Collaboration',
      description:
        'I work closely with teams and clients to understand and exceed expectations.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 blur-[100px]"></div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter">
                Engineering the <br />
                <span className="text-primary">Intelligence</span> of Tomorrow
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                Radices was founded on the principle that automation should be more than just scripts. We build intelligent systems that learn, adapt, and drive exponential growth for our partners.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 bg-secondary/30 animate-fade-in-up delay-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black tracking-tight">The Radices Story</h2>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
                  <p>
                    In an era of rapid technological shift, Radices emerged as a response to the growing complexity of AI integration. We saw businesses struggling to bridge the gap between legacy systems and the promise of artificial intelligence.
                  </p>

                  <p>
                    Our team of engineers and AI researchers came together to create a new kind of agency—one that combines deep full-stack expertise with cutting-edge automation techniques.
                  </p>

                  <p>
                    Today, Radices stands at the forefront of AI Automation, helping industry leaders automate their most complex workflows and reclaim thousands of hours in human productivity.
                  </p>
                </div>
                
                <div className="flex gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-black text-primary">3+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years Innovation</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">15+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">AI Specialists</p>
                  </div>
                </div>
              </div>

              <div className="relative animate-scale-in delay-200">
                <div className="absolute inset-0 bg-primary/20 rounded-none blur-3xl -rotate-3 scale-105"></div>
                <div className="relative bg-background border border-primary/30 rounded-none overflow-hidden shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] group">
                  <img
                    src="/radices_hq.png"
                    alt="Radices Headquarters"
                    className="w-full aspect-[4/5] object-cover block group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  
                  {/* Branding Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/60 backdrop-blur-md px-3 py-1.5 border border-primary/30">
                    <span className="bg-primary text-primary-foreground px-1.5 py-0 text-sm font-black">R</span>
                    <span className="text-xs font-bold tracking-tighter uppercase text-primary">Radices_Command</span>
                  </div>

                  {/* System Overlay */}
                  <div className="absolute top-4 right-4 p-4 bg-background/40 backdrop-blur-md border border-primary/30 rounded-none text-[10px] font-mono text-primary space-y-1 animate-pulse">
                    <p>{'>'} UPLINK: SECURE</p>
                    <p>{'>'} AGENTS: 42 ACTIVE</p>
                    <p>{'>'} LATENCY: 12ms</p>
                    <p>{'>'} NEURAL_LOAD: 74%</p>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                       <p className="text-primary font-black uppercase tracking-[0.2em] text-xs">Innovation Hub / 01</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-6 animate-fade-in-up delay-300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight">Our Technical Arsenal</h2>
              <p className="text-muted-foreground text-lg font-medium">
                We leverage the most advanced technologies to build your competitive edge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'AI & Machine Learning',
                  items: [
                    'OpenAI / Anthropic API',
                    'LangChain / LlamaIndex',
                    'Vector DBs (Pinecone, Weaviate)',
                    'Fine-tuning LLMs',
                    'Computer Vision',
                    'Natural Language Processing',
                  ],
                },
                {
                  category: 'Full Stack Engineering',
                  items: [
                    'Next.js / React',
                    'Python (FastAPI, Django)',
                    'Node.js / TypeScript',
                    'PostgreSQL / Redis',
                    'GraphQL / gRPC',
                    'Microservices Architecture',
                  ],
                },
                {
                  category: 'Automation & DevOps',
                  items: [
                    'Docker / Kubernetes',
                    'CI/CD Pipelines',
                    'AWS / GCP / Azure',
                    'n8n / Make.com / Zapier',
                    'Infrastructure as Code (Terraform)',
                    'Automated Testing (Playwright)',
                  ],
                },
              ].map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-4">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <li key={skillIdx} className="flex items-center gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0" />
                        <span className="text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight">The Radices Way</h2>
              <p className="text-muted-foreground text-lg font-medium">
                Our core principles that define every interaction and implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Intelligence-First',
                  description:
                    'We don\'t just automate; we build systems that think. Every solution is designed to add cognitive value to your business.',
                },
                {
                  title: 'Scalability by Design',
                  description:
                    'Our architectures are built to grow. Whether you process 100 or 1,000,000 requests, our systems handle it with ease.',
                },
                {
                  title: 'Data Sovereignty',
                  description:
                    'We prioritize the security and privacy of your proprietary data, ensuring all AI implementations are secure and compliant.',
                },
                {
                  title: 'Radical Transparency',
                  description:
                    'We believe in clear communication and honest timelines. You\'ll always know exactly where your project stands.',
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 tracking-tight">
              Join the Automation Revolution
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              We&apos;re looking for ambitious partners who are ready to redefine their industry with AI.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold text-xl shadow-xl shadow-primary/20"
            >
              Start Your Journey
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
