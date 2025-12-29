import { useState } from "react"
import { predictInteraction } from "../services/api"

/* DNA validation: allows only A, T, C, G */
function isValidDNA(sequence) {
  return /^[ATCGatcg\s]+$/.test(sequence)
}

function MetricCard({ label, value, accent }) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
      <p className="text-sm text-gray-400 mb-2">{label}</p>
      <p className={`text-2xl font-bold ${accent}`}>{value}</p>
    </div>
  )
}

export default function Predictor() {
  const [phage, setPhage] = useState("")
  const [bacteria, setBacteria] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handlePredict() {
    setError("")
    setResult(null)

    if (!phage || !bacteria) {
      setError("Both DNA sequences are required.")
      return
    }

    if (!isValidDNA(phage) || !isValidDNA(bacteria)) {
      setError("DNA sequences may contain only A, T, C, and G characters.")
      return
    }

    setLoading(true)

    try {
      const data = await predictInteraction(phage, bacteria)
      setResult(data)
    } catch (err) {
      setError("Prediction failed. Backend service may be unavailable.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-16">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
          Phage–Bacteria Interaction Predictor
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
          This tool uses a trained machine learning model to estimate the
          likelihood that a bacteriophage will exhibit lytic activity against
          a specific bacterial host based on genomic sequence features.
        </p>
      </section>

      {/* INPUT SECTION */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Phage DNA Sequence
            </label>
            <textarea
              className="w-full h-48 p-4 bg-gray-900 border border-gray-800 rounded font-mono text-sm text-green-300 focus:outline-none focus:border-green-500"
              placeholder="Enter phage DNA sequence (A, T, C, G)"
              value={phage}
              onChange={(e) => setPhage(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Bacterial DNA Sequence
            </label>
            <textarea
              className="w-full h-48 p-4 bg-gray-900 border border-gray-800 rounded font-mono text-sm text-green-300 focus:outline-none focus:border-green-500"
              placeholder="Enter bacterial DNA sequence (A, T, C, G)"
              value={bacteria}
              onChange={(e) => setBacteria(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="mt-8 px-8 py-4 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition disabled:opacity-50"
        >
          {loading ? "Analyzing Genomic Interaction..." : "Run Prediction"}
        </button>

        {error && (
          <p className="mt-4 text-red-400 font-medium">{error}</p>
        )}
      </section>

      {/* RESULTS */}
      {result && (
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-8">
            Prediction Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <MetricCard
              label="Interaction Type"
              value={result.interaction_type}
              accent={
                result.interaction_type === "Lytic"
                  ? "text-red-400"
                  : "text-blue-400"
              }
            />

            <MetricCard
              label="Model Confidence"
              value={`${(result.confidence * 100).toFixed(2)}%`}
              accent="text-green-300"
            />

            <MetricCard
              label="Kill Probability"
              value={`${(result.kill_probability * 100).toFixed(2)}%`}
              accent="text-yellow-400"
            />
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Kill Probability Visualization
            </h3>

            <div className="w-full bg-gray-800 rounded h-5">
              <div
                className={`h-5 rounded transition-all duration-700 ${
                  result.kill_probability > 0.7
                    ? "bg-red-500"
                    : result.kill_probability > 0.4
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{
                  width: `${result.kill_probability * 100}%`,
                }}
              />
            </div>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Higher values indicate a stronger likelihood of effective lytic
              infection. This score is probabilistic and should be interpreted
              alongside confidence metrics and biological context.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}