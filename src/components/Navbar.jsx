import React from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-surface/80 backdrop-blur-md border-b border-outline-variant">
      <div className="text-xl font-black tracking-tighter text-on-surface">
        TARIQUE.DEV
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-xs font-bold tracking-widest hover:text-primary transition-colors uppercase">Home</a>
        <a href="#expertise" className="text-xs font-bold tracking-widest hover:text-primary transition-colors uppercase">Expertise</a>
        <a href="#experience" className="text-xs font-bold tracking-widest hover:text-primary transition-colors uppercase">Experience</a>
        <a href="#contact" className="text-xs font-bold tracking-widest hover:text-primary transition-colors uppercase">Contact</a>
        
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-surface-highest border border-outline-variant hover:bg-primary/10 hover:border-primary/50 transition-all group"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="text-primary group-hover:rotate-12 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg className="text-primary group-hover:-rotate-12 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
