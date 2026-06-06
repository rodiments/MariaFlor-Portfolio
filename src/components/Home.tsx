import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const observerRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    observerRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const featuredWorks = [
    {
      title: "Pregnancy Monitoring System",
      description: "A specialized healthcare system designed to monitor and track pregnancy progress with vital scheduling.",
      tags: ["System Development", "Healthcare", "4th Year"],
      image: "/images/4th year/Pregnancy System/6.jfif"
    },
    {
      title: "Technopreneurship Project",
      description: "Technical prototype and business strategy developed for market-ready tech solutions.",
      tags: ["Business", "UI/UX", "3rd Year"],
      image: "/images/3rd year/technopreneurship/1.jfif"
    },
    {
      title: "Full-Stack Capstone",
      description: "Advanced web application showcasing deep integration and design excellence.",
      tags: ["Full Stack", "Design", "Final Year"],
      image: "/images/4th year/1.jfif"
    }
  ]

  const skills = [
    { name: "Photo Editing" },
    { name: "Video Editing" },
    { name: "PHP" },
    { name: "Java" },
    { name: "MySQL" },
    { name: "React" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">Maria Flor</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
                I'm passionate about designing websites that are not only beautiful and functional, but also create meaningful user experiences. Let's build something amazing together.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Link 
                to="/projects" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-all inline-block shadow-lg hover:shadow-emerald-500/50"
              >
                Explore My Work
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600/10 px-8 py-3 rounded-full font-medium transition-all inline-block"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl shadow-emerald-500/30 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src="/images/Maria.jpg" 
                  alt="Maria Flor" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Tools and technologies I specialize in</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => { observerRefs.current[index + 3] = el }}
                className="scroll-scale-in px-8 py-3 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 border border-emerald-500/50 rounded-full text-gray-100 font-medium hover:border-emerald-400 hover:bg-emerald-500/30 transition-all duration-300 cursor-default w-full md:w-auto text-center"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-amber-500 to-emerald-600 bg-clip-text text-transparent">Featured Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Showcase of my best projects combining design and functionality</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <div 
                key={index}
                ref={(el) => { observerRefs.current[index] = el }}
                className="scroll-fade-in group bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-emerald-300 transition-colors">{work.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{work.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
