import { createUser } from "@/services/backend";
import { RequestBody } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const { email, name, password } = body;

  const user = await createUser({ email, name, password });
  return NextResponse.json(user);
}
