"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  research?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full overflow-visible py-12">
      {/* Navigation Controls */}
      <div className="absolute top-0 right-0 flex gap-4 z-20">
        <button 
          onClick={prev}
          className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-foreground/60 hover:text-white"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all text-foreground/60 hover:text-white"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Carousel Track */}
      <div className="relative h-[550px] md:h-[600px] w-full mt-16 overflow-hidden md:overflow-visible">
        <div className="flex gap-8 px-4 md:px-0">
          <AnimatePresence mode="popLayout" initial={false}>
            {projects.map((project, i) => {
              // Calculate relative position to the current index
              const offset = i - index;
              
              // Only render a few cards for performance
              if (Math.abs(offset) > 2 && !(index === 0 && i === projects.length - 1) && !(index === projects.length - 1 && i === 0)) {
                // return null;
              }

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 200, scale: 0.9 }}
                  animate={{ 
                    opacity: index === i ? 1 : 0.4,
                    x: `${(i - index) * 105}%`,
                    scale: index === i ? 1 : 0.9,
                    zIndex: index === i ? 10 : 0,
                    filter: index === i ? "blur(0px)" : "blur(4px)",
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                  className="absolute top-0 left-0 w-full md:w-[85%] h-full"
                >
                  <div className="glass-card h-full overflow-hidden flex flex-col md:flex-row group border-white/5">
                    {/* Project Image */}
                    <div className="relative w-full md:w-3/5 h-64 md:h-full overflow-hidden bg-white/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain transition-all duration-700 scale-95 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent opacity-20 hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-40 md:hidden" />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-[#030303]/40 backdrop-blur-md">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-primary/5 border border-primary/10 rounded text-[10px] font-mono text-primary uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">{project.title}</h3>
                      <p className="text-foreground/50 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4 items-center">
                        <a 
                          href={project.link} 
                          target="_blank"
                          className="px-6 py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-primary transition-all flex items-center gap-2"
                        >
                          View Live <ExternalLink size={16} />
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank"
                          className="text-foreground/40 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                        >
                          <Code2 size={18} /> Source
                        </a>
                        {project.research && (
                          <a 
                            href={project.research} 
                            target="_blank"
                            className="px-6 py-3 border border-white/10 bg-white/5 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                          >
                            Research Paper <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              index === i ? "w-12 bg-primary" : "w-4 bg-white/10 hover:bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};
