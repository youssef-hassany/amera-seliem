import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = models.Users || mongoose.model("Users", userSchema);
