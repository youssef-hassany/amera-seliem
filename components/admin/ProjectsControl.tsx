"use client";

import { deleteProject } from "@/app/actions/project-actions";
import { Project } from "@/types/Project";
import React, { useEffect, useState } from "react";

const ProjectsControl = () => {
  const [projectsList, setProjectsList] = useState<Project[] | undefined>();

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects", {
          method: "GET",
        });

        const data = await response.json();
        setProjectsList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const removeProjectfromUI = (projectId: string) => {
    setProjectsList((prevState) =>
      prevState?.filter((project) => projectId !== project._id)
    );
  };

  const deleteSelectedProject = async (projectId: string) => {
    setIsDeleting(true);

    try {
      await deleteProject(projectId);
      removeProjectfromUI(projectId);
    } catch (error) {
      console.error(error);
    }

    setIsDeleting(false);
  };

  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projectsList?.map((project) => (
            <div
              key={project._id}
              className="bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <iframe
                src={project.videoUrl}
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-indigo-700">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <button className="mt-4 mr-2 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors cursor-pointer">
                Edit
              </button>
              <button
                onClick={async () => await deleteSelectedProject(project._id)}
                className="mt-4 mr-2 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors cursor-pointer"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsControl;
