
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  ChevronRight, Code, Layout, Smartphone, Layers, 
  ArrowRight, MessageSquare, Terminal, Cpu, CheckCircle2,
  Globe, Server, Database, Sparkles, Activity, Link, GraduationCap, MapPin, Phone
} from 'lucide-react';
import profileImageUrl from './assets/profile.jpeg';
import { SKILL_GROUPS, PROJECTS, EXPERIENCES, BLOG_POSTS, SOCIAL_LINKS, EDUCATION } from './constants';
import { GoogleGenAI } from "@google/genai";
import { Project } from './types';

// --- Sub-components ---

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors z-10 border border-white/5"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 lg:h-full relative overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          
          <div className="p-8 lg:p-12">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles size={16} className="text-brand-500" />
              <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Case Study</span>
            </div>
            <h3 className="text-4xl font-black text-white mb-6 leading-tight">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-1.5 bg-brand-500/10 text-brand-400 text-xs font-bold rounded-xl border border-brand-500/20">{t}</span>
              ))}
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                  <Terminal size={14} className="mr-2" /> Overview
                </h4>
                <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="p-5 bg-slate-950/50 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-black text-brand-500 uppercase tracking-widest mb-3 flex items-center">
                    <Layers size={14} className="mr-2" /> The Challenge
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.challenges}</p>
                </div>
                
                <div className="p-5 bg-slate-950/50 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-3 flex items-center">
                    <CheckCircle2 size={14} className="mr-2" /> The Solution
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.solutions}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href={SOCIAL_LINKS.github} className="flex-1 flex items-center justify-center px-6 py-4 bg-slate-800 hover:bg-slate-750 text-white rounded-2xl font-bold transition-all border border-white/5 text-sm">
                <Github size={18} className="mr-2" /> Repository
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="flex-1 flex items-center justify-center px-6 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl font-bold transition-all text-sm shadow-lg shadow-brand-600/20">
                <Linkedin size={18} className="mr-2" /> Discuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'History', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-black text-2xl transition-all group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-brand-500/20">DK</div>
          <div className="hidden sm:block">
            <span className="text-xl font-black text-white block leading-none tracking-tight">Dilip Kumar Gupta</span>
            <span className="text-[10px] text-brand-500 font-black uppercase tracking-[0.2em] leading-none">Technical Lead</span>
          </div>
        </a>
        
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-7 py-3 rounded-2xl bg-white text-slate-950 text-sm font-black uppercase tracking-widest transition-all hover:bg-brand-400 hover:text-white hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
            Hire Me
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-white/5 rounded-xl transition-colors">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-slate-950 z-40 p-8 space-y-8 flex flex-col items-center justify-center animate-in fade-in slide-in-from-top-10 duration-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-5xl font-black text-slate-100 hover:text-brand-400 transition-colors tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}.
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-8 px-12 py-5 rounded-3xl bg-brand-600 text-white font-black text-xl uppercase tracking-widest shadow-2xl">
            Start a project
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative">
      <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-brand-400 text-sm font-black uppercase tracking-widest mb-10 animate-in fade-in slide-in-from-bottom duration-700">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
        </span>
        <span>Based in New Delhi, India</span>
      </div>
      
      <h1 className="text-7xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom duration-1000">
        TECHNICAL<br />
        <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500 bg-clip-text text-transparent">PRODUCT LEAD.</span>
      </h1>
      
      <p className="max-w-3xl text-xl md:text-3xl text-slate-400 mb-14 leading-tight font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
        12+ years of experience delivering AI/ML telematics, connected vehicle systems, and mobile-first Android solutions across firmware, cloud, and user experience.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
        <a href="#projects" className="group px-12 py-6 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center text-lg shadow-2xl shadow-brand-600/40 hover:-translate-y-1">
          Explore Projects <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
        </a>
        <a href="#contact" className="px-12 py-6 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest transition-all border border-white/10 text-lg hover:-translate-y-1">
          Work with me
        </a>
      </div>

      <div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40">
        <div className="flex items-center space-x-3 text-slate-400 font-black uppercase tracking-widest text-[10px]"><Layers size={18} className="text-brand-500" /> <span>12+ Years Experience</span></div>
        <div className="flex items-center space-x-3 text-slate-400 font-black uppercase tracking-widest text-[10px]"><Cpu size={18} className="text-brand-500" /> <span>AI & Telematics Delivery</span></div>
        <div className="flex items-center space-x-3 text-slate-400 font-black uppercase tracking-widest text-[10px]"><Layout size={18} className="text-brand-500" /> <span>Connected Vehicle Systems</span></div>
        <div className="flex items-center space-x-3 text-slate-400 font-black uppercase tracking-widest text-[10px]"><Smartphone size={18} className="text-brand-500" /> <span>Mobile Product Leadership</span></div>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, count }: { title: string; subtitle?: string; count?: string }) => (
  <div className="mb-20">
    <div className="flex items-center space-x-4 mb-4">
       <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-xs">Section {count || "01"}</span>
       <div className="h-px flex-1 bg-white/5"></div>
    </div>
    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">{title}</h2>
    {subtitle && <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-medium">{subtitle}</p>}
  </div>
);

const AIConsultant = () => {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getMobileAdvice = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Give a short, expert technical tip (2 sentences max) for high-performance React Native development. Make it sound professional and insightful.",
      });
      setAdvice(response.text || "Use ViewModel + StateFlow to build lifecycle-aware, reactive UI and avoid memory leaks.");
    } catch (error) {
      setAdvice("Use ViewModel + StateFlow to build lifecycle-aware, reactive UI and avoid memory leaks.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-125 group-hover:opacity-[0.05] transition-all duration-1000">
        <Sparkles size={260} />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
        <div className="w-24 h-24 rounded-[2rem] bg-brand-600 flex items-center justify-center shrink-0 shadow-2xl shadow-brand-500/40 animate-bounce-slow">
          <MessageSquare className="text-white" size={40} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-black text-white mb-4">Mobile Engineering Intelligence</h3>
          <p className="text-slate-400 text-lg mb-10 max-w-xl">Leveraging Gemini 3 to provide real-time architectural insights for modern mobile developers.</p>
          
          <div className="min-h-[100px] flex items-center justify-center md:justify-start">
            {loading ? (
              <div className="flex space-x-3">
                <div className="w-3 h-3 bg-brand-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-brand-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-brand-500 rounded-full animate-bounce delay-300"></div>
              </div>
            ) : advice ? (
              <div className="p-8 bg-brand-500/5 border border-brand-500/10 rounded-3xl animate-in fade-in slide-in-from-left duration-700">
                <p className="text-brand-300 italic text-2xl font-medium tracking-tight">"{advice}"</p>
              </div>
            ) : (
              <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Waiting for signal...</p>
            )}
          </div>
          
          <button 
            onClick={getMobileAdvice} 
            disabled={loading}
            className="mt-10 px-8 py-4 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center shadow-xl shadow-brand-600/20 active:scale-95"
          >
            {loading ? "Processing Nodes..." : "Get Performance Tip"}
          </button>
        </div>
      </div>
    </div>
  );
}

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 aspect-[3/4] rounded-[3rem] bg-slate-800 overflow-hidden border border-white/10 shadow-3xl">
            {/* 
               IMAGE PRIORITY:
               1. This component looks for a file named "profile.png" in your project folder.
               2. If not found, it falls back to a high-quality professional portrait of an Indian male in a suit.
            */}
            <img 
              src={profileImageUrl}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.src = "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1974&auto=format&fit=crop";
              }}
              alt="Dilip Kumar Gupta - Technical Lead" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 scale-105 hover:scale-100"
            />
          </div>
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 p-10 bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-brand-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/30"><Code size={32} /></div>
              <div>
                <p className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Impact Span</p>
                <p className="text-3xl font-black text-white">12+ YEARS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader 
            count="01"
            title="Beyond Code. Delivering Business Value." 
            subtitle="I specialize in architecting AI/ML-powered telematics, connected vehicle systems, and mobile product delivery across Android and IoT platforms."
          />
          <div className="space-y-8 text-slate-400 text-xl leading-relaxed">
            <p>
              With over <span className="text-white font-bold">12 years of experience</span> across Android, iOS, Web, IoT, firmware, and cloud platforms, I build connected mobility products that combine engineering, product strategy, and delivery.
            </p>
            <p>
              I specialize in AI/ML-powered telematics, connected vehicle systems, and mobile product leadership. My work spans vehicle diagnostics, remote controls, predictive maintenance, and high-quality Android application delivery.
            </p>
            <p>
              I help teams improve reliability and performance through data-driven monitoring, scalable architecture, and disciplined Agile delivery—reducing ANRs by 25%, APK size by 20%, and engagement gaps by up to 25%.
            </p>
            
            <div className="pt-8 space-y-4">
               {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <GraduationCap className="text-brand-500" size={24} />
                    <div>
                      <h4 className="text-white font-black uppercase text-xs tracking-widest">{edu.degree} — {edu.institution}</h4>
                      <p className="text-slate-500 text-xs font-bold">{edu.period}</p>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-32 bg-slate-900/30 relative">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <SectionHeader 
        count="02"
        title="Technical Arsenal" 
        subtitle="A comprehensive toolkit built through years of solving complex mobile engineering problems." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="p-12 rounded-[3.5rem] bg-slate-950/50 border border-white/5 hover:border-brand-500/40 transition-all group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/5 rounded-full blur-3xl group-hover:bg-brand-600/10 transition-colors"></div>
            <h3 className="text-3xl font-black text-white mb-10 flex items-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mr-5 text-brand-400 group-hover:scale-110 transition-transform shadow-inner">
                {group.category.includes("Expertise") ? <Smartphone size={24} /> : group.category.includes("Tools") ? <Layout size={24} /> : <Activity size={24} />}
              </div>
              {group.category}
            </h3>
            <ul className="space-y-6">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-start space-x-4 group/item">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 group-hover/item:bg-brand-500 group-hover/item:text-white transition-all shadow-sm">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <span className="text-slate-200 font-bold text-lg tracking-tight block group-hover/item:text-brand-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionHeader 
          count="03"
          title="Case Studies" 
          subtitle="Real-world applications delivering value in the EV and Collaboration sectors." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-[4rem] bg-slate-900/50 border border-white/5 overflow-hidden hover:border-brand-500/40 transition-all duration-700 shadow-3xl flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="space-y-3">
                    <h3 className="text-4xl font-black text-white group-hover:text-brand-400 transition-colors tracking-tighter leading-none">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-widest text-brand-500 bg-brand-500/10 px-2 py-0.5 rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-[2rem] bg-white text-slate-950 flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                    <ArrowRight size={32} />
                  </div>
                </div>
              </div>
              <div className="p-12 flex-1">
                 <p className="text-slate-400 text-xl leading-relaxed line-clamp-2 font-medium">{project.description}</p>
                 <div className="mt-8 flex items-center text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-brand-400 transition-colors">
                   View Project Details <ChevronRight size={14} className="ml-2" />
                 </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-32 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <SectionHeader count="04" title="Work Experience" subtitle="A track record of leadership and technical excellence across top firms." />
      
      <div className="space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="inline-block text-brand-500 font-black text-sm uppercase tracking-[0.3em] mb-3 px-4 py-1.5 rounded-full bg-brand-500/5 border border-brand-500/10">{exp.period}</span>
                <h4 className="text-4xl font-black text-white tracking-tighter leading-none">{exp.role}</h4>
              </div>
              <div className="lg:col-span-8 p-12 md:p-16 rounded-[4rem] bg-slate-950 border border-white/5 group-hover:bg-slate-900/80 group-hover:border-brand-500/30 transition-all duration-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Globe size={180} />
                </div>
                <h3 className="text-3xl font-black text-brand-400 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-brand-500 rounded-full mr-4"></span> {exp.company}
                </h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">{exp.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-4 text-slate-400 text-sm leading-relaxed">
                      <div className="mt-1.5 w-3 h-3 rounded-full bg-brand-600 shrink-0 shadow-[0_0_10px_rgba(14,165,233,0.4)]"></div>
                      <span className="font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[4rem] border border-white/5 p-12 md:p-20 lg:p-24 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none scale-150">
            <Mail size={400} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <span className="text-brand-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Contact</span>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter">Let's craft the <br />future.</h2>
              <p className="text-2xl text-slate-400 mb-16 leading-tight font-medium">I'm currently based in {SOCIAL_LINKS.location} and open to senior architectural roles.</p>
              
              <div className="space-y-8">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-xl">
                    <Mail size={28} />
                  </div>
                  <span className="text-2xl font-black text-white group-hover:text-brand-400 transition-colors tracking-tighter">{SOCIAL_LINKS.email}</span>
                </a>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xl">
                    <Phone size={28} />
                  </div>
                  <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tighter">{SOCIAL_LINKS.phone}</span>
                </a>
                <a href={SOCIAL_LINKS.linkedin} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                    <Linkedin size={28} />
                  </div>
                    <span className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tighter">Dilip Kumar</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950/80 p-12 md:p-16 rounded-[3.5rem] border border-white/10 shadow-3xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-700">
                  <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-10 shadow-2xl shadow-emerald-500/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Success!</h3>
                  <p className="text-slate-400 text-lg">Your signal has been received. I'll get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-12 text-brand-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">Send another message</button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Full Name</label>
                    <input required type="text" className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-bold text-lg" placeholder="Dilip Kumar" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Communication Path</label>
                    <input required type="email" className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-bold text-lg" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Project Narrative</label>
                    <textarea required rows={4} className="w-full bg-slate-900 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all font-bold text-lg resize-none" placeholder="How can we build together?"></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full py-6 bg-brand-600 hover:bg-brand-500 text-white font-black uppercase tracking-[0.2em] rounded-[2rem] transition-all shadow-2xl shadow-brand-600/40 flex items-center justify-center space-x-3 disabled:opacity-50 text-sm active:scale-95"
                  >
                    {loading ? (
                      <div className="w-7 h-7 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-32 pb-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 space-y-16 lg:space-y-0">
        <div className="max-w-md">
          <a href="#" className="text-5xl font-black text-white mb-6 block tracking-tighter">DILIP.</a>
          <p className="text-slate-500 font-medium text-xl leading-snug">Architecting high-performance digital experiences with over a decade of product and mobile engineering leadership.</p>
        </div>
        <div className="flex space-x-8">
          <a href={SOCIAL_LINKS.github} className="text-slate-500 hover:text-white transition-all p-5 rounded-[1.5rem] bg-slate-900 border border-white/5 hover:border-brand-500/50 shadow-xl"><Github size={32} /></a>
          <a href={SOCIAL_LINKS.linkedin} className="text-slate-500 hover:text-white transition-all p-5 rounded-[1.5rem] bg-slate-900 border border-white/5 hover:border-brand-500/50 shadow-xl"><Linkedin size={32} /></a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-500 hover:text-white transition-all p-5 rounded-[1.5rem] bg-slate-900 border border-white/5 hover:border-brand-500/50 shadow-xl"><Mail size={32} /></a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-y border-white/5">
         <div>
           <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Explore</h4>
           <ul className="space-y-5 text-slate-500 font-bold text-sm uppercase tracking-widest">
             <li><a href="#about" className="hover:text-brand-400 transition-colors">Profile</a></li>
             <li><a href="#projects" className="hover:text-brand-400 transition-colors">Work</a></li>
             <li><a href="#skills" className="hover:text-brand-400 transition-colors">Skills</a></li>
           </ul>
         </div>
         <div>
           <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Technical</h4>
           <ul className="space-y-5 text-slate-500 font-bold text-sm uppercase tracking-widest">
             <li>Kotlin / Compose</li>
             <li>MVVM / Clean Arch</li>
             <li>IoT / Telematics</li>
             <li>CI/CD & Testing</li>
           </ul>
         </div>
         <div className="col-span-2">
           <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.3em]">Direct Contact</h4>
           <p className="text-slate-500 mb-8 text-lg font-medium leading-relaxed max-w-sm">{SOCIAL_LINKS.phone}<br/>{SOCIAL_LINKS.email}</p>
           <a href={SOCIAL_LINKS.linkedin} className="inline-flex items-center space-x-3 text-brand-500 font-black uppercase tracking-widest text-xs group">
             <span>View LinkedIn Profile</span> <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </a>
         </div>
      </div>

      <div className="pt-20 flex flex-col md:flex-row justify-between items-center text-slate-700 text-[10px] font-black uppercase tracking-[0.4em]">
        <p>&copy; {new Date().getFullYear()} DILIP KUMAR PORTFOLIO</p>
        <p className="mt-6 md:mt-0 flex items-center">
          ENGINEERED WITH PRECISION <span className="text-brand-500 mx-3">•</span> NEW DELHI, INDIA
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-brand-500/30 text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AIConsultant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
