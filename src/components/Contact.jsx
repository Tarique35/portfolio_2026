import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_jss7fyf',
      'template_61flv6s',
      form.current,
      'DRM3-ZDqKgmTM_TrP'
    )
      .then((result) => {
        setStatus('SUCCESS');
        setLoading(false);
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('ERROR');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-surface-low rounded-[2rem] p-8 md:p-16 border border-outline-variant relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -z-10"></div>

        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-none">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-md leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and technical challenges.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-surface-highest border border-outline-variant text-primary group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Email Me</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ansaritarique35@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-primary transition-colors"
                >
                  ansaritarique35@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-surface-highest border border-outline-variant text-primary group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Location</p>
                <p className="text-lg font-bold">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface-highest border border-outline-variant rounded-2xl p-4 text-on-surface focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-surface-highest border border-outline-variant rounded-2xl p-4 text-on-surface focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant ml-2">Message</label>
              <textarea
                name="message"
                required
                placeholder="How can I help you?"
                rows="5"
                className="w-full bg-surface-highest border border-outline-variant rounded-2xl p-4 text-on-surface focus:border-primary focus:outline-none transition-colors placeholder:text-on-surface-variant/30 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group
                ${loading ? 'bg-surface-highest text-on-surface-variant cursor-not-allowed' : 'bg-primary text-surface hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && (
                <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              )}
            </button>

            {status === 'SUCCESS' && (
              <p className="text-center text-primary font-bold text-sm animate-fade-in">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'ERROR' && (
              <p className="text-center text-red-500 font-bold text-sm">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
