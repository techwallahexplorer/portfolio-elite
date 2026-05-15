import React from "react";
import { Mail, MessageCircle, Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary">
              <Terminal size={18} />
            </div>
            <span className="text-sm font-bold tracking-tight text-white uppercase">
              Jagjeet Singh
            </span>
          </div>
          <p className="text-foreground/40 text-sm max-w-sm mb-8 leading-relaxed">
            Software Engineer specializing in AI-native architectures 
            and premium system design. Committed to technical depth, 
            performance, and architectural integrity.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/techwallahexplorer" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-foreground/60 hover:text-white transition-all" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/jagjeet-singh-9b5788252/" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-foreground/60 hover:text-white transition-all" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://chat.whatsapp.com/CksixLhLkBy5JveuwoV0te" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-foreground/60 hover:text-white transition-all" title="WhatsApp Community">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Navigation</h4>
          <ul className="space-y-4">
            {["Projects", "Dashboard", "Writing", "About", "Resume"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-foreground/40 hover:text-primary transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Contact</h4>
          <div className="space-y-4">
            <a href="mailto:urjagjeetsingh@gmail.com" className="flex items-center gap-3 text-sm text-foreground/40 hover:text-white transition-colors">
              <Mail size={16} />
              urjagjeetsingh@gmail.com
            </a>
            <div className="p-4 glass rounded-2xl border-white/5">
              <p className="text-[10px] text-foreground/40 uppercase font-bold mb-2">Current Location</p>
              <p className="text-sm text-white">Noida, India (GMT+5:30)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-foreground/20 font-mono uppercase tracking-widest">
        <span>© 2026 Engineered by Jagjeet Singh</span>
        <div className="flex gap-8">
          <span>Built with Next.js 15</span>
          <span>Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
};
