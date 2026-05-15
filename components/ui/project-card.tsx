"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  index: number;
}

export const ProjectCard = ({ title, description, tags, image, link, github, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative flex flex-col glass-card overflow-hidden"
    >
      {/* Image Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold tracking-tight leading-tight">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-primary shrink-0"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-foreground/40 uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-white/5">
          <a href={github} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-white transition-colors">
            <Code2 size={14} />
            Source Code
          </a>
          <a href={link} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-white transition-colors">
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};
