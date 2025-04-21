"use server";

import { connectToDB } from "@/lib/mongoose";
import { Project } from "@/models/project";
import { revalidatePath } from "next/cache";

interface ProjectPayload {
  title: string;
  description: string;
  videoUrl: string;
}

export async function updateProject(id: string, data: ProjectPayload) {
  await connectToDB();
  const updated = await Project.findByIdAndUpdate(id, data, {
    new: true,
  });

  // Optionally revalidate relevant paths
  revalidatePath("/projects");
  revalidatePath(`/projects/${id}`);

  return updated;
}

export async function deleteProject(id: string) {
  await connectToDB();
  await Project.findByIdAndDelete(id);

  // Optionally revalidate relevant paths
  revalidatePath("/projects");

  return { success: true };
}
