import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { signToken } from "@/lib/auth";

export async function POST(req) {
  // try {
  //   const { email, password, name } = await req.json();
  //   if (!email || !password || !name) {
  //     return NextResponse.json(
  //       { error: "All fields are required" },
  //       { status: 400 }
  //     );
  //   }
  //   await connectDB();
  //   const existingAdmin = await Admin.findOne({ email });
  //   if (existingAdmin) {
  //     return NextResponse.json(
  //       { error: "Admin already exists" },
  //       { status: 400 }
  //     );
  //   }
  //   const hashedPassword = await bcrypt.hash(password, 12);
  //   const admin = await Admin.create({
  //     email,
  //     password: hashedPassword,
  //     name,
  //   });
  //   const token = signToken({ id: admin._id, email: admin.email });
  //   return NextResponse.json({
  //     success: true,
  //     token,
  //     admin: { id: admin._id, email: admin.email, name: admin.name },
  //   });
  // } catch (error) {
  //   console.error("Signup error:", error);
  //   return NextResponse.json(
  //     { error: "Internal server error" },
  //     { status: 500 }
  //   );
  // }
}
