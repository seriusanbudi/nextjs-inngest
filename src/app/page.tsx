"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    axios
      .get("/api/test")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  async function handleGreetings() {
    setLoading(true);
    axios
      .get("/api/greetings")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex">
        <button
          disabled={loading}
          onClick={handleClick}
          className="py-2 px-4 rounded bg-green-500 text-white font-medium disabled:opacity-25 mr-2"
        >
          Click me!
        </button>
        <button
          disabled={loading}
          onClick={handleGreetings}
          className="py-2 px-4 rounded bg-green-500 text-white font-medium disabled:opacity-25 mr-2"
        >
          Greetings!
        </button>
      </div>
    </div>
  );
}
