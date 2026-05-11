'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronRight, Zap, ArrowUpRight, Search, Layout, Settings } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/portfolio';

const featuredProjects = projects;

const processes = [
  { step: '01', title: 'Audit & Analysis', desc: 'We dive deep into your technical stack to identify the high-ROI automation opportunities.', icon: Search },
  { step: '02', title: 'Neural Architecture', desc: 'Our engineers design a bespoke AI framework tailored to your specific business logic.', icon: Layout },
  { step: '03', title: 'Agile Deployment', desc: 'Rapid, iterative deployment of production-ready agents into your existing ecosystem.', icon: Zap },
  { step: '04', title: 'Optimization Loop', desc: 'Continuous fine-tuning and scaling to ensure your agents adapt to evolving data.', icon: Settings },
];

export function WorkContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollTime = useRef(0);

  const nextProject = () => {
    if (currentIndexRef.current < featuredProjects.length - 1) {
      currentIndexRef.current += 1;
      setCurrentIndex(currentIndexRef.current);
      return true;
    }
    return false;
  };

  const prevProject = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current -= 1;
      setCurrentIndex(currentIndexRef.current);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 700) {
        // Still prevent default if we are within the throttle period to keep user pinned
        if ((e.deltaY > 0 && currentIndexRef.current < featuredProjects.length - 1) || 
            (e.deltaY < 0 && currentIndexRef.current > 0)) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        if (nextProject()) {
          e.preventDefault();
          lastScrollTime.current = now;
        }
      } else if (e.deltaY < 0) {
        if (prevProject()) {
          e.preventDefault();
          lastScrollTime.current = now;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isHovered]);

  const project = featuredProjects[currentIndex];

  return (
    <div className="bg-black text-white relative">
      {/* Pinned Projects Showcase - Controlled by Hover/Wheel */}
      <div 
        ref={containerRef} 
        className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-32"
      >
        {/* Dynamic Centered Heading - Flow-based for zoom stability */}
        <div className="w-full px-6 mb-16">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-3 animate-fade-in">
              <div className="w-12 h-[1px] bg-primary"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Case Studies</p>
              <div className="w-12 h-[1px] bg-primary"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter animate-fade-in">OUR WORK.</h2>
          </div>
        </div>

        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-7xl mx-auto w-full px-6 flex items-center justify-center"
        >
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group max-w-6xl w-full bg-white/[0.02] border border-white/20 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 backdrop-blur-sm relative transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)] hover:scale-[1.01]"
          >
            <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="w-full lg:w-[45%] aspect-[16/10] rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative">
               {project.image ? (
                 <>
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                 </>
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 flex items-center justify-center">
                    <div className="text-center space-y-4 relative z-10">
                      <Zap className="w-16 h-16 text-primary group-hover:scale-125 transition-transform duration-700" />
                    </div>
                 </div>
               )}
               
               <div className="absolute bottom-6 left-8 flex flex-col z-20">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">{project.category}</p>
                 <div className="w-10 h-[1px] bg-primary group-hover:w-20 transition-all duration-500"></div>
               </div>
               <div className="scanline"></div>
            </div>

            <div className="w-full lg:w-[55%] space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white/60 transition-colors">{project.id} of 12</span>
                  <div className="flex gap-1.5">
                     {featuredProjects.map((_: any, i: number) => (
                       <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]' : 'bg-white/20 hover:bg-white/40'}`}></div>
                     ))}
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">{project.title}</h3>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest group-hover:scale-105 origin-left transition-transform duration-500">{project.industry}</p>
              </div>

              <p className="text-lg text-white/60 font-medium leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-500">
                {project.description}
              </p>

              <div className="space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Key Achievement</p>
                <div className="p-5 bg-white/5 border-l-4 border-primary rounded-r-2xl group-hover:bg-primary/5 transition-colors duration-500">
                  <p className="text-sm font-bold text-white/70 italic leading-relaxed group-hover:text-white transition-colors">&quot;{project.impact}&quot;</p>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-white/40 hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-10">
                  <Link 
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-black bg-blue-500 px-8 py-4 rounded-xl hover:bg-blue-400 hover:scale-105 transition-all duration-300 group/case shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4 group-hover/case:-translate-y-1 group-hover/case:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 border border-white/10 px-8 py-4 rounded-xl hover:bg-white/5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 group/link"
                  >
                    Launch System <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Interaction Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-20 group-hover:opacity-100 transition-opacity">
               <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
               <span className="text-[8px] font-black uppercase tracking-[0.4em]">Scroll to see next project</span>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
