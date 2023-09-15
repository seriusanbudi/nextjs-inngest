import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

// Create a simple async Next.js API route handler
export async function GET() {
  // Send your event payload to Inngest
  await inngest.send({
    name: "test/hello.world",
    data: {},
  });

  return NextResponse.json({ name: "Hello Inngest from Next!" });
}
