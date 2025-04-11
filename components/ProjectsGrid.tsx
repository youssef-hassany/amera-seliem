interface Project {
  title: string;
  description: string;
  videoUrl: string;
}

const sampleProjects: Project[] = [
  {
    title: "Luxury Car Campaign",
    description: "A cinematic spot for a high-end auto brand.",
    videoUrl: "/videos/car.mp4",
  },
  {
    title: "Summer Fashion Promo",
    description: "Vibrant cuts to showcase new collections.",
    videoUrl: "/videos/fashion.mp4",
  },
];

export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {sampleProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.videoUrl}`}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
