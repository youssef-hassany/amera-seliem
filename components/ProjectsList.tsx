"use client";

import { Project } from "@/types/Project";
import React, { useEffect, useState } from "react";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsList = () => {
  const [projectsList, setProjectsList] = useState<Project[] | undefined>();

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

  return (
    <>
      <ProjectsGrid ProjectsList={projectsList} />
    </>
  );
};

export default ProjectsList;
