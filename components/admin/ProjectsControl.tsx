"use client";

import { deleteProject } from "@/app/actions/project-actions";
import { Project } from "@/types/Project";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SkeletonCard from "../SkeletonCard";

const DeleteConfirmationModal = ({
  onConfirm,
  onCancel,
  isDeleting,
}: {
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
}) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Confirm Deletion
      </h3>
      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this project? This action cannot be
        undone.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          disabled={isDeleting}
          className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md disabled:opacity-50 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isDeleting ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              Deleting...
            </span>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  </div>
);

const ProjectsControl = () => {
  const [projectsList, setProjectsList] = useState<Project[] | undefined>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjectsList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, []);

  const handleDeleteClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedProjectId) return;

    try {
      setIsDeleting(true);
      await deleteProject(selectedProjectId);
      setProjectsList((prev) =>
        prev?.filter((project) => project._id !== selectedProjectId)
      );
      toast.success("Project Deleted Successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete project. Please try again.");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
      setSelectedProjectId(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedProjectId(null);
  };

  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {!projectsList &&
            [...Array(6)].map((_, index) => <SkeletonCard key={index} />)}

          {projectsList?.map((project) => (
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
              <button className="mt-4 mr-2 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors cursor-pointer">
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(project._id)}
                className="mt-4 mr-2 py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          isDeleting={isDeleting}
        />
      )}
    </section>
  );
};

export default ProjectsControl;
