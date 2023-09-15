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

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <button
        disabled={loading}
        onClick={handleClick}
        className="py-2 px-4 rounded bg-green-500 text-white font-medium disabled:opacity-25"
      >
        Click me!
      </button>
    </div>
  );
}
