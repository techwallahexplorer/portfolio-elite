"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Terminal, Code2, Globe, Mail } from "lucide-react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Writing", href: "#writing" },
  { name: "About", href: "#about" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 transition-all duration-300",
        scrolled ? "p-4" : "p-6"
      )}
    >
      <div className={cn(
        "flex items-center justify-between w-full max-w-5xl px-6 py-3 transition-all duration-500 rounded-full",
        scrolled ? "glass shadow-2xl" : "bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary">
            <Terminal size={18} />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white transition-opacity group-hover:opacity-80 uppercase">
            Jagjeet Singh
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-foreground/60 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/techwallahexplorer" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-white transition-colors" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jagjeet-singh-9b5788252/" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-white transition-colors" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
          <button className="hidden px-4 py-1.5 text-xs font-semibold text-black bg-primary rounded-full hover:opacity-90 transition-all md:block">
            Resume
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
