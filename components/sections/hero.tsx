"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/5 border border-white/10 text-primary"
        >
          <Sparkles size={12} />
          Available for Opportunities
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Jagjeet <span className="text-gradient">Singh</span> <br /> 
          <span className="text-3xl md:text-5xl opacity-60">Software Engineer.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-12 leading-relaxed">
          Final-year CSE student focused on backend software engineering,
          applied AI projects, and practical healthcare/accessibility tools.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all shadow-xl shadow-white/10">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
          >
            Resume
          </a>
          <a href="mailto:urjagjeetsingh@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            Get in touch
          </a>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-8 mb-20">
          <a href="https://github.com/techwallahexplorer" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jagjeet-singh-9b5788252/" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://chat.whatsapp.com/CksixLhLkBy5JveuwoV0te" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors" title="WhatsApp Community">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 4.5z"/><path d="M15.5 13.5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 0-2.12 0l-.88.88a1.5 1.5 0 0 1-2.12 0l-.3-.3a1.5 1.5 0 0 1 0-2.12l.88-.88a1.5 1.5 0 0 0 0-2.12l-.88-.88a1.5 1.5 0 0 1 0-2.12l.3-.3a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 0 2.12 0l.88-.88a1.5 1.5 0 0 1 2.12 0l.3.3a1.5 1.5 0 0 1 0 2.12l-.88.88a1.5 1.5 0 0 0 0 2.12l.88.88a1.5 1.5 0 0 1 0 2.12l-.3.3z"/></svg>
          </a>
        </div>

        {/* Floating Status Indicator (Moved into flow) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-6 text-[10px] font-mono text-white/20 tracking-widest uppercase"
        >
          <span>Next.js 15</span>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <span>Framer Motion</span>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <span>TypeScript 5</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
