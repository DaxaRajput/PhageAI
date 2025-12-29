

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO SECTION */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          About PhageAI
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          PhageAI is a research-focused platform designed to computationally
          predict bacteriophage–bacteria interactions using machine learning.
          The project bridges genomics, artificial intelligence, and
          antimicrobial research to support faster scientific discovery.
        </p>
      </section>

      {/* SECTION: PROJECT MOTIVATION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Scientific Motivation
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The rapid rise of antibiotic-resistant bacteria has created an urgent
          need for alternative therapeutic strategies. Bacteriophages offer a
          highly specific, biologically adaptive solution, but identifying
          effective phage–host pairs through laboratory experiments alone is
          slow and resource-intensive.
        </p>
        <p className="text-gray-300 leading-relaxed">
          PhageAI was created to address this bottleneck by using genomic data
          and supervised machine learning to prioritize promising phage
          candidates before experimental validation.
        </p>
      </section>

      {/* SECTION: WHAT PHAGEAI DOES */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            What PhageAI Does
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Genomic Feature Extraction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                DNA sequences from bacteriophages and bacterial hosts are
                transformed into numerical representations using k-mer
                frequency profiles, enabling machine learning models to process
                genomic information effectively.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Machine Learning Prediction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A supervised learning model trained on known phage–bacteria
                interaction data estimates the likelihood of successful lytic
                infection, producing interpretable probability scores.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Decision Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                By ranking candidate phages for a given bacterial target,
                PhageAI supports experimental design, phage cocktail
                development, and antimicrobial research workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TECHNICAL ARCHITECTURE */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Technical Architecture
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          PhageAI is built as a modular system that separates data processing,
          model inference, and user interaction. This design ensures
          scalability, reproducibility, and ease of integration into research
          pipelines.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>Backend: FastAPI-based REST service for model inference</li>
          <li>Machine Learning: Trained models using genomic k-mer features</li>
          <li>Frontend: React-based scientific dashboard</li>
          <li>Deployment: Cloud-hosted backend and CDN-delivered frontend</li>
        </ul>
      </section>

      {/* SECTION: KEY FEATURES */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Key Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
            <li>✔ Genomic sequence-based interaction prediction</li>
            <li>✔ Probability-driven lytic effectiveness scoring</li>
            <li>✔ Interactive prediction dashboard</li>
            <li>✔ Educational content for students and researchers</li>
            <li>✔ Real-world phage therapy case studies</li>
            <li>✔ API-first design for programmatic access</li>
          </ul>
        </div>
      </section>

      {/* SECTION: ROADMAP */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Project Roadmap
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          PhageAI is an evolving research project. Future development goals
          include expanding training datasets, improving model interpretability,
          and integrating experimental feedback loops.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>Expansion to multi-host and multi-phage interaction datasets</li>
          <li>Advanced confidence calibration and uncertainty estimation</li>
          <li>Visualization of genomic similarity and interaction networks</li>
          <li>User-submitted feedback for model refinement</li>
        </ul>
      </section>
    </div>
  )
}