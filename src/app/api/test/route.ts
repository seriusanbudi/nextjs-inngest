import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function GET() {
  await inngest.send({
    name: "test/hello.world",
    data: {},
  });

  return NextResponse.json({ name: "Hello Inngest from Next!" });
}
