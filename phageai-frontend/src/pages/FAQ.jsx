

export default function FAQ() {
  const faqs = [
    {
      q: "What is PhageAI?",
      a: "PhageAI is a computational platform that uses machine learning to predict interactions between bacteriophages and bacterial hosts based on genomic sequence data. It is designed as a decision-support tool for research and educational purposes."
    },
    {
      q: "Is PhageAI a replacement for laboratory experiments?",
      a: "No. PhageAI does not replace wet-lab experimentation. It is intended to narrow down candidate phage–host pairs and guide experimental design, reducing time and cost before laboratory validation."
    },
    {
      q: "What type of machine learning model does PhageAI use?",
      a: "PhageAI uses a supervised learning model trained on known phage–bacteria interaction data. Genomic sequences are converted into numerical features using k-mer frequency representations before being passed to the model."
    },
    {
      q: "What does the kill probability represent?",
      a: "The kill probability is a normalized score between 0 and 1 that estimates the likelihood of a phage exhibiting effective lytic activity against a bacterial host. It is a probabilistic signal, not a guaranteed outcome."
    },
    {
      q: "How should interaction types be interpreted?",
      a: "Interaction types such as Lytic or Lysogenic are inferred from probability thresholds. These labels indicate dominant tendencies observed in the training data rather than definitive biological classifications."
    },
    {
      q: "What input data is required?",
      a: "PhageAI requires DNA sequences from both the bacteriophage and the bacterial host. Sequences may be provided in raw nucleotide format or derived from FASTA files."
    },
    {
      q: "Can PhageAI be used for clinical decision-making?",
      a: "No. PhageAI is not approved for clinical use. Predictions should never be used directly for patient treatment decisions without proper regulatory approval and experimental validation."
    },
    {
      q: "How accurate are the predictions?",
      a: "Prediction accuracy depends on the quality and diversity of the training data. PhageAI provides confidence estimates to help users gauge the reliability of each prediction."
    },
    {
      q: "Does PhageAI store submitted sequences?",
      a: "By default, submitted sequences are processed transiently for prediction. Long-term storage or reuse of data depends on deployment configuration and user consent."
    },
    {
      q: "Can I integrate PhageAI into my own pipeline?",
      a: "Yes. PhageAI exposes a REST API that allows programmatic integration into research workflows, bioinformatics pipelines, or educational tools."
    },
    {
      q: "What are the current limitations of PhageAI?",
      a: "Limitations include dataset bias, incomplete coverage of phage diversity, and the inherent uncertainty of biological systems. Users are encouraged to interpret results conservatively."
    },
    {
      q: "How can I cite PhageAI in academic work?",
      a: "If PhageAI contributes to your research, please cite the project appropriately and acknowledge its computational nature. A formal citation format will be provided as the project matures."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          This section addresses common questions about the PhageAI platform,
          its scientific foundations, technical implementation, and responsible
          use in research and education.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="space-y-8">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-green-300 mb-3">
                {item.q}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="px-8 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Responsible Use & Transparency
          </h2>
          <p className="text-gray-300 leading-relaxed">
            PhageAI is built to promote transparent, interpretable, and ethical
            use of artificial intelligence in biological research. Users are
            encouraged to combine computational insights with domain expertise
            and experimental evidence.
          </p>
        </div>
      </section>
    </div>
  )
}