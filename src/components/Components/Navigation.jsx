"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Enable smooth scroll behavior on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-mono font-bold text-xl text-blue-400 flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span>KPDEV</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono font-medium text-slate-300 hover:text-blue-400 transition-colors relative group"
            >
              <span className="text-slate-500">/</span>
              {link.label.toLowerCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-blue-400 hover:bg-slate-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-slate-950 border-t border-slate-800 shadow-lg px-4`}
      >
        <div className="flex flex-col py-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 font-mono font-medium hover:text-blue-400 transition-colors py-2 px-2 hover:bg-slate-800 rounded"
            >
              <span className="text-slate-500">/</span>
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
