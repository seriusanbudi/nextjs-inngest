import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function GET() {
  await inngest.send({
    name: "test/greetings",
    data: {},
  });

  return NextResponse.json({ name: "greetings function run!" });
}
