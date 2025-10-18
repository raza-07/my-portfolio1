'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [open, setOpen] = useState(false);

  // prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="w-full top-0 left-0 z-[9999]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / brand */}
        <div>
          <Link href="/" className="text-xl font-bold">
            MyPortfolio
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="font-medium">
            About
          </Link>
          <Link href="/projects" className="font-medium">
            Projects
          </Link>
          <Link href="/contact" className="font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => {
              setOpen((s) => !s);
              console.log('menu toggled', !open);
            }}
            className="p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[10000] pointer-events-auto transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Actual menu panel */}
        <div className="absolute top-16 right-4 left-4 mx-auto max-w-sm bg-background border border-border rounded-xl p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="block font-medium py-2"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block font-medium py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
