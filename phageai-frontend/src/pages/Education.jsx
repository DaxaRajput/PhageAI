function HeroSection() {
  return (
    <section className="px-8 py-28 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
        Education Hub
      </h1>
      <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
        A structured learning space dedicated to bacteriophages, bacterial systems,
        and the molecular logic behind phage–host interactions. This section is written
        for students, researchers, and reviewers seeking conceptual clarity rather than
        oversimplification.
      </p>
    </section>
  )
}

function EducationSection({ title, children, dark }) {
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

function InfoCard({ title, color, children }) {
  return (
    <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
      <h3 className={`text-xl font-semibold mb-3 ${color}`}>
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HeroSection />

      <EducationSection title="What Are Bacteriophages?">
        <p>
          Bacteriophages are viruses that specifically infect bacteria and are the
          most abundant biological entities on Earth. With an estimated population
          exceeding 10³¹ particles, phages play a critical role in regulating
          bacterial populations across ecosystems.
        </p>
        <p>
          Most bacteriophages consist of a protein capsid enclosing genetic material
          (typically DNA), often coupled with a tail apparatus used to inject the
          genome into a bacterial host cell.
        </p>
      </EducationSection>

      <EducationSection title="Understanding Bacteria" dark>
        <p>
          Bacteria are unicellular prokaryotic organisms found in nearly every
          environment on the planet. While many bacteria are essential to human
          health and ecological balance, pathogenic strains are responsible for
          serious infectious diseases.
        </p>
        <p>
          The rise of antibiotic resistance has reduced the effectiveness of
          traditional treatments, driving renewed interest in alternative
          antimicrobial strategies such as phage therapy.
        </p>
      </EducationSection>

      <EducationSection title="Phage–Bacteria Interaction Mechanisms">
        <p>
          Phage infection begins with molecular recognition between phage surface
          proteins and bacterial receptors. Once attachment occurs, the phage genome
          is introduced into the bacterial cytoplasm.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <InfoCard title="Lytic Cycle 🧬" color="text-red-400">
            In the lytic cycle, the phage hijacks bacterial machinery to replicate
            itself, culminating in host cell lysis and release of progeny phages.
            This pathway is the primary target for therapeutic applications.
          </InfoCard>

          <InfoCard title="Lysogenic Cycle 🧪" color="text-blue-400">
            In the lysogenic cycle, phage DNA integrates into the host genome and
            replicates passively. While not immediately lethal, lysogeny can alter
            bacterial behavior and evolutionary dynamics.
          </InfoCard>
        </div>
      </EducationSection>

      <EducationSection title="Why Computational Prediction Matters" dark>
        <p>
          Experimental testing of phage–host interactions is costly, slow, and
          difficult to scale. Computational models enable rapid screening of
          thousands of potential interactions before laboratory validation.
        </p>
        <p>
          PhageAI leverages genomic feature engineering, such as k-mer frequency
          representations, combined with supervised machine learning to estimate
          the likelihood of effective phage-mediated bacterial killing.
        </p>
      </EducationSection>

      <EducationSection title="Learning Outcomes">
        <ul className="list-disc list-inside space-y-3">
          <li>Understand bacteriophage structure and biological function</li>
          <li>Explain bacterial diversity and pathogenic mechanisms</li>
          <li>Differentiate lytic and lysogenic infection strategies</li>
          <li>Recognize the role of AI in modern biological research</li>
          <li>Interpret computational predictions responsibly</li>
        </ul>
      </EducationSection>
    </div>
  )
}