
export default function CaseStudies() {
  const cases = [
    {
      title: "Phage Therapy Against Multidrug-Resistant Acinetobacter",
      context:
        "A critically ill patient with a multidrug-resistant Acinetobacter baumannii infection was treated using a personalized bacteriophage cocktail.",
      outcome:
        "The phage therapy successfully reduced bacterial load where antibiotics had failed, leading to patient recovery.",
      domain: "Clinical Phage Therapy",
    },
    {
      title: "Treatment of Antibiotic-Resistant Pseudomonas Infections",
      context:
        "Pseudomonas aeruginosa infections are common in burn wounds and cystic fibrosis patients and are often antibiotic-resistant.",
      outcome:
        "Targeted phages demonstrated strong lytic activity and improved clinical outcomes in compassionate-use cases.",
      domain: "Hospital Infections",
    },
    {
      title: "Phage Therapy for Chronic Otitis",
      context:
        "Chronic ear infections caused by biofilm-forming bacteria show poor response to antibiotics.",
      outcome:
        "Topical phage application disrupted biofilms and reduced infection recurrence.",
      domain: "Biofilm Research",
    },
    {
      title: "Combatting MRSA Using Bacteriophages",
      context:
        "Methicillin-resistant Staphylococcus aureus (MRSA) poses a major threat in healthcare settings.",
      outcome:
        "Experimental phage treatments demonstrated effective bacterial clearance in preclinical models.",
      domain: "Antimicrobial Resistance",
    },
    {
      title: "Phage Cocktails in Diabetic Foot Ulcers",
      context:
        "Chronic diabetic wounds often harbor polymicrobial infections resistant to antibiotics.",
      outcome:
        "Customized phage cocktails reduced infection severity and promoted wound healing.",
      domain: "Wound Care",
    },
    {
      title: "Phages Against Carbapenem-Resistant Enterobacteriaceae",
      context:
        "Carbapenem-resistant bacteria are listed as critical priority pathogens by WHO.",
      outcome:
        "Laboratory and early clinical studies show promising phage-mediated bacterial suppression.",
      domain: "Global Health",
    },
    {
      title: "Phage Therapy in Prosthetic Joint Infections",
      context:
        "Prosthetic joint infections are difficult to treat due to biofilms on implants.",
      outcome:
        "Adjunct phage therapy improved infection control when combined with surgery.",
      domain: "Orthopedic Infections",
    },
    {
      title: "Use of Phages in Urinary Tract Infections",
      context:
        "Recurrent UTIs caused by resistant bacteria reduce quality of life for patients.",
      outcome:
        "Experimental phage treatments reduced recurrence in selected cases.",
      domain: "Urology",
    },
    {
      title: "Phage Applications in Sepsis Management",
      context:
        "Sepsis caused by resistant bacteria has high mortality rates.",
      outcome:
        "Early-stage research indicates phages can rapidly reduce bacterial burden.",
      domain: "Critical Care",
    },
    {
      title: "Phage Therapy for Burn Wound Infections",
      context:
        "Burn wounds provide an ideal environment for resistant bacterial growth.",
      outcome:
        "Phage-based treatments reduced bacterial colonization and infection rates.",
      domain: "Burn Care",
    },
    {
      title: "Targeting Biofilms in Medical Devices",
      context:
        "Biofilms on catheters and implants resist antibiotics.",
      outcome:
        "Phages demonstrated the ability to penetrate and disrupt biofilms.",
      domain: "Medical Devices",
    },
    {
      title: "Phage Therapy in Veterinary Medicine",
      context:
        "Antibiotic resistance affects both human and animal health.",
      outcome:
        "Phages have been used to treat bacterial infections in livestock.",
      domain: "Veterinary Science",
    },
    {
      title: "Environmental Phage Applications",
      context:
        "Bacteriophages regulate bacterial populations in natural ecosystems.",
      outcome:
        "Phage-based biocontrol reduced harmful bacteria in water systems.",
      domain: "Environmental Biology",
    },
    {
      title: "Phages Against Salmonella in Food Safety",
      context:
        "Foodborne pathogens pose significant public health risks.",
      outcome:
        "Phage treatments reduced Salmonella contamination in food products.",
      domain: "Food Microbiology",
    },
    {
      title: "Phage Therapy for Clostridioides difficile",
      context:
        "C. difficile infections are linked to antibiotic overuse.",
      outcome:
        "Research suggests phages may selectively target C. difficile strains.",
      domain: "Gut Microbiome",
    },
    {
      title: "Personalized Phage Therapy in Eastern Europe",
      context:
        "Phage therapy has a long clinical history in countries like Georgia and Poland.",
      outcome:
        "Decades of clinical data support safety and effectiveness.",
      domain: "Historical Research",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Case Studies
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          This section highlights real-world applications of bacteriophage
          therapy and phage-based interventions across clinical, environmental,
          and research settings. These cases demonstrate how phages are being
          used to address antibiotic resistance and complex bacterial infections.
        </p>
      </section>

      {/* CASE LIST */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10">
          Documented Applications of Bacteriophages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-3">
                <span className="text-green-400 font-medium">Context:</span>{" "}
                {item.context}
              </p>

              <p className="text-gray-300 leading-relaxed mb-3">
                <span className="text-green-400 font-medium">Outcome:</span>{" "}
                {item.outcome}
              </p>

              <p className="text-sm text-gray-400">
                Domain: {item.domain}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-8 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Scientific Significance
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            These case studies illustrate the growing role of bacteriophages
            as viable tools in combating antibiotic-resistant infections.
            While phage therapy is not yet universally adopted, accumulating
            evidence from clinical and experimental settings highlights its
            potential as a precision antimicrobial strategy.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Computational platforms like PhageAI aim to further accelerate
            this field by enabling rapid, data-driven selection of effective
            phage–host combinations prior to laboratory validation.
          </p>
        </div>
      </section>
    </div>
  )
}
