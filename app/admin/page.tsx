import ProjectsControl from "@/components/admin/ProjectsControl";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// AdminPage.tsx
const AdminPage = () => {
  return (
    <div className="mx-auto py-10 px-4 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 min-h-screen">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-black transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
          Back to Portfolio
        </span>
      </Link>

      {/* Upload Button */}
      <section className="mb-12">
        <div className="max-w-lg mx-auto p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
            Upload New Project
          </h2>
          <Link
            href={"/admin/new-project"}
            className="w-full inline-block text-center mx-auto py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors cursor-pointer"
          >
            Upload Video
          </Link>
        </div>
      </section>

      {/* Display Projects */}
      <section>
        <ProjectsControl />
      </section>
    </div>
  );
};

export default AdminPage;
