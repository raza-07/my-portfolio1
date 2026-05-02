'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-black text-white border border-white/20 flex items-center justify-center font-black text-xl rounded-none transition-transform group-hover:scale-110">
                R
              </div>
              <span className="font-black text-xl tracking-widest text-white uppercase">adices</span>
            </Link>
            <p className="text-lg text-white/50 leading-relaxed max-w-sm font-medium">
              We engineer the foundations of the intelligent era. High-stakes AI automation for modern enterprise.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Solutions', href: '/services' },
                { label: 'Case Studies', href: '/experience' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8">Connect</h4>
            <ul className="space-y-4">
              {['LinkedIn', 'GitHub', 'Twitter', 'Email'].map(social => (
                <li key={social}>
                  <a 
                    href="https://www.linkedin.com/in/radices-the-roots-8a673b2ba/"
                    className="text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
          <p>&copy; {currentYear} Radices Intelligence. All rights reserved.</p>
          <div className="flex gap-10">
             {['Privacy', 'Terms', 'Security'].map(item => (
               <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
