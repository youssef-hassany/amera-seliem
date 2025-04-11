export default function Skills() {
  const skills = [
    "Brand Strategy",
    "Video Editing",
    "Copywriting",
    "Social Media",
    "Graphic Design",
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm shadow hover:bg-white/20 transition font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
