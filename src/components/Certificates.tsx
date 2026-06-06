const Certificates = () => {
  const certificates = [
    {
      name: "Google UX Design Professional",
      issuer: "Coursera",
      date: "2023",
      icon: "🎓",
      image: "/images/Certificates/1.jfif"
    },
    {
      name: "Advanced Web Development",
      issuer: "Interaction Design",
      date: "2022",
      icon: "🚀",
      image: "/images/Certificates/2.jfif"
    },
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2021",
      icon: "📱",
      image: "/images/Certificates/3.jfif"
    },
    {
      name: "UI/UX Advanced Certification",
      issuer: "Design Institute",
      date: "2023",
      icon: "✨",
      image: "/images/Certificates/4.jfif"
    },
    {
      name: "Professional Portfolio Design",
      issuer: "Web Masters",
      date: "2023",
      icon: "🎨",
      image: "/images/Certificates/5.jfif"
    }
  ]

  return (
    <section id="certificates" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Credentials & <span className="italic underline underline-offset-8 decoration-white/20">Merits</span>
          </h2>
          <p className="text-white text-lg font-medium max-w-2xl mx-auto leading-relaxed">Official validations of my expertise and dedication to professional excellence.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {certificates.map((cert, index) => (
            <div key={index} className="group glass-card p-8 rounded-[3rem] border-white/5 hover:border-aurora-500/30 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-aurora-600/10 flex flex-col">
              <div className="relative h-48 mb-8 overflow-hidden rounded-2xl bg-midnight-900 border border-white/5">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-aurora-600/20 to-mint-500/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-md border border-white/10">
                  {cert.icon}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-midnight-900/80 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black tracking-[0.2em] uppercase text-aurora-400">
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-aurora-400 transition-colors leading-tight">{cert.name}</h3>
              <p className="text-mint-400 font-black text-[10px] uppercase tracking-widest mb-8">{cert.issuer}</p>
              
              <div className="mt-auto">
                <button className="w-full py-4 rounded-xl border border-white/5 bg-midnight-800 hover:bg-aurora-600 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-2xl">
                  Verify Achievement
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
