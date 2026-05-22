import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { GithubDashboard } from "@/components/sections/dashboard";
import { ProjectCarousel } from "@/components/sections/project-carousel";

const projects = [
  {
    title: "Symptom2Care",
    description: "An IEEE-published healthcare PWA for symptom extraction, offline fallback, red-flag detection, Firebase persistence, and Gemini-backed recommendations.",
    tags: ["JavaScript", "Firebase", "PWA", "Gemini API"],
    image: "/images/symptom2care.png",
    link: "https://symptom2care.vercel.app",
    github: "https://github.com/techwallahexplorer/Symptom2care",
    research: "https://eurekamag.com/research/106/514/106514213.php",
  },
  {
    title: "Visual Impaired Assistant",
    description: "A Python voice assistant for English/Hindi speech input, NLTK text analysis, sentiment detection, and audio feedback.",
    tags: ["Python", "SpeechRecognition", "NLTK", "GitHub Actions"],
    image: "/images/visual-impaired-assistant.png",
    link: "https://github.com/techwallahexplorer/visual-impaired-assistant",
    github: "https://github.com/techwallahexplorer/visual-impaired-assistant",
  },
  {
    title: "Phoenix",
    description: "A Streamlit flashcard generator that parses study files and uses Gemini structured outputs with Pydantic validation.",
    tags: ["Python", "Streamlit", "Pydantic", "Docker"],
    image: "/images/phoenix.png",
    link: "https://github.com/techwallahexplorer/Phoenix",
    github: "https://github.com/techwallahexplorer/Phoenix",
  },
  {
    title: "Campus Connect",
    description: "A university resource management prototype covering timetable views, attendance pages, feedback workflows, and student-facing navigation.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    image: "/images/campus-connect.png",
    link: "https://github.com/techwallahexplorer/Campus_Connect",
    github: "https://github.com/techwallahexplorer/Campus_Connect",
  },
  {
    title: "Aura Healthcare",
    description: "A browser-based health and blood-donation management prototype with donor search, medicine lookup, health checks, and localStorage persistence.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/images/aura-healthcare.png",
    link: "https://github.com/techwallahexplorer/aura-healthcare",
    github: "https://github.com/techwallahexplorer/aura-healthcare",
  },
];

const notes = [
  {
    title: "Symptom2Care: Preventive Healthcare Symptom Analysis",
    date: "Published - IEEE IC3ECSBHI 2026",
    cat: "Research Publication",
    desc: "A preventive healthcare project using symptom extraction, offline fallback logic, and red-flag detection.",
    link: "https://eurekamag.com/research/106/514/106514213.php",
  },
  {
    title: "Offline Fallbacks in AI-Backed Apps",
    date: "Project Note",
    cat: "Engineering",
    desc: "How Symptom2Care switches between Gemini extraction and local keyword fallback when connectivity changes.",
    link: "#",
  },
  {
    title: "Reliable LLM Outputs with Pydantic",
    date: "Project Note",
    cat: "AI Engineering",
    desc: "Using schema validation to reduce parsing failures in an LLM flashcard generator.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      <div className="mesh-bg" />
      <Navbar />

      <div className="container mx-auto px-6 relative">
        <Hero />

        <section id="projects" className="py-32 overflow-hidden">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical <span className="text-gradient">Projects</span></h2>
            <p className="text-foreground/60 max-w-xl">Projects with source links, clear scope, and the tradeoffs behind the implementation.</p>
          </div>

          <ProjectCarousel projects={projects} />
        </section>

        <GithubDashboard />

        <section id="about" className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative glass-card p-2 rounded-2xl aspect-square overflow-hidden">
                <img
                  src="https://github.com/techwallahexplorer.png"
                  alt="Jagjeet Singh"
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Engineering <span className="text-gradient">Focus</span></h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                I build backend-focused and applied AI projects while strengthening the fundamentals that matter in real software work:
                APIs, data modeling, testing, deployment, and maintainable code.
              </p>
              <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                My strongest work is in healthcare and accessibility projects, including Symptom2Care and Visual Impaired Assistant.
                I am looking for entry-level software engineering roles where I can contribute, learn quickly, and improve through code review.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Core Stack</h4>
                  <ul className="space-y-2 text-sm text-foreground/40 font-mono">
                    <li>TypeScript / Java / Python</li>
                    <li>React / FastAPI / REST APIs</li>
                    <li>PostgreSQL / MongoDB / Firebase</li>
                    <li>Docker / GitHub Actions / Vercel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Focus Areas</h4>
                  <ul className="space-y-2 text-sm text-foreground/40 font-mono">
                    <li>Backend API Design</li>
                    <li>Applied AI Features</li>
                    <li>Healthcare Technology</li>
                    <li>Testing & CI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="py-32 border-t border-white/5">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical <span className="text-gradient">Notes</span></h2>
            <p className="text-foreground/60 max-w-xl">Short notes on project decisions, failures, and implementation tradeoffs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notes.map((post) => (
              <a
                key={post.title}
                href={post.link}
                target="_blank"
                className="group glass-card p-8 hover:bg-white/5 transition-all cursor-pointer block"
              >
                <div className="text-[10px] font-mono text-primary mb-4 uppercase tracking-[0.2em]">{post.cat} - {post.date}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-foreground/50 line-clamp-3 mb-8">{post.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/30 group-hover:text-white transition-colors">
                  Read Note
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
