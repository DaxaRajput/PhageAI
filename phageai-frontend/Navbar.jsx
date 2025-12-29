import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded text-sm font-medium transition ${
      isActive
        ? "text-green-400"
        : "text-gray-300 hover:text-white"
    }`

  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-green-400">
          PhageAI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/predictor" className={linkClass}>
            Predictor
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            Education
          </NavLink>
          <NavLink to="/case-studies" className={linkClass}>
            Case Studies
          </NavLink>
          <NavLink to="/research" className={linkClass}>
            Research
          </NavLink>
          <NavLink to="/docs" className={linkClass}>
            Docs
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-2">
          <NavLink to="/predictor" className={linkClass} onClick={() => setOpen(false)}>
            Predictor
          </NavLink>
          <NavLink to="/education" className={linkClass} onClick={() => setOpen(false)}>
            Education
          </NavLink>
          <NavLink to="/case-studies" className={linkClass} onClick={() => setOpen(false)}>
            Case Studies
          </NavLink>
          <NavLink to="/research" className={linkClass} onClick={() => setOpen(false)}>
            Research
          </NavLink>
          <NavLink to="/docs" className={linkClass} onClick={() => setOpen(false)}>
            Docs
          </NavLink>
          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}
