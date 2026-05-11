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
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const sections = ['home', 'info', 'services', 'work', 'insights', 'process', 'about', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Close menu on navigation
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: '/services', id: 'services', label: 'Services' },
    { href: '/work', id: 'work', label: 'Work' },
    { href: '/insights', id: 'insights', label: 'Insights' },
    { href: '/process', id: 'process', label: 'Process' },
    { href: '/about', id: 'about', label: 'About' },
  ];

  const sectionHeadings: Record<string, string> = {
    info: 'Radices Intelligence',
    services: 'Our Services',
    work: 'Our Work',
    insights: 'Customers Insights',
    process: 'Technical Roadmap',
    about: 'Our Mission',
    contact: 'Inquiry Uplink',
    home: 'Radices Intelligence'
  };

  const isActive = (link: any) => {
    if (pathname === '/' && activeSection === link.id) return true;
    return pathname === link.href;
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-background/90 backdrop-blur-xl border-b border-foreground/10 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-4 group relative z-50"
          >
            <img src="/logo.svg" alt="Radices Logo" className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500" />
            <span className="font-bold text-2xl tracking-[0.3em] text-foreground uppercase group-hover:text-primary transition-colors">Radices</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={cn(
                  'text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group',
                  isActive(link) ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-300",
                  isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                )}></span>
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={cn(
                "flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500",
                activeSection === 'contact' || pathname === '/contact' 
                  ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                  : 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20'
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  activeSection === 'contact' ? 'bg-primary-foreground' : 'bg-primary'
                )}></span>
                <span className={cn(
                  "relative inline-flex h-2 w-2 rounded-full",
                  activeSection === 'contact' ? 'bg-primary-foreground' : 'bg-primary'
                )}></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Active Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-foreground p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Floating Section Label (On Page) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
        <div className="h-20 w-[1px] bg-foreground/20"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-foreground/40 rotate-180 [writing-mode:vertical-lr] transition-all duration-700 whitespace-nowrap">
          {sectionHeadings[activeSection] || 'RADICES INTELLIGENCE'}
        </span>
        <div className="h-20 w-[1px] bg-foreground/20"></div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={cn(
                "text-4xl font-bold uppercase tracking-[0.1em] transition-all duration-300",
                isActive(link) ? "text-primary translate-x-2" : "text-foreground/40 hover:text-foreground"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={cn(
              "flex items-center gap-4 px-10 py-5 rounded-full border transition-all duration-500",
              activeSection === 'contact' 
              ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
              : 'bg-primary/10 border-primary/20 text-primary'
            )}
          >
            <span className="relative flex h-3 w-3">
              <span className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                activeSection === 'contact' ? 'bg-primary-foreground' : 'bg-primary'
              )}></span>
              <span className={cn(
                "relative inline-flex h-3 w-3 rounded-full",
                activeSection === 'contact' ? 'bg-primary-foreground' : 'bg-primary'
              )}></span>
            </span>
            <span className="text-xl font-bold uppercase tracking-[0.2em]">Active Now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
