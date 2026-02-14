"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/divisions", label: "Divisions" },
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies/la-metro-purple-line", label: "Case Studies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-safety-orange font-black text-2xl tracking-tighter">
              CSI
            </span>
            <span className="hidden sm:block text-white/60 text-[10px] uppercase tracking-[0.2em] leading-tight border-l border-white/20 pl-3">
              Concrete<br />Systems
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-white/70 hover:text-safety-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1-800-342-3374"
              className="text-[13px] uppercase tracking-[0.15em] text-safety-orange border border-safety-orange/40 px-5 py-2 hover:bg-safety-orange hover:text-white transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 space-y-4 border-t border-white/10 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm uppercase tracking-widest text-white/70 hover:text-safety-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1-800-342-3374"
              className="block text-sm uppercase tracking-widest text-safety-orange"
            >
              1-800-342-3374
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
