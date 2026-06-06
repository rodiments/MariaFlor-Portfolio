import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-only solid background or Desktop glass/transparent background */}
        <div className={`rounded-2xl px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          isOpen 
            ? 'bg-black border-white/20' 
            : 'bg-black md:bg-transparent md:glass shadow-2xl md:shadow-none border-white/10 md:border-transparent'
        } ${scrolled && !isOpen ? 'md:glass md:shadow-aurora-900/20 md:border-white/10' : ''}`}>
          <Link to="/" className="flex-shrink-0 font-black text-2xl tracking-tighter text-white hover:opacity-80 transition-opacity">
            MF.
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`px-1 py-2 transition-all text-xs font-black tracking-[0.2em] relative group uppercase ${
                    location.pathname === link.path ? 'text-aurora-400' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-aurora-500 transition-all ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-aurora-400 p-2 bg-midnight-900/50 rounded-xl border border-white/10"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`md:hidden absolute top-20 left-4 right-4 bg-black rounded-3xl p-6 transition-all duration-300 origin-top border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,1)] ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 transition-all rounded-2xl font-black uppercase tracking-widest flex items-center justify-between ${
                  location.pathname === link.path ? 'bg-aurora-600 text-white' : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{link.name}</span>
                {location.pathname === link.path && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
