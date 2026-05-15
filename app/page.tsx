import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { GithubDashboard } from "@/components/sections/dashboard";
import { ProjectCarousel } from "@/components/sections/project-carousel";

const projects = [
  {
    title: "Visual Impaired Assistant",
    description: "An accessibility-focused AI application designed to empower individuals with visual impairments. Features real-time scene description, text-to-speech, and an intuitive voice-guided interface.",
    tags: ["Python", "OpenCV", "TensorFlow", "NLP"],
    image: "/images/visual-impaired-assistant.png",
    link: "#",
    github: "https://github.com/techwallahexplorer/visual-impaired-assistant",
  },
  {
    title: "Aura Healthcare",
    description: "A mental wellness platform that leverages biometric data to provide personalized meditation and stress-management techniques. Features an elegant, glassmorphic UI for a soothing experience.",
    tags: ["React Native", "Node.js", "MongoDB", "HealthKit"],
    image: "/images/aura-healthcare.png",
    link: "#",
    github: "https://github.com/techwallahexplorer/aura-healthcare",
  },
  {
    title: "Campus Connect",
    description: "A centralized social platform for university students to collaborate on projects, share resources, and discover campus events. Built with real-time features and secure authentication.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Socket.io"],
    image: "/images/campus-connect.png",
    link: "#",
    github: "https://github.com/techwallahexplorer/Campus_Connect",
  },
  {
    title: "Phoenix AI",
    description: "Advanced knowledge extraction platform that transforms raw data into structured learning materials. Uses Google GenAI for high-fidelity content generation and reliable schema validation.",
    tags: ["Python", "FastAPI", "Docker", "Gemini AI"],
    image: "/images/phoenix.png",
    link: "https://phoenix-ai.tech",
    github: "https://github.com/techwallahexplorer/Phoenix",
  },
  {
    title: "Symptom2Care",
    description: "Intelligent healthcare diagnostic engine published in ResearchGate. Employs medical NLP for symptom analysis and provides localized health recommendations via a high-performance PWA.",
    tags: ["Next.js 15", "Firebase", "PWA", "Medical AI"],
    image: "/images/symptom2care.png",
    link: "https://symptom2care.vercel.app",
    github: "https://github.com/techwallahexplorer/Symptom2care",
    research: "https://www.researchgate.net/publication/403866333_Symptom2Care_A_Big_Data-Driven_NLP_Platform_for_Preventive_Healthcare"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      {/* Background Layer */}
      <div className="mesh-bg" />
      
      {/* Layout Components */}
      <Navbar />
      
      {/* Content Sections */}
      <div className="container mx-auto px-6 relative">
        <Hero />
        
        {/* Project Section */}
        <section id="projects" className="py-32 overflow-hidden">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical <span className="text-gradient">Artifacts</span></h2>
            <p className="text-foreground/60 max-w-xl">Deep-dives into systems architecture, AI orchestration, and production-ready engineering.</p>
          </div>
          
          <ProjectCarousel projects={projects} />
        </section>

        {/* GitHub Dashboard Section */}
        <GithubDashboard />

        {/* About Section */}
        <section id="about" className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative glass-card p-2 rounded-2xl aspect-square overflow-hidden">
                <img 
                  src="https://github.com/techwallahexplorer.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Engineering <span className="text-gradient">Philosophy</span></h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                I build software that balances technical resilience with premium design. My approach is rooted in 
                systems thinking—ensuring every component is scalable, secure, and performant.
              </p>
              <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                Specializing in AI-native architectures and secure distributed systems, I focus on 
                shipping products that solve real-world problems. From diagnostic engines to financial simulators, 
                I prioritize architectural integrity and clean, maintainable code.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Core Stack</h4>
                  <ul className="space-y-2 text-sm text-foreground/40 font-mono">
                    <li>TypeScript / Java / Python</li>
                    <li>Next.js / React / FastAPI</li>
                    <li>PostgreSQL / MySQL / Supabase</li>
                    <li>Docker / Firebase / AWS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Focus Areas</h4>
                  <ul className="space-y-2 text-sm text-foreground/40 font-mono">
                    <li>AI & LLM Orchestration</li>
                    <li>Healthcare Technology</li>
                    <li>Secure Systems Design</li>
                    <li>Full-stack Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing / Journal Section Preview */}
        <section id="writing" className="py-32 border-t border-white/5">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Technical <span className="text-gradient">Journal</span></h2>
            <p className="text-foreground/60 max-w-xl">Deep-dives into systems architecture and emerging AI patterns.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Symptom2Care: A Big Data-Driven NLP Platform", 
                date: "Published • ResearchGate", 
                cat: "Research Publication",
                desc: "An IEEE-standard exploration of NLP-driven preventive healthcare systems and their impact on diagnostic accuracy.",
                link: "https://www.researchgate.net/publication/403866333_Symptom2Care_A_Big_Data-Driven_NLP_Platform_for_Preventive_Healthcare"
              },
              { 
                title: "Architecting Offline-First AI Systems", 
                date: "May 2024", 
                cat: "Systems",
                desc: "Designing medical diagnostic tools that transition between cloud LLMs and local inference for maximum availability.",
                link: "#"
              },
              { 
                title: "Reliable LLM Outputs with Pydantic", 
                date: "April 2024", 
                cat: "AI Engineering",
                desc: "Implementing strict schema validation to ensure deterministic behavior in educational knowledge extraction.",
                link: "#"
              }
            ].map((post, i) => (
              <a 
                key={i} 
                href={post.link}
                target="_blank"
                className="group glass-card p-8 hover:bg-white/5 transition-all cursor-pointer block"
              >
                <div className="text-[10px] font-mono text-primary mb-4 uppercase tracking-[0.2em]">{post.cat} • {post.date}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-foreground/50 line-clamp-3 mb-8">
                  {post.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/30 group-hover:text-white transition-colors">
                  Read Analysis →
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
