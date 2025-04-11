import mongoose, { Schema, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    videoUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Project =
  models.Project || mongoose.model("Project", ProjectSchema);
