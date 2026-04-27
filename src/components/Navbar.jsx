import React, { useState, useEffect } from 'react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
    { name: 'Expertise', href: '#expertise', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
    { name: 'Experience', href: '#experience', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
    { name: 'Projects', href: '#projects', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 bg-surface/95 backdrop-blur-xl border-b border-outline-variant' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter text-on-surface">
          TARIQUE<span className="text-primary">.</span>DEV
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-outline-variant/30">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface-highest border border-outline-variant hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-primary text-surface text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface-highest border border-outline-variant text-primary"
          >
            {isDark ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-primary text-surface transition-transform active:scale-90"
          >
            {isMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`absolute top-full left-0 w-full bg-surface/98 backdrop-blur-2xl border-b border-outline-variant transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface-low border border-outline-variant hover:border-primary transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-surface-highest text-primary group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="text-sm font-black tracking-[0.2em] uppercase">{link.name}</span>
              <svg className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 w-full py-5 rounded-2xl bg-primary text-surface text-center text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
