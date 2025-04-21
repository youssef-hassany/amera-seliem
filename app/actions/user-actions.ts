"use server";

import { connectToDB } from "@/lib/mongoose";
import { User } from "@/models/user";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { generateJWT } from "@/lib/session";

/* ---------------- SIGNUP ---------------- */

interface SignupData {
  email: string;
  password: string;
  username: string;
}

interface UserWithoutPassword {
  _id: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function signup(formData: SignupData) {
  try {
    await connectToDB();

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: formData.email }, { username: formData.username }],
    });

    if (existingUser) {
      if (existingUser.email === formData.email) {
        return { error: "Email already in use" };
      }
      if (existingUser.username === formData.username) {
        return { error: "Username already taken" };
      }
    }

    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const newUser = await User.create({
      email: formData.email,
      username: formData.username,
      password: hashedPassword,
    });

    // Generate JWT
    const token = await generateJWT({
      userId: newUser._id.toString(),
      email: newUser.email,
      username: newUser.username,
    });

    // Store JWT in cookies
    (await cookies()).set("amera-auth-token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    const userData: UserWithoutPassword = {
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    return { success: true, user: userData };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "Failed to create account" };
  }
}

interface LoginData {
  email: string;
  password: string;
}

interface UserWithoutPassword {
  _id: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

/* ---------------- LOGIN ---------------- */

export async function login(formData: LoginData) {
  try {
    await connectToDB();

    const user = await User.findOne({ email: formData.email });

    if (!user) {
      return { error: "Invalid email or password" };
    }

    const isPasswordValid = await bcrypt.compare(
      formData.password,
      user.password
    );

    if (!isPasswordValid) {
      return { error: "Invalid email or password" };
    }

    const token = await generateJWT({
      userId: user._id.toString(),
      email: user.email,
      username: user.username,
    });

    (await cookies()).set("amera-auth-token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    // Return user data (without password)
    const userData: UserWithoutPassword = {
      _id: user._id,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return { success: true, user: userData };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Failed to login" };
  }
}

/* ----------------- LOGOUT ---------------- */
export async function logout() {
  (await cookies()).delete("amera-auth-token");
  redirect("/login");
}
