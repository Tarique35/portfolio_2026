import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* CTA Area */}
        <div className="bg-surface-low rounded-[40px] p-12 md:p-24 w-full border border-outline-variant mb-32 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Ready to Build <br />
              <span className="text-primary">Something Great?</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-lg mb-12 font-medium">
              I'm always open to discussing high-impact projects, collaborations, or technical challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 rounded-xl bg-primary text-surface font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(109,221,255,0.2)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Get In Touch
              </button>
              <button className="p-4 rounded-xl bg-surface-highest border border-outline-variant hover:bg-surface-highest/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
              <button className="p-4 rounded-xl bg-surface-highest border border-outline-variant hover:bg-surface-highest/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="text-2xl font-black tracking-tighter text-on-surface mb-8">
          TARIQUE.DEV
        </div>
        
        <div className="flex gap-8 mb-16">
          <a href="#" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">Email</a>
        </div>
        
        <p className="text-[10px] font-black tracking-[0.2em] text-on-surface-variant opacity-40 uppercase">
          © 2024 Mohammad Tarique Ansari. Engineered for excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
