import { useState } from 'react'

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  screenshots?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Pregnancy Monitoring System",
      category: "4th Year - System Development",
      image: "/images/4th year/Pregnancy System/6.jfif",
      description: "A specialized healthcare system designed to monitor and track pregnancy progress, providing vital information and scheduling for expectant mothers.",
      screenshots: [
        "/images/4th year/Pregnancy System/1.jfif",
        "/images/4th year/Pregnancy System/2.jfif",
        "/images/4th year/Pregnancy System/3.jfif",
        "/images/4th year/Pregnancy System/4.jfif",
        "/images/4th year/Pregnancy System/5.jfif",
        "/images/4th year/Pregnancy System/6.jfif"
      ]
    },
    {
      title: "Technopreneurship Venture",
      category: "3rd Year - Business & Tech",
      image: "/images/3rd year/technopreneurship/1.jfif",
      description: "A comprehensive business plan and technical prototype developed during my 3rd year, focusing on market-ready technology solutions.",
      screenshots: [
        "/images/3rd year/technopreneurship/1.jfif",
        "/images/3rd year/technopreneurship/2.jfif"
      ]
    },
    {
      title: "Full-Stack Capstone",
      category: "4th Year - Capstone",
      image: "/images/4th year/1.jfif",
      description: "A comprehensive solution developed during my final year, showcasing advanced integration and design principles.",
      screenshots: [
        "/images/4th year/1.jfif",
        "/images/4th year/2.jfif"
      ]
    },
    {
      title: "Academic Research Platform",
      category: "UI/UX Design",
      image: "/images/4th year/2.jfif",
      description: "Focused on user-centric design for academic environments, bridging the gap between complexity and usability.",
      screenshots: [
        "/images/4th year/2.jfif"
      ]
    }
  ]

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-midnight-950/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Academic <span className="italic underline underline-offset-8 decoration-white/20">Portfolio</span>
          </h2>
          <p className="text-white text-lg font-medium max-w-2xl mx-auto leading-relaxed">A detailed showcase of my technical evolution from 3rd year to my final year systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group relative glass-card p-4 rounded-[3.5rem] border-white/5 hover:border-aurora-500/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-[3rem] bg-midnight-900 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="px-4 py-1 bg-aurora-600 w-fit rounded-full text-[8px] font-black tracking-[0.2em] uppercase text-white mb-6">
                    {project.category}
                  </div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-4">{project.title}</h3>
                  <p className="text-white/60 text-lg font-medium max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-midnight-950/90 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-6xl max-h-[90vh] glass-card rounded-[3rem] border-white/10 overflow-hidden flex flex-col">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-aurora-600 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div>
                    <div className="px-4 py-1 bg-aurora-600 w-fit rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-white mb-6">
                      {selectedProject.category}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.screenshots && (
                    <div className="grid grid-cols-2 gap-4 pt-8">
                      {selectedProject.screenshots.map((ss, idx) => (
                        <div key={idx} className="aspect-video rounded-2xl overflow-hidden border border-white/5 group/ss">
                          <img 
                            src={ss} 
                            alt={`Screenshot ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform group-hover/ss:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-midnight-900 shadow-2xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
