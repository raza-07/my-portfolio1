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
    { icon: Phone, label: 'Phone (USA)', value: '+1 (650) 665-6019', href: 'tel:+16506656019' },
    { icon: MapPin, label: 'Global HQ', value: 'Silicon Valley, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/radices-the-roots-8a673b2ba/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                LET&apos;S <span className="text-primary">TALK.</span>
              </h1>
              <p className="text-xl text-white/50 max-w-md font-medium leading-relaxed">
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
                    className="group flex items-center gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                      <detail.icon className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{detail.label}</p>
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
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-primary/5 hover:border-primary/50 hover:scale-[1.02] transition-all duration-500 cursor-default group"
                    >
                      <p className="text-3xl font-black text-primary font-mono mb-1 group-hover:scale-110 transition-transform duration-500">{metric.value}</p>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Connect Socially</p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, i) => (
                      <a 
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        title={social.label}
                      >
                        <social.icon className="w-6 h-6 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all" />
                      </a>
                    ))}
                  </div>
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
              className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-xl shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Identity</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Communication</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Work Email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10 text-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Strategic Service</label>
                    <div className="relative group/select">
                      <select 
                        required
                        name="service"
                        value={formData.service}
                        onChange={(e: any) => handleChange(e)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium text-white/40 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-black text-white/40">Select Strategic Pillar</option>
                        <option value="AI Automation" className="bg-black text-white">AI Automation & Agents</option>
                        <option value="Neural Architecture" className="bg-black text-white">Neural Architecture Design</option>
                        <option value="Agile Deployment" className="bg-black text-white">Agile Deployment & Scaling</option>
                        <option value="Tech Support" className="bg-black text-white">Full-Stack Tech Support</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover/select:text-primary transition-colors">
                        <Plus className="w-4 h-4 rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">The Challenge</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your current technical bottleneck..."
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium resize-none placeholder:text-white/10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Secure Uplink Key</label>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input 
                          required
                          type="text" 
                          value={userCode}
                          onChange={(e) => setUserCode(e.target.value)}
                          placeholder="Enter the 4-digit key"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/10"
                        />
                      </div>
                      <div className="w-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-black tracking-[0.3em] text-primary font-mono">{securityCode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full group relative bg-blue-500 text-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:bg-blue-400 hover:text-black transition-all duration-500 overflow-hidden shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:shadow-primary/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {submitted ? 'Inquiry Deployed' : 'Initiate Neural Audit'}
                      {!submitted && <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
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
                  className="flex items-center gap-4 px-8 py-6 bg-white/[0.02] border border-white/10 rounded-3xl group hover:bg-primary/5 hover:border-primary/50 hover:scale-[1.02] transition-all duration-500 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform"></div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1 group-hover:text-white/40 transition-colors">{insight.label}</p>
                    <p className="text-xl font-black text-white group-hover:text-primary transition-colors">{insight.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
