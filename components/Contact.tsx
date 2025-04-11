export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="mb-8 text-lg">
          Have a project in mind? Reach out and let's bring your vision to life.
        </p>
        <a
          href="mailto:hello@adpro.com"
          className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-opacity-90 transition"
        >
          hello@adpro.com
        </a>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="hover:scale-110 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:scale-110 transition">
            Instagram
          </a>
          <a href="#" className="hover:scale-110 transition">
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}
