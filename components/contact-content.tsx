'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, Instagram, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [securityCode, setSecurityCode] = useState('');
  const [userCode, setUserCode] = useState('');

  useEffect(() => {
    setSecurityCode(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userCode !== securityCode) {
      alert('Invalid Security Key. Please verify the uplink code.');
      return;
    }
    const { name, email, subject, message } = formData;
    
    const mailtoLink = `mailto:radices.technologies@gmail.com?subject=${encodeURIComponent(
      subject || `Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'radices.technologies@gmail.com', href: 'mailto:radices.technologies@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (650) 665-6019', href: 'tel:+16506656019' },
    { icon: MapPin, label: 'Philadelphia, PA', value: 'USA', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/radices-the-roots-8a673b2ba/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section className="bg-background text-foreground py-32 px-6 relative overflow-hidden border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-serif tracking-normal leading-none uppercase">
                LET&apos;S <span className="text-primary font-sans font-bold">TALK.</span>
              </h1>
              <p className="text-xl text-foreground/50 max-w-md font-medium leading-relaxed">
                Have a high-stakes project? Our AI engineers are ready to deploy. Reach out and let&apos;s build the future.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactDetails.map((detail, i) => (
                  <a 
                    key={i}
                    href={detail.href}
                    className="group flex items-center gap-6 p-4 -ml-4 rounded-2xl hover:bg-foreground/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all shrink-0">
                      <detail.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-1">{detail.label}</p>
                      <p className="text-lg font-bold group-hover:text-primary transition-colors">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8 space-y-10">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { value: '99.9%', label: 'Stability & Uptime Guaranteed' },
                    { value: '8+', label: 'Active Neural AI Systems Live' },
                    { value: '310%', label: 'Average Efficiency ROI Delivered' }
                  ].map((metric, i) => (
                    <div 
                      key={i} 
                      className="bg-slate-50/50 border border-foreground/10 rounded-2xl p-6 hover:bg-background hover:border-primary/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-default group"
                    >
                      <p className="text-3xl font-black text-primary font-mono mb-1 group-hover:scale-110 transition-transform duration-500">{metric.value}</p>
                      <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest group-hover:text-foreground/60 transition-colors">{metric.label}</p>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-slate-50/50 border border-foreground/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-4">Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium placeholder:text-foreground/20 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-4">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Work Email"
                      className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium placeholder:text-foreground/20 text-foreground text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-4">Select Service</label>
                    <div className="relative group/select">
                      <select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={(e: any) => handleChange(e)}
                        className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium text-foreground/40 appearance-none cursor-pointer text-sm"
                      >
                        <option value="" className="bg-background text-foreground/40">Select Strategic Pillar</option>
                        <option value="AI Automation" className="bg-background text-foreground">AI Automation & Agents</option>
                        <option value="Neural Architecture" className="bg-background text-foreground">Neural Architecture Design</option>
                        <option value="Agile Deployment" className="bg-background text-foreground">Agile Deployment & Scaling</option>
                        <option value="Tech Support" className="bg-background text-foreground">Full-Stack Tech Support</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/20 group-hover/select:text-primary transition-colors">
                        <Plus className="w-4 h-4 rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-4">Your Query</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your current technical bottleneck..."
                      className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium resize-none placeholder:text-foreground/20 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 ml-4">Security Code</label>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input 
                          required
                          type="text" 
                          value={userCode}
                          onChange={(e) => setUserCode(e.target.value)}
                          placeholder="Enter key"
                          className="w-full bg-background border border-foreground/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-medium placeholder:text-foreground/20 text-sm"
                        />
                      </div>
                      <div className="w-24 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-center">
                        <span className="text-lg font-black tracking-[0.2em] text-primary font-mono">{securityCode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitted ? 'Inquiry Deployed' : 'Initiate System Audit'}
                      {!submitted && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { label: 'Avg. Response', value: '< 2h' },
                { label: 'Proposal Ready', value: '24h' },
                { label: 'Neural Audit', value: 'Instant' }
              ].map((insight, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 px-8 py-6 bg-slate-50/50 border border-foreground/10 rounded-3xl group hover:bg-background hover:border-primary/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-foreground/20 mb-1 group-hover:text-foreground/40 transition-colors">{insight.label}</p>
                    <p className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{insight.value}</p>
                  </div>
                </div>
              ))}

              {/* Full Width Socials Card */}
              <div className="md:col-span-3 flex flex-col sm:flex-row items-center justify-between px-8 py-6 bg-slate-50/50 border border-foreground/10 rounded-3xl group/social hover:bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-500">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-4 sm:mb-0">Connect Socially</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group/icon"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-foreground/50 group-hover/icon:text-primary group-hover/icon:scale-110 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
