import ProjectForm from "@/components/admin/ProjectsForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddProject() {
  return (
    <div className="mx-auto py-10 px-4 bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 group self-start"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-black transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
          Back to Admin Page
        </span>
      </Link>

      <ProjectForm />
    </div>
  );
}
