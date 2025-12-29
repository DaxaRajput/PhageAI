export default function Author() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          About the Author
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          This project is developed by an AI & Data Science student with a strong
          interest in computational biology, bioinformatics, and applied machine
          learning for real-world scientific problems.
        </p>
      </section>

      {/* SECTION: BIOGRAPHY */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Academic Background
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The author is currently pursuing formal education in Artificial
          Intelligence and Data Science, with hands-on experience in machine
          learning, data-driven modeling, and backend system development.
          Academic interests span across algorithmic thinking, statistical
          learning, and interdisciplinary applications of AI.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Beyond coursework, the author actively explores domains where AI can
          meaningfully contribute to science and society, particularly in areas
          that require both technical rigor and ethical responsibility.
        </p>
      </section>

      {/* SECTION: RESEARCH INTERESTS */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-green-300 mb-3">
                Bioinformatics & Genomics
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Applying computational techniques to analyze genomic data,
                understand biological systems, and model molecular interactions
                at scale.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-green-300 mb-3">
                Machine Learning Systems
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Designing and deploying machine learning pipelines that are
                reproducible, interpretable, and suitable for scientific research
                rather than black-box prediction alone.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-green-300 mb-3">
                AI for Healthcare & Biology
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Exploring how artificial intelligence can assist in diagnostics,
                therapeutic discovery, and decision support systems in modern
                biomedical research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TECHNICAL SKILLS */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Technical Skill Set
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
          <li>✔ Python, NumPy, Pandas, Scikit-learn</li>
          <li>✔ Machine Learning & Data Analysis</li>
          <li>✔ Genomic Feature Engineering (k-mers)</li>
          <li>✔ FastAPI & RESTful API Development</li>
          <li>✔ Model Deployment & Backend Systems</li>
          <li>✔ React-based Scientific Dashboards</li>
        </ul>
      </section>

      {/* SECTION: PROJECT PHILOSOPHY */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Project Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            PhageAI is not intended to replace experimental biology, but to
            complement it. The philosophy behind this project is that
            computational tools should act as intelligent filters, guiding
            researchers toward the most promising hypotheses while preserving
            scientific transparency.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Emphasis is placed on interpretability, ethical use of AI, and
            building systems that respect the complexity of biological systems
            rather than oversimplifying them.
          </p>
        </div>
      </section>

      {/* SECTION: CONNECT */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Connect & Collaborate
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The author welcomes academic discussion, collaboration opportunities,
          and constructive feedback related to artificial intelligence,
          bioinformatics, and applied research.
        </p>

        <div className="flex flex-wrap gap-6">
          <span className="px-6 py-3 bg-gray-900 border border-gray-800 rounded">
            GitHub: Research & Code Repositories
          </span>
          <span className="px-6 py-3 bg-gray-900 border border-gray-800 rounded">
            LinkedIn: Academic & Professional Profile
          </span>
          <span className="px-6 py-3 bg-gray-900 border border-gray-800 rounded">
            Email: Collaboration & Inquiries
          </span>
        </div>
      </section>
    </div>
  )
}
