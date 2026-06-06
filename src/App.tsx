import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-white font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-emerald-800/30 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 mb-2">© {new Date().getFullYear()} Maria Flor. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Designed & Built with passion | Web Designer & Developer</p>
        </div>
      </footer>
    </div>
  )
}

export default App
