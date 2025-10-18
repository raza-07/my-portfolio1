'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Septem Systems',
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
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-medium">
                  Experience
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Professional
                <span className="text-primary"> Journey</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A timeline of my career growth, projects, and the skills I've
                developed along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Work Experience</h2>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Education</h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mb-2">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.details}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-primary whitespace-nowrap">
                      {edu.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key Milestones</h2>

            <div className="space-y-6">
              {[
                {
                  year: '2024',
                  milestone: 'Graduated with BS in Computer Science',
                },
                {
                  year: '2024',
                  milestone:
                    '2nd Best FYP Award at National Level | Talent Acquisition With AI',
                },
                {
                  year: '2020',
                  milestone:
                    'Merit Scholarship recipient for academic excellence',
                },
                {
                  year: '2018',
                  milestone:
                    'Merit Scholarship recipient for academic excellence',
                },
                {
                  year: '2016',
                  milestone:
                    'Science Bronze medalist at HRCA (Human Resource Competition Association)',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    {idx < 4 && (
                      <div className="w-1 h-16 bg-primary/30 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm font-semibold text-primary">
                      {item.year}
                    </p>
                    <p className="text-muted-foreground">{item.milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how my experience can help bring your project to
              life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg"
            >
              Start a Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
