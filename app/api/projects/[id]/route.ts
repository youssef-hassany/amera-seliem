import { connectToDB } from "@/lib/mongoose";
import { Project } from "@/models/project";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  await connectToDB();
  const updated = await Project.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return Response.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  await Project.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}
