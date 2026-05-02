'use client';

import type React from 'react';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Create mailto link — this opens user's default email app
    const mailtoLink = `mailto:radices.technologies@gmail.com?subject=${encodeURIComponent(
      subject || `Message from ${name}`,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailtoLink;

    // Show confirmation message and reset form
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'radices.technologies@gmail.com',
      href: 'mailto:radices.technologies@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92-304-4573944',
      href: 'tel:+923044573944',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.app.goo.gl/HdGyBcPNBpnftqxF8',
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://www.linkedin.com/in/radices-the-roots-8a673b2ba/' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/radices-the-roots-8a673b2ba/',
    },
    { icon: Twitter, label: 'Twitter', href: 'https://www.linkedin.com/in/radices-the-roots-8a673b2ba/' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_70%)] -z-10"></div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-bold uppercase tracking-widest">
                  Connect with Us
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-balance leading-[1.1] tracking-tighter">
                Scale Your <br />
                <span className="text-primary">Intelligence</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                Ready to transform your business with AI? Our engineers are standing by to audit your workflows and design your automated future.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  label: 'General Inquiries',
                  value: 'radices.technologies@gmail.com',
                  href: 'mailto:radices.technologies@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Technical Support',
                  value: '+1 (800) RAD-ICES',
                  href: 'tel:+18007234237',
                },
                {
                  icon: MapPin,
                  label: 'Innovation Hub',
                  value: 'Global / Remote-First',
                  href: '#',
                },
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="bg-background border border-border/50 rounded-2xl p-10 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl"
                  >
                    <Icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      {info.label}
                    </p>
                    <p className="text-base font-bold text-foreground">
                      {info.value}
                    </p>
                  </a>
                );
              })}
            </div>

            { socialLinks.length > 0 && (
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            )}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-6 relative overflow-hidden animate-fade-in-up delay-200">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)] -z-10"></div>
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-none p-8 lg:p-20 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 tracking-tight">
                Request a Custom Audit
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                Provide your details and our AI engineers will analyze your technical bottleneck.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-widest text-primary ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-5 bg-background/50 border border-border/50 rounded-none text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium shadow-inner"
                    placeholder="Jane Doe"
                  />
               </div>

               <div className="space-y-4">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-widest text-primary ml-1"
                  >
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-8 py-5 bg-background/50 border border-border/50 rounded-none text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium shadow-inner"
                    placeholder="jane@company.com"
                  />
               </div>

               <div className="md:col-span-2 space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-primary ml-1">
                    Project Category
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['AI Agents', 'RAG Systems', 'LLM Fine-tuning', 'Full Stack'].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormData(prev => ({ ...prev, subject: cat }));
                        }}
                        className={`px-4 py-3 rounded-none border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${formData.subject === cat ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] scale-105 z-10' : 'bg-background border-border/50 text-muted-foreground hover:border-primary/50'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
               </div>

               <div className="md:col-span-2 space-y-4">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold uppercase tracking-widest text-primary ml-1"
                  >
                    Briefly describe your current technical stack and automation goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-8 py-5 bg-background/50 border border-border/50 rounded-3xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium resize-none shadow-inner"
                    placeholder="e.g., We are using Next.js and want to integrate a secure RAG pipeline for our internal documentation..."
                  ></textarea>
               </div>

               <div className="md:col-span-2">
                 <button
                   type="submit"
                   className="w-full px-10 py-6 bg-primary text-primary-foreground rounded-2xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 font-black text-2xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 group/btn"
                 >
                   Deploy Audit Request
                   <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-2 transition-transform">→</span>
                 </button>

                 {submitted && (
                   <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-2xl text-primary text-center font-bold animate-pulse">
                      Neural uplink established. Redirecting to core mailbox...
                   </div>
                 )}
               </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center tracking-tight">
              Automation Intelligence FAQ
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  question: "How long does a typical AI implementation take?",
                  answer:
                    'Our Innovation Sprints typically deliver a production-ready agent in 4-6 weeks. Larger enterprise-wide integrations can span 3-6 months depending on data complexity.',
                },
                {
                  question: 'Is our proprietary data safe with your AI solutions?',
                  answer:
                    'Absolutely. We specialize in private, on-premise or VPC-hosted LLMs and secure RAG pipelines that ensure your data never leaves your controlled environment.',
                },
                {
                  question: 'Do you work with open-source models like Llama or Mistral?',
                  answer:
                    'Yes, we are model-agnostic. We help you choose the best model for your use case—whether it is a high-performance frontier model (GPT-4, Claude) or a cost-effective, fine-tuned open-source model.',
                },
                {
                  question: 'What is your post-deployment support model?',
                  answer:
                    'We offer continuous monitoring and fine-tuning retainers. AI systems need to adapt as data changes, and we ensure your agents stay accurate and efficient.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(var(--primary-rgb),0.1),transparent_70%)] -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 tracking-tight">
              The AI Future Won&apos;t Wait
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-medium">
              Join Radices and lead the charge in full-stack AI automation engineering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="mailto:radices.technologies@gmail.com" className="px-10 py-5 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/80 transition-all">Email Us Directly</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
