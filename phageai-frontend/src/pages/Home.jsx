function HeroSection() {
  return (
    <section className="px-8 py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 mb-8">
        PhageAI
      </h1>
      <p className="max-w-4xl text-2xl text-gray-300 leading-relaxed mb-10">
        An AI-powered research platform for predicting bacteriophage–bacteria
        interactions, accelerating discovery in phage therapy and antimicrobial
        resistance research.
      </p>

      <div className="flex flex-wrap gap-6">
        <a
          href="/predictor"
          className="px-8 py-4 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition"
        >
          Try the Predictor
        </a>
        <a
          href="/education"
          className="px-8 py-4 border border-gray-700 rounded text-gray-300 hover:bg-gray-900 transition"
        >
          Learn the Science
        </a>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10">
          Platform Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🧬"
            title="Genomic ML Prediction"
            text="Uses k-mer based genomic feature extraction and supervised machine learning to estimate phage–host interaction likelihood."
          />
          <FeatureCard
            icon="🔬"
            title="Research-Grade Design"
            text="Built for transparency, interpretability, and academic rigor rather than black-box predictions."
          />
          <FeatureCard
            icon="🌍"
            title="Real-World Relevance"
            text="Inspired by documented phage therapy cases addressing antibiotic-resistant infections worldwide."
          />
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section className="px-8 py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8">
          How PhageAI Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-gray-300">
          <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
            <strong>1.</strong> Input phage and bacterial DNA sequences
          </div>
          <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
            <strong>2.</strong> Extract genomic k-mer features
          </div>
          <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
            <strong>3.</strong> Run ML-based interaction prediction
          </div>
          <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
            <strong>4.</strong> Rank candidates for experimental testing
          </div>
        </div>
      </div>
    </section>
  )
}

function MotivationSection() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Why PhageAI Matters
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Antibiotic resistance poses a growing global threat, limiting the
          effectiveness of conventional treatments. Bacteriophages offer a
          highly specific alternative, but identifying effective phage–host
          pairs experimentally remains slow and resource-intensive.
        </p>
        <p className="text-gray-300 leading-relaxed">
          PhageAI addresses this challenge by providing a computational layer
          that prioritizes promising interactions, enabling researchers to
          focus laboratory efforts where they matter most.
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="px-8 py-32 bg-gradient-to-t from-black via-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-400 mb-6">
          Explore PhageAI
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Dive into the predictor, study real-world cases, or learn the science
          behind bacteriophage-based therapies.
        </p>

        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="/predictor"
            className="px-8 py-4 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition"
          >
            Start Predicting
          </a>
          <a
            href="/case-studies"
            className="px-8 py-4 border border-gray-700 rounded text-gray-300 hover:bg-gray-900 transition"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <MotivationSection />
      <CTASection />
    </div>
  )
}