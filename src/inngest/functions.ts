import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { name: "Hello World" },
  { event: "test/hello.world" },
  async ({ event }) => {
    return { event, body: "Hello, World!" };
  }
);

export const greetings = inngest.createFunction(
  { name: "Greetings" },
  { event: "test/greetings" },
  async ({ event }) => {
    return { event, body: "Hello, bro!" };
  }
);
