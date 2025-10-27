"use client"; // Required for hooks & animations

import { useEffect } from "react";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import SplitText from "@/components/SplitText";
import ScrollFloat from "@/components/ScrollFloat";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#05000a]">
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-50 mt-10">
        <Navbar />
      </div>

      {/* Animated SplitText Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[60vh] text-white">
        <h1 className="text-6xl font-bold mb-6">
          <SplitText
            text="Programmer with Diganta"
            className="text-6xl font-bold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </div>

     
      
    </main>
  );
}
