

export default function Docs() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Documentation
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          This documentation describes how to use the PhageAI platform and API
          for predicting bacteriophage–bacteria interactions. It is intended for
          researchers, developers, and students integrating PhageAI into
          scientific workflows or applications.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Platform Overview
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          PhageAI provides a REST-based interface to a trained machine learning
          model that estimates the likelihood of successful bacteriophage
          infection against a bacterial host. Predictions are based on genomic
          sequence features derived from both phage and bacterial DNA.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The platform is designed to support rapid hypothesis generation,
          phage candidate ranking, and decision support prior to laboratory
          experimentation.
        </p>
      </section>

      {/* API BASICS */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            API Basics
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Base URL: Deployed backend service endpoint</li>
            <li>Protocol: HTTPS (REST)</li>
            <li>Format: JSON request and response bodies</li>
            <li>Authentication: None (research/demo usage)</li>
          </ul>
        </div>
      </section>

      {/* ENDPOINT */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Prediction Endpoint
        </h2>

        <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 mb-6">
          <p className="text-green-300 font-mono mb-2">
            POST /api/predict
          </p>
          <p className="text-gray-300">
            Submits a phage–bacteria DNA pair for interaction prediction.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Request Body
        </h3>
        <pre className="p-6 bg-black rounded-xl text-green-300 overflow-x-auto">
{`{
  "phage_sequence": "ATCGATCG...",
  "bacteria_sequence": "CGTACGTA..."
}`}
        </pre>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Response Body
        </h3>
        <pre className="p-6 bg-black rounded-xl text-green-300 overflow-x-auto">
{`{
  "kill_probability": 0.82,
  "interaction_type": "Lytic",
  "confidence": 0.91,
  "prediction_id": "abc123",
  "processing_time_ms": 87
}`}
        </pre>
      </section>

      {/* INTEGRATION FLOW */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Integration Workflow
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>Prepare phage and bacterial DNA sequences (FASTA or raw)</li>
            <li>Submit sequences to the prediction endpoint</li>
            <li>Receive probability-based interaction results</li>
            <li>Rank phage candidates for experimental testing</li>
          </ol>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Limitations & Responsible Use
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          PhageAI predictions are probabilistic and depend on the quality and
          representativeness of the training data. Results should be interpreted
          as decision-support signals, not definitive biological conclusions.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Experimental validation remains essential before any clinical or
          therapeutic application.
        </p>
      </section>

      {/* CITATION */}
      <section className="px-8 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Citation & Academic Use
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you use PhageAI or its predictions in academic work, please cite
            the project appropriately and acknowledge the computational nature
            of the predictions.
          </p>
          <p className="text-gray-400 text-sm">
            Suggested citation format will be provided in future releases.
          </p>
        </div>
      </section>
    </div>
  )
}