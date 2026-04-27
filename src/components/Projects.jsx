import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-16 tracking-tight uppercase">Featured Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mufama - Professional Highlight (Large) */}
        <div className="md:col-span-2 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Professional Highlight</span>
            <div className="flex gap-2">
              <a href="https://www.mufama.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-on-surface-variant hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
          
          <h3 className="text-5xl font-black mb-6 group-hover:tracking-tight transition-all">Mufama</h3>
          <p className="text-on-surface-variant max-w-md text-lg mb-10 leading-relaxed">
            A high-performance e-commerce platform delivering seamless shopping experiences across Web, iOS, and Android.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {['REACTJS', 'REACT NATIVE', 'SPRING BOOT', 'FCM', 'MYSQL'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-outline-variant flex items-center gap-8">
             <a href="https://play.google.com/store/apps/details?id=com.cloudsmaya.mufamaprod&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">Play Store</a>
             <a href="https://apps.apple.com/in/app/mufama/id6741683279" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">App Store</a>
          </div>
        </div>

        {/* Investmaya - Professional Work (Small) */}
        <div className="md:col-span-1 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative">
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Professional Work</span>
            <div className="flex gap-2">
              <a href="https://www.investmaya.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-on-surface-variant hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
          <h3 className="text-4xl font-black mb-6 group-hover:tracking-tight transition-all">Investmaya</h3>
          <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">
            A secure and scalable FinTech platform for managing investments with Web and Mobile solutions.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['REACTJS', 'SPRING BOOT', 'MYSQL'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-wrap gap-4">
             <a href="https://play.google.com/store/apps/details?id=com.cloudsmaya2.investmayaprod&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">Play Store</a>
             <a href="https://apps.apple.com/in/app/investmaya/id6749132257" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">App Store</a>
          </div>
        </div>

        {/* Turfmaya - Professional Work (Small) */}
        <div className="md:col-span-1 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative">
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Professional Work</span>
            <div className="flex gap-2">
              <a href="https://turfmaya.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-on-surface-variant hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
          <h3 className="text-4xl font-black mb-6 group-hover:tracking-tight transition-all">Turfmaya</h3>
          <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">
            Advanced turf booking and management platform with high-performance mobile and web interfaces.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['REACTJS', 'TAILWIND', 'SPRING BOOT', 'MYSQL'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-wrap gap-4">
             <a href="https://play.google.com/store/apps/details?id=com.cloudsmaya012.turfmayaprod&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">Play Store</a>
             <a href="https://apps.apple.com/in/app/mufama/id6741683279" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">App Store</a>
          </div>
        </div>

        {/* Servemaya - Professional Work (Small) */}
        <div className="md:col-span-1 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative">
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Professional Work</span>
            <div className="flex gap-2">
              <a href="https://servemaya.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-on-surface-variant hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
          <h3 className="text-4xl font-black mb-6 group-hover:tracking-tight transition-all">Servemaya</h3>
          <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">
            A ServiceNow-inspired enterprise platform for automated workflows and service management.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['REACTJS', 'SPRING BOOT', 'FCM', 'REACT NATIVE'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-wrap gap-4">
             <a href="https://play.google.com/store/apps/details?id=com.cloudsmaya8.servemayaprod&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">Play Store</a>
             <a href="https://apps.apple.com/in/app/servemaya/id6741852599" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">App Store</a>
          </div>
        </div>

        {/* Wiyral - Professional News Explorer (Small) */}
        <div className="md:col-span-1 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative">
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Professional Work</span>
            <div className="flex gap-2">
              <a href="https://wiyral.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-on-surface-variant hover:text-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            </div>
          </div>
          <h3 className="text-4xl font-black mb-6 group-hover:tracking-tight transition-all">Wiyral</h3>
          <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">
            A dynamic news explorer platform delivering real-time updates and curated content across all devices.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {['REACTJS', 'SPRING BOOT', 'MYSQL', 'BOOTSTRAP'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant flex flex-wrap gap-4">
             <a href="https://play.google.com/store/apps/details?id=com.cloudsmaya1.wiyralprod&hl=en_IN" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">Play Store</a>
             <a href="https://apps.apple.com/in/app/wiyral/id6749221747" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-widest text-primary hover:underline uppercase">App Store</a>
          </div>
        </div>

        {/* EduRider - Personal Highlight (Large/Full) */}
        <div className="md:col-span-3 bg-surface-low rounded-3xl p-6 md:p-10 border border-outline-variant group hover:border-primary/50 transition-all relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-on-surface-variant opacity-60">Featured Personal Project</span>
            <div className="p-3 rounded-xl bg-surface-highest border border-outline-variant text-on-surface-variant group-hover:text-primary transition-colors">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
          </div>
          <h3 className="text-5xl font-black mb-6 group-hover:tracking-tight transition-all">EduRider</h3>
          <p className="text-on-surface-variant max-w-2xl text-lg mb-10 leading-relaxed">
            A comprehensive student guidance platform modeling complex education journeys with dynamic college-course relationship mapping and a full-featured administrative control center.
          </p>
          <div className="flex flex-wrap gap-2">
            {['REACTJS', 'SPRING BOOT', 'MYSQL', 'TAILWIND', 'JPA/HIBERNATE'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-[4px] bg-primary/5 text-primary text-[9px] font-black tracking-[0.15em] border border-primary/30 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
