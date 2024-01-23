import { NextResponse, NextRequest } from "next/server";
import userModel from "@/models/user.model";
import connectDb from "@/config/db";

export async function POST(request: NextRequest) {
  try {
    await connectDb();

    const { email, password } = await request.json();

    if (!email || !password)
      return NextResponse.json({
        message: "please fill all the fields",
        status: 400,
      });

    // console.log(email, password);

    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "invalid email", status: 400 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "invalid password", status: 400 });
    }

    return NextResponse.json({
      message: "login successfully",
      status: 200,
      id: user._id,
      email: user.email,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
