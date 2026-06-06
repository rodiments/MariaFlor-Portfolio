import { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/search/top?q=maria%20flor%20besinan', icon: '👤' },
    { name: 'LinkedIn', href: '#', icon: '🔗' },
    { name: 'GitHub', href: '#', icon: '📁' },
  ]

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <div className="space-y-16 text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                Open for <span className="italic underline underline-offset-8 decoration-white/20">Talks.</span>
              </h2>
              <p className="text-white text-2xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Whether you have a specific inquiry or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 max-w-xl mx-auto lg:mx-0">
              <div className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-aurora-500/20 transition-all">
                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-aurora-400 mb-4">Direct Email</p>
                <p className="text-xl font-black text-white hover:text-aurora-400 transition-colors cursor-pointer break-all">besinan.mariaflor@dnsc.edu.ph</p>
              </div>
              <div className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-mint-400/20 transition-all">
                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-mint-400 mb-4">Facebook</p>
                <p className="text-xl font-black text-white hover:text-mint-400 transition-colors cursor-pointer">Maria Flor Besinan</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-8">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center text-3xl hover:bg-aurora-600 hover:text-white hover:-translate-y-3 transition-all duration-500 border-white/10 shadow-xl"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-aurora-600/10 blur-[150px] -z-10"></div>
            <div className="glass-card p-12 md:p-16 rounded-[4rem] border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white ml-4">Full Identity</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      required
                      className="w-full px-10 py-6 bg-midnight-900 border border-white/5 rounded-3xl focus:outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-500/10 transition-all text-white placeholder:text-slate-700 font-bold"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white ml-4">Digital Mail</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      required
                      className="w-full px-10 py-6 bg-midnight-900 border border-white/5 rounded-3xl focus:outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-500/10 transition-all text-white placeholder:text-slate-700 font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white ml-4">Subject of Inquiry</label>
                  <input 
                    type="text" 
                    placeholder="Project Proposal" 
                    required
                    className="w-full px-10 py-6 bg-midnight-900 border border-white/5 rounded-3xl focus:outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-500/10 transition-all text-white placeholder:text-slate-700 font-bold"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white ml-4">Detailed Message</label>
                  <textarea 
                    placeholder="Briefly describe your requirements..." 
                    rows={4}
                    required
                    className="w-full px-10 py-6 bg-midnight-900 border border-white/5 rounded-3xl focus:outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-500/10 transition-all text-white placeholder:text-slate-700 font-bold resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full group relative bg-aurora-600 hover:bg-aurora-500 text-white font-black py-7 rounded-3xl transition-all shadow-2xl shadow-aurora-600/30 active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.4em]">
                    {submitted ? '✓ Transmission Successful' : 'Send Message'}
                    {!submitted && (
                      <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
