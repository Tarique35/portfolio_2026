import React from 'react';

const Expertise = () => {
  const expertise = [
    {
      title: "Web Frontend",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      ),
      skills: [
        { name: "ReactJS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Bootstrap", level: "Advanced" }
      ]
    },
    {
      title: "Backend Engine",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      ),
      skills: [
        { name: "Spring Boot", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "JPA / Hibernate", level: "Core" },
        { name: "Java", level: "Advanced" }
      ]
    },
    {
      title: "Mobile Development",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      ),
      skills: [
        { name: "React Native", level: "Expert" },
        { name: "Expo Ecosystem", level: "Expert" },
        { name: "App Publishing", level: "Live" },
        { name: "Mobile UI/UX", level: "High" }
      ]
    },
    {
      title: "Dev Ecosystem",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      skills: [
        { name: "RESTful APIs", level: "Expert" },
        { name: "Firebase FCM", level: "Expert" },
        { name: "OTP / Security", level: "Core" },
        { name: "Git / Versioning", level: "Fluent" }
      ]
    }
  ];

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-end mb-16">
        <h2 className="text-4xl font-black tracking-tight uppercase">Core Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertise.map((area, idx) => (
          <div key={idx} className="bg-surface-low rounded-2xl p-6 border border-outline-variant hover:bg-surface-highest transition-colors group">
            <div className="p-3 rounded-lg bg-surface-highest inline-block mb-6 border border-outline-variant text-primary group-hover:scale-110 transition-transform">
              {area.icon}
            </div>
            <h3 className="text-xl font-black mb-8 uppercase tracking-widest">{area.title}</h3>
            <div className="space-y-4">
              {area.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex justify-between items-center group/skill">
                  <span className="text-sm font-bold text-on-surface-variant group-hover/skill:text-on-surface transition-colors">{skill.name}</span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-primary opacity-80">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
