"use client";
import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  // Define your hover and intensity props here
  const enableHover = true;
  const hoverIntensity = 0.5;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#05000a] text-white">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        fontSize="clamp(3rem, 15vw, 10rem)"
        fontWeight={900}
        color="#ffffff"
      >
        404
      </FuzzyText>

      <p className="mt-6 text-lg text-gray-400">
        Page not found. Please check the URL or{" "}
        <Link href="/" className="underline hover:text-gray-200">
          go back home
        </Link>
        .
      </p>
    </div>
  );
};

export default Notfound;
