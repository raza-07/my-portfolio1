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
    const mailtoLink = `mailto:arrazarao@gmail.com?subject=${encodeURIComponent(
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
      value: 'arrazarao@gmail.com',
      href: 'mailto:arrazarao@gmail.com',
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
    { icon: Github, label: 'GitHub', href: 'https://github.com/raza-07' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-aliraza-a84975229/',
    },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/arrazarao' },
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
                  Get in Touch
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Let's Work
                <span className="text-primary"> Together</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Have a project in mind? I'd love to hear about it. Get in touch
                and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground mb-2">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {info.value}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-lg"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-center">
                  Your email app has opened — please send your message!
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer:
                    'Small projects usually take 2–4 weeks, while larger apps can take 2–3 months. I provide detailed timelines during consultation.',
                },
                {
                  question: 'Do you offer ongoing support?',
                  answer:
                    'Yes — I offer retainer packages for maintenance, updates, and support after launch.',
                },
                {
                  question: "What's your development process?",
                  answer:
                    'I follow a clear process: discovery → planning → development → testing → deployment → ongoing support.',
                },
                {
                  question: 'Can you work with existing codebases?',
                  answer:
                    'Absolutely. I can refactor, optimize, or extend existing systems while maintaining stability.',
                },
                {
                  question: 'What technologies do you specialize in?',
                  answer:
                    'React, Next.js, Node.js, TypeScript, TailwindCSS, and cloud deployments.',
                },
                {
                  question: 'How do you handle project communication?',
                  answer:
                    'Weekly updates and consistent communication through your preferred platform — Slack, Email, or Notion.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form above or contact me directly. I’m excited to
              collaborate on your next big idea!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
