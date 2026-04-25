import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-surface border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Footer */}
        <div className="text-2xl font-black tracking-tighter text-on-surface mb-8">
          TARIQUE.DEV
        </div>
        
        <div className="flex gap-8 mb-16">
          <a href="https://github.com/Tarique35" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/tariqueansari35/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">LinkedIn</a>
          <a href="mailto:ansaritarique35@gmail.com" className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">Email</a>
        </div>
        
        <p className="text-[10px] font-black tracking-[0.2em] text-on-surface-variant opacity-40 uppercase">
          © 2024 Mohammad Tarique Ansari. Engineered for excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
