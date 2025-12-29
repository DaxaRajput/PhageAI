import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Predictor from "./pages/Predictor"
import Education from "./pages/Education"
import CaseStudies from "./pages/CaseStudies"
import Research from "./pages/Research"
import About from "./pages/About"
import Author from "./pages/Author"
import FAQ from "./pages/FAQ"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Docs from "./pages/Docs"

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return null
}

function Footer() {
  return (
    <footer className="mt-auto bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <p>
          © {new Date().getFullYear()} PhageAI — AI‑assisted bacteriophage research
        </p>
        <p className="text-gray-500">
          Built for research, education, and responsible scientific exploration
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/education" element={<Education />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
