import React from 'react';

const Experience = () => {
  const calculateDetailedExperience = () => {
    const startDate = new Date('2023-12-19');
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }

    const yearStr = years > 0 ? `${years} Year${years > 1 ? 's' : ''}` : '';
    const monthStr = months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : '';
    
    return [yearStr, monthStr].filter(Boolean).join(' ');
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Work History */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-surface-highest border border-outline-variant text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Work History</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-surface-highest border-4 border-surface border-outline-variant group-hover:border-primary transition-colors"></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">Dec 2023 — Present</span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-black uppercase tracking-tighter border border-primary/20">
                  {calculateDetailedExperience()}
                </span>
              </div>
              <h3 className="text-xl font-black mb-1">Senior Developer</h3>
              <p className="text-on-surface-variant font-bold text-sm mb-4">Cloudsmaya Services Private Limited</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Leading the development of high-performance enterprise solutions including <span className="text-on-surface">Mufama</span>, <span className="text-on-surface">Investmaya</span>, and <span className="text-on-surface">Servemaya</span>. 
                Specialized in building scalable full-stack architectures using ReactJS, Spring Boot, and React Native with integrated Push Notifications and secure OTP authentication.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none grayscale">
             <svg width="128" height="128" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path><path d="M19 13.5V15c0 1.66-3.13 3-7 3s-7-1.34-7-3v-1.5c1.6 1.1 4.15 1.5 7 1.5s5.4-.4 7-1.5z"></path></svg>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-surface-highest border border-outline-variant text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">Education</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant">
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-surface-highest border-4 border-surface border-outline-variant group-hover:border-primary transition-colors"></div>
              <span className="text-[10px] font-black tracking-widest text-primary uppercase mb-2 block">Bachelor of Engineering</span>
              <h3 className="text-xl font-black mb-1">Computer Engineering</h3>
              <p className="text-on-surface-variant font-bold text-sm mb-4">SKN Sinhgad Institute of Technology & Science (SPPU)</p>
              <div className="inline-flex flex-col gap-1 p-4 rounded-xl bg-surface-low border border-outline-variant">
                 <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Aggregate Score</span>
                 <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-primary">8.91</span>
                    <span className="text-sm font-bold text-on-surface-variant">CGPA (81.6%)</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
