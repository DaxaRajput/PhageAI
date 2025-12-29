import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex flex-wrap gap-6">
      <Link to="/" className="font-bold text-xl">PhageAI</Link>

      <Link to="/predictor">Predictor</Link>
      <Link to="/education">Education</Link>
      <Link to="/case-studies">Case Studies</Link>
      <Link to="/research">Research</Link>
      <Link to="/about">About</Link>
      <Link to="/author">Author</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/docs">Docs</Link>
    </nav>
  )
}
