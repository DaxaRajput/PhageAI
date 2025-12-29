

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO SECTION */}
      <section className="px-8 py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6">
          Contact & Collaboration
        </h1>
        <p className="max-w-4xl text-xl text-gray-300 leading-relaxed">
          PhageAI is an open, research-driven project. This page is intended for
          academic collaboration, scientific discussion, and constructive
          feedback related to bacteriophage research and AI-driven biology.
        </p>
      </section>

      {/* SECTION: COLLABORATION */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Research Collaboration
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Researchers, students, and professionals interested in bacteriophage
          therapy, antimicrobial resistance, or computational biology are
          welcome to initiate collaboration. PhageAI is designed to grow
          through interdisciplinary input and shared scientific goals.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Potential collaboration areas include dataset expansion, model
          evaluation, experimental validation, and applied case studies.
        </p>
      </section>

      {/* SECTION: CONTACT CHANNELS */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Contact Channels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Academic Inquiries
              </h3>
              <p className="text-gray-300 leading-relaxed">
                For questions related to methodology, datasets, or research
                validation, academic correspondence is encouraged through
                formal communication channels.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Project Feedback
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Constructive feedback on model performance, interpretability,
                or usability is valuable for improving the PhageAI platform.
              </p>
            </div>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                Future Partnerships
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Institutions, laboratories, and organizations interested in
                applied phage research or AI-assisted biology may explore
                long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT FORM */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          Send a Message
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          This form is intended for professional and academic communication.
          Please provide clear and relevant information so your message can be
          addressed appropriately.
        </p>

        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-gray-900 border border-gray-700 rounded text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-gray-900 border border-gray-700 rounded text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="md:col-span-2 p-4 bg-gray-900 border border-gray-700 rounded text-white"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 px-8 py-4 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition"
          >
            Submit Message
          </button>
        </form>
      </section>

      {/* SECTION: CLOSING NOTE */}
      <section className="px-8 py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Open Scientific Dialogue
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Scientific progress thrives on collaboration, transparency, and
            rigorous discussion. PhageAI is committed to these principles and
            welcomes engagement from the broader research community.
          </p>
        </div>
      </section>
    </div>
  )
}