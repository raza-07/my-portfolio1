"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code2, Zap, Smartphone, Database, Palette, Rocket } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimization", "Progressive Web Apps", "API Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Beautifully crafted interfaces that work seamlessly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Touch-Friendly UI", "Cross-Browser Support", "Accessibility"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable databases and secure authentication systems.",
      features: ["Database Design", "API Development", "Authentication", "Cloud Deployment"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality for optimal user experience.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your application's speed and efficiency through advanced optimization techniques.",
      features: ["Code Splitting", "Caching Strategies", "Image Optimization", "Bundle Analysis"],
    },
    {
      icon: Rocket,
      title: "Deployment & DevOps",
      description: "Seamless deployment pipelines and infrastructure management for production-ready applications.",
      features: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Services", "Monitoring & Logging"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, target audience, and project requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating a comprehensive roadmap with timelines, milestones, and technical architecture.",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean code, best practices, and regular progress updates.",
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous quality assurance including unit tests, integration tests, and user acceptance testing.",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth launch to production with monitoring, analytics, and performance tracking setup.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance, updates, and support to ensure your application runs smoothly.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-card border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-medium">Services</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Comprehensive
                <span className="text-primary"> Development Services</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                From concept to deployment, I provide end-to-end solutions tailored to your business needs and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">What I Offer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure project success and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-card border border-border rounded-xl p-8">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>

                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Engagement Models</h2>
              <p className="text-muted-foreground">Choose the model that works best for your project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Project-Based",
                  description: "Fixed scope and timeline for well-defined projects",
                  ideal: "Best for: Specific features or complete applications",
                },
                {
                  title: "Time & Materials",
                  description: "Flexible engagement for evolving requirements",
                  ideal: "Best for: Ongoing development and iterations",
                },
                {
                  title: "Retainer",
                  description: "Dedicated support and maintenance services",
                  ideal: "Best for: Long-term partnerships and support",
                },
              ].map((model, idx) => (
                <div key={idx} className="bg-background border border-border rounded-xl p-8">
                  <h3 className="text-lg font-semibold text-primary mb-3">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                  <p className="text-xs text-primary font-medium">{model.ideal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
