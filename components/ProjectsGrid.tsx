import { Project } from "@/types/Project";
import SkeletonCard from "./SkeletonCard";

interface Props {
  ProjectsList: Project[] | undefined;
}

export default function ProjectsGrid({ ProjectsList }: Props) {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {!ProjectsList &&
            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)}

          {ProjectsList?.map((project) => (
            <div
              key={project._id}
              className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <iframe
                src={project.videoUrl}
                width="100%"
                height="250"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-indigo-700">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
