

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO SECTION */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Research Blog & Updates
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          A curated stream of scientific insights, research summaries, and
          project updates focused on bacteriophages, artificial intelligence
          in biology, and the future of antimicrobial research.
        </p>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8">
          Featured Article
        </h2>

        <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            Why Bacteriophages Are Returning to the Spotlight
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            As antibiotic resistance accelerates worldwide, bacteriophages
            are re-emerging as viable and highly targeted antimicrobial agents.
            This article explores the historical rise, decline, and modern
            resurgence of phage therapy in clinical and research settings.
          </p>
          <p className="text-gray-400 text-sm">
            Category: Phage Therapy • Estimated read time: 6 minutes
          </p>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-8">
            Latest Posts
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">
                Machine Learning for Phage–Host Prediction
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                An overview of how genomic features such as k-mers can be
                transformed into predictive signals using supervised
                machine learning models.
              </p>
              <p className="text-gray-400 text-sm">
                AI & Bioinformatics
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">
                Understanding the Lytic vs Lysogenic Decision
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                A deep dive into the molecular and environmental factors that
                influence whether a bacteriophage enters a lytic or lysogenic
                lifecycle.
              </p>
              <p className="text-gray-400 text-sm">
                Molecular Biology
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">
                Phage Therapy in the Era of Superbugs
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Examining real-world cases where bacteriophages have been used
                to treat infections resistant to conventional antibiotics.
              </p>
              <p className="text-gray-400 text-sm">
                Clinical Research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT UPDATES */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Project Updates
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">
              PhageAI Backend Deployed
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The machine learning inference backend for PhageAI has been
              successfully deployed, enabling real-time phage–bacteria
              interaction predictions via a REST API.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">
              Frontend Dashboard Under Active Development
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A research-grade frontend dashboard is being developed with a
              focus on interpretability, usability, and scientific clarity.
            </p>
          </div>
        </div>
      </section>

      {/* SCIENTIFIC FOCUS */}
      <section className="px-8 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Editorial Focus
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Content published in this blog prioritizes scientific accuracy,
            clarity, and relevance. Articles aim to bridge the gap between
            complex biological research and accessible computational tools.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Topics include bacteriophage biology, antimicrobial resistance,
            applied machine learning, genomic analysis, and the ethical use of
            artificial intelligence in scientific discovery.
          </p>
        </div>
      </section>
    </div>
  )
}

