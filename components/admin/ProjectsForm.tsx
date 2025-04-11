"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Project Uploaded");

      setFormData({
        title: "",
        description: "",
        videoUrl: "",
      });
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg text-black"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Upload New Project
      </h2>

      {/* Title Input */}
      <div className="space-y-2">
        <label htmlFor="title" className="text-gray-700 font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      {/* Description Textarea */}
      <div className="space-y-2">
        <label htmlFor="description" className="text-gray-700 font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={4}
          className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      {/* Video URL Input */}
      <div className="space-y-2">
        <label htmlFor="videoUrl" className="text-gray-700 font-medium">
          YouTube Video URL
        </label>
        <input
          type="text"
          id="videoUrl"
          value={formData.videoUrl}
          onChange={(e) =>
            setFormData({ ...formData, videoUrl: e.target.value })
          }
          placeholder="Enter YouTube video URL"
          required
          className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <p className="text-sm text-gray-500 mt-1">
          Upload video to YouTube first and copy the URL
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"
      >
        {isLoading ? "Loading..." : "Save Project"}
      </button>
    </form>
  );
}
