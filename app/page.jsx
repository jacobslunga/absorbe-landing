"use client";

import Link from "next/link";
import "./globals.css";
import { AiFillChrome } from "react-icons/ai";

export default function Home() {
  return (
    <main
      className={`w-screen h-screen flex flex-col items-center justify-center bg-black`}
    >
      <div className="w-[80%] flex flex-row items-center justify-between absolute top-0 h-[10%]">
        <h1 className="text-white text-2xl" style={{ fontFamily: "Logo Bold" }}>
          absorbe
        </h1>
        <Link
          style={{ fontFamily: "Inter Med" }}
          href="/about"
          className="text-[rgba(255,255,255,0.5)] font-semibold transition-all duration-200 hover:bg-blue-500 rounded-full p-2 hover:text-white"
        >
          Read more
        </Link>
      </div>
      <div className="w-[80%] flex flex-col items-start justify-center">
        <h1
          style={{ fontFamily: "Inter Black" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-7xl font-black relative animate-float transition-all duration-200 tracking-tight"
        >
          Absorb
          <span className="text-xs text-white">e</span>
          ing the essence of information, one summary at a time.
        </h1>

        <button
          style={{ fontFamily: "Logo Bold" }}
          className="border-[1px] flex flex-row items-center justify-center transition-all duration-300 mt-5 border-[rgba(255,255,255,0.6)] hover:bg-blue-500 text-white rounded-full p-3 hover:border-transparent text-xl"
        >
          <AiFillChrome size={30} style={{ marginRight: 10 }} />
          Download the extension
        </button>
      </div>
    </main>
  );
}
