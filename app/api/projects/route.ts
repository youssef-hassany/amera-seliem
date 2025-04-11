import { connectToDB } from "@/lib/mongoose";
import { Project } from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.videoUrl || !body.title) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDB();

    const newProject = await Project.create({
      title: body.title,
      description: body.description,
      videoUrl: body.videoUrl,
    });

    return NextResponse.json(newProject);
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
