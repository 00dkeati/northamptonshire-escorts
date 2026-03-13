"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold">
              <span className="text-amber-400">Northamptonshire</span>
              <span className="text-white">Escorts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/escorts" className="text-gray-300 hover:text-amber-400 transition-colors">
              Our Escorts
            </Link>
            <Link href="/locations" className="text-gray-300 hover:text-amber-400 transition-colors">
              Locations
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-amber-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link href="/escorts" className="text-gray-300 hover:text-amber-400 transition-colors">
                Our Escorts
              </Link>
              <Link href="/locations" className="text-gray-300 hover:text-amber-400 transition-colors">
                Locations
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="btn-gold inline-block text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
