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
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-medium">
                  About Me
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Passionate About Building
                <span className="text-primary"> Digital Solutions</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                With over 2 years of experience in full-stack development, I've
                had the privilege of working with startups and established
                companies to bring their visions to life through elegant,
                scalable web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">My Journey</h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started my journey in web development with a curiosity
                    about how things work on the internet. What began as a hobby
                    quickly turned into a passion, and I decided to pursue it
                    professionally.
                  </p>

                  <p>
                    Over the years, I've worked on diverse projects ranging from
                    e-commerce platforms to real-time collaboration tools. Each
                    project has taught me something valuable about building
                    software that users love.
                  </p>

                  <p>
                    Today, I focus on creating solutions that are not just
                    functional, but delightful to use. I believe great software
                    is the intersection of beautiful design, solid engineering,
                    and deep understanding of user needs.
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>

                {/* Replace "/images/me.jpg" with your actual image path */}
                <div className="relative bg-background border border-primary/20 rounded-2xl overflow-hidden w-full max-w-[420px] h-[520px] mx-auto">
                  <img
                    src="image.png"
                    alt="My photo"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground">
                A comprehensive toolkit built through years of hands-on
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <li key={skillIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
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
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Approach</h2>
              <p className="text-muted-foreground">
                Core principles that guide every project I work on
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let's Create Something Great
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
