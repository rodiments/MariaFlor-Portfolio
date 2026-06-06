const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Design Studio",
      period: "2023 - Present",
      description: "Leading the design direction for multiple high-traffic web applications. Established a comprehensive design system that reduced development time by 30%.",
      icon: "🎨"
    },
    {
      title: "Junior Web Designer",
      company: "Creative Agency",
      period: "2021 - 2023",
      description: "Collaborated with cross-functional teams to deliver 20+ responsive websites. Mastered modern CSS frameworks and design-to-code workflows.",
      icon: "💻"
    }
  ]

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Professional <span className="italic underline underline-offset-8 decoration-white/20">Journey</span>
          </h2>
          <p className="text-white text-lg font-medium leading-relaxed max-w-2xl mx-auto">A roadmap of my career growth and contributions to the digital landscape.</p>
        </div>

        <div className="relative space-y-24 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-aurora-500/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-midnight-950 bg-midnight-800 text-white shadow-2xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all group-hover:bg-aurora-600 z-10 group-hover:scale-110">
                <span className="text-xl group-hover:rotate-12 transition-transform">{exp.icon}</span>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] glass-card p-10 md:p-14 rounded-[4rem] border-white/5 hover:border-aurora-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-aurora-600/10">
                <div className="flex flex-col mb-8">
                  <time className="text-[10px] font-black tracking-[0.4em] uppercase text-aurora-400 mb-4">{exp.period}</time>
                  <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-aurora-400 transition-colors">{exp.title}</h3>
                  <p className="text-mint-400 font-black text-sm uppercase tracking-widest mt-2">{exp.company}</p>
                </div>
                <p className="text-white text-base leading-relaxed font-medium">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
