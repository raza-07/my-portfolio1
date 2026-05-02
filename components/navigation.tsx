'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Case Studies' },
    { href: '/services', label: 'Solutions' },
    { href: '/testimonials', label: 'Feedback' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-8 h-8 bg-black text-white border border-white/20 flex items-center justify-center font-black text-lg rounded-none transition-transform group-hover:scale-110 group-hover:border-white">
              R
            </div>
            <span className="font-black text-lg tracking-widest text-white uppercase">adices</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group',
                  pathname === link.href ? 'text-primary' : 'text-white/50 hover:text-white'
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-300",
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-white p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black transition-all duration-500 ease-in-out md:hidden",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-4xl font-black uppercase tracking-[0.1em] transition-all duration-300",
                pathname === link.href ? "text-primary translate-x-2" : "text-white/40 hover:text-white"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-full max-w-xs py-6 bg-white text-black text-center font-black uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Start Your Audit
          </Link>
        </div>
      </div>
    </>
  );
}
