"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/divisions", label: "Our Divisions" },
    { href: "/solutions", label: "Solutions" },
    { href: "/case-studies/la-metro-purple-line", label: "Case Studies" },
  ];

  return (
    <header className="bg-slate-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-safety-orange rounded flex items-center justify-center font-bold text-lg">
              CSI
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-tight">CSI Concrete Systems</p>
              <p className="text-xs text-gray-400 leading-tight">The Power of Precision Precast</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-safety-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1-800-342-3374"
              className="bg-safety-orange text-white px-4 py-2 rounded text-sm font-semibold hover:bg-safety-orange-light transition-colors"
            >
              1-800-342-3374
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-700 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-300 hover:text-safety-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1-800-342-3374"
              className="block bg-safety-orange text-white px-4 py-2 rounded text-sm font-semibold text-center hover:bg-safety-orange-light transition-colors"
            >
              1-800-342-3374
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
