import React from 'react';

const Hero = () => {
  const calculateExperience = () => {
    const startDate = new Date('2023-12-19');
    const today = new Date();
    const totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    
    if (years >= 1) {
      return `${years}+ Years`;
    }
    return `${totalMonths}+ Months`;
  };

  return (
    <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highest border border-outline-variant mb-8">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="text-[10px] font-bold tracking-widest uppercase">Open for opportunities</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
        Hi, I'm <br />
        <span className="text-on-surface">Mohammad</span> <br />
        <span className="text-primary">Tarique Ansari</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
        Full Stack Developer <span className="text-primary">•</span> Mobile App Developer <span className="text-primary">•</span> UX Enthusiast
      </h2>

      <p className="text-on-surface-variant max-w-2xl text-lg mb-12 leading-relaxed">
        Senior Developer with {calculateExperience()} of experience building scalable web and cross-platform mobile solutions.
        Specialist in <span className="text-on-surface font-semibold">ReactJS, Spring Boot, and React Native (Expo)</span>.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 rounded-lg bg-primary text-surface font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 group">
          View Projects
          <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <button className="px-8 py-4 rounded-lg bg-surface-highest border border-outline-variant font-bold uppercase tracking-widest hover:bg-surface-highest/80 transition-colors">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
