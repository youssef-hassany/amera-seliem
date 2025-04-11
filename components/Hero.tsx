export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp">
          Transforming Your Business into a story
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeInUp delay-100">
          Helping businesses shine through compelling visual storytelling.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition animate-fadeInUp delay-200"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
