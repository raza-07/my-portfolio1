"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code2, Zap, Smartphone, Database, Palette, Rocket, CheckCircle2 } from "lucide-react"

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
        <section className="py-20 px-6 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-bold uppercase tracking-widest">Solutions</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter">
                Intelligent <br />
                <span className="text-primary">Automation</span> Ecosystems
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                We design and deploy state-of-the-art AI solutions that bridge the gap between human creativity and machine efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-secondary/30 animate-fade-in-up delay-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 tracking-tight">Our Core Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Autonomous AI Agents",
                  description: "Self-correcting AI agents that manage complex workflows, from customer support to lead generation.",
                  features: ["24/7 Operation", "Multi-platform Integration", "Self-Learning Capabilities", "Human-in-the-loop Systems"],
                },
                {
                  icon: Database,
                  title: "Intelligent RAG Systems",
                  description: "Retrieval-Augmented Generation systems that allow LLMs to talk to your proprietary business data securely.",
                  features: ["Vector Database Setup", "Semantic Search", "Document Orchestration", "Privacy-First Architecture"],
                },
                {
                  icon: Code2,
                  title: "Full-Stack AI Apps",
                  description: "High-performance web and mobile applications with deeply integrated AI functionalities.",
                  features: ["Next.js/React Frontend", "FastAPI/Python Backend", "Real-time AI Features", "Scalable Cloud Hosting"],
                },
                {
                  icon: Rocket,
                  title: "Business Process Auto",
                  description: "End-to-end automation of repetitive tasks using n8n, LangChain, and custom middleware.",
                  features: ["Workflow Orchestration", "Legacy System Bridge", "Error Handling & Logging", "Performance Analytics"],
                },
                {
                  icon: Smartphone,
                  title: "AI-Powered UI/UX",
                  description: "Dynamic interfaces that adapt to user behavior through predictive modeling and real-time feedback.",
                  features: ["Predictive Search", "Adaptive Layouts", "Voice & Chat Interfaces", "Personalization Engines"],
                },
                {
                  icon: Palette,
                  title: "Custom LLM Training",
                  description: "Fine-tuning open-source models (Llama, Mistral) on your industry-specific datasets for peak performance.",
                  features: ["Data Preparation", "Model Fine-tuning", "Quantization & Deployment", "Benchmarking"],
                },
              ].map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    className="bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden glow-on-hover animate-fade-in-up"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8 font-medium leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 pt-6 border-t border-border/50">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-muted-foreground flex items-center gap-3 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6 tracking-tight">Our Deployment Lifecycle</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
                We follow a rigorous engineering process to ensure your AI systems are robust, secure, and effective.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Intelligence Audit",
                  description: "We analyze your current workflows to identify the highest-impact areas for AI integration.",
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  description: "Building the technical blueprint, selecting the right LLMs, and designing the data flow.",
                },
                {
                  step: "03",
                  title: "Rapid Prototyping",
                  description: "Deploying a minimum viable agent to test core assumptions and gather initial performance data.",
                },
                {
                  step: "04",
                  title: "Scale Engineering",
                  description: "Hardening the system for production, implementing error handling, and optimizing for speed.",
                },
                {
                  step: "05",
                  title: "Safety & Compliance",
                  description: "Rigorous testing for hallucinations, data leaks, and edge-case behavior to ensure reliability.",
                },
                {
                  step: "06",
                  title: "Continuous Evolution",
                  description: "Ongoing monitoring and fine-tuning as your data evolves and new AI models emerge.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-card border border-border/50 rounded-2xl p-10 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="text-6xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 px-6 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight">Partnering with Radices</h2>
              <p className="text-muted-foreground text-lg font-medium">Flexible models tailored to your innovation velocity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation Sprint",
                  description: "A focused 4-6 week engagement to build and deploy a specific AI solution.",
                  ideal: "Ideal for: New products or specific workflow bottlenecks.",
                },
                {
                  title: "AI Infrastructure",
                  description: "Deep integration of AI across your entire technical stack and operations.",
                  ideal: "Ideal for: Scaling businesses looking for long-term automation.",
                },
                {
                  title: "Strategic Retainer",
                  description: "Continuous R&D and maintenance to keep you at the cutting edge of AI tech.",
                  ideal: "Ideal for: Enterprise partners requiring ongoing innovation.",
                },
              ].map((model, idx) => (
                <div key={idx} className="bg-background border border-border/50 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary mb-6">{model.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">{model.description}</p>
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-primary font-bold uppercase tracking-widest">{model.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 tracking-tight">Scale Your Intelligence</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              Don&apos;t get left behind in the AI revolution. Let&apos;s build your automated future together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-all duration-300 font-bold text-xl shadow-2xl shadow-primary/20"
            >
              Book a Solution Demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
