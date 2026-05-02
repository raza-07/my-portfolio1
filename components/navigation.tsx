'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Case Studies' },
    { href: '/services', label: 'Solutions' },
    { href: '/testimonials', label: 'Feedback' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black text-white border border-white/20 flex items-center justify-center font-black text-lg rounded-none transition-transform group-hover:scale-110 group-hover:border-white">
            R
          </div>
          <span className="font-black text-lg tracking-widest text-white uppercase">adices</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[11px] font-bold uppercase tracking-[0.2em] transition-colors',
                pathname === link.href ? 'text-primary' : 'text-white/50 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Audit
          </Link>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
