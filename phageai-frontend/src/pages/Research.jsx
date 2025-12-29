
function ResearchSection({ title, dark, children }) {
  return (
    <section className={`${dark ? "bg-gray-900" : ""} px-8 py-20`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          {title}
        </h2>
        <div className="text-gray-300 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, children }) {
  return (
    <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="px-8 py-28 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Research & Methodology
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          This section documents the scientific and computational foundations
          of PhageAI, including dataset construction, feature engineering,
          machine learning methodology, evaluation strategy, and system design.
        </p>
      </section>

      <ResearchSection title="Datasets">
        <p>
          The PhageAI model is trained on curated datasets consisting of known
          bacteriophage–bacteria interaction pairs collected from publicly
          available genomic and experimental resources.
        </p>
        <p>
          Each data point represents a labeled interaction, indicating whether
          a given phage exhibits lytic activity against a specific bacterial
          host under documented conditions.
        </p>
      </ResearchSection>

      <ResearchSection title="Genomic Feature Engineering" dark>
        <p>
          Raw DNA sequences are transformed into numerical representations using
          k-mer frequency analysis. A k-mer is a contiguous subsequence of length
          k extracted from genomic data.
        </p>
        <p>
          These frequency vectors capture compositional and structural patterns
          within genomes while remaining model-agnostic and computationally
          efficient.
        </p>
      </ResearchSection>

      <ResearchSection title="Model Training & Learning Strategy">
        <div className="grid md:grid-cols-2 gap-8">
          <InfoCard title="Supervised Learning">
            The model is trained using supervised learning on labeled
            phage–host interaction data, enabling it to learn statistical
            relationships between genomic features and observed outcomes.
          </InfoCard>

          <InfoCard title="Probability-Based Output">
            Rather than producing binary decisions, the model outputs
            probabilistic estimates that reflect uncertainty inherent in
            biological systems.
          </InfoCard>
        </div>
      </ResearchSection>

      <ResearchSection title="Evaluation Metrics" dark>
        <p>
          Model performance is evaluated using standard classification metrics
          including accuracy, precision, recall, and area under the ROC curve.
        </p>
        <p>
          Confidence scores are reported alongside predictions to help users
          assess reliability on a per-sample basis.
        </p>
      </ResearchSection>

      <ResearchSection title="System Architecture">
        <p>
          PhageAI is implemented as a modular system separating data processing,
          model inference, and user interaction layers.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Backend: FastAPI-based inference service</li>
          <li>Model Layer: Pre-trained machine learning models</li>
          <li>Frontend: React-based research dashboard</li>
          <li>Deployment: Cloud-hosted backend and CDN-served frontend</li>
        </ul>
      </ResearchSection>

      <ResearchSection title="Limitations & Future Work" dark>
        <p>
          Like all data-driven models, PhageAI is limited by the scope and
          quality of its training data. Certain phage families or bacterial
          taxa may be underrepresented.
        </p>
        <p>
          Future work includes expanding datasets, improving uncertainty
          estimation, and incorporating experimental feedback loops to
          continuously refine predictions.
        </p>
      </ResearchSection>
    </div>
  )
}