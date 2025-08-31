"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CursorIcon } from "../icons";

const ProblemSection = () => {
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 200); // Click animation duration
    }, 1500); // Click every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[700px]">
      {/* Right Side Image */}
      <Image
        src="/The Problem Section/Right Side Image.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute right-[-70px] top-[100px] h-[80px] w-[60px] sm:h-[150px] sm:w-[75px] md:h-[250px] md:w-[130px] lg:h-[400px] lg:w-[220px] xl:h-[506px] xl:w-[278px] xl:right-0 xl:top-[30px]"
      />

      {/* Left Side Image */}
      <Image
        src="/The Problem Section/Left Side Image.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute left-[-130px]  top-[250px] h-[214px] w-[516px] lg:h-[400px] lg:w-[516px] lg:top-[90px]"
      />

      {/* Background Image */}
      <Image
        src="/rightBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute right-[-150px] top-[120px] h-[80px] w-[70px] lg:h-[280px] lg:w-[556px] lg:top-[120px]"
      />

      <div className="flex flex-col items-center justify-center">
        {/* Problem Badge with Cursor */}
        <div className="relative">
          <Image
            src="/The Problem Section/Eye-brow Text.svg"
            alt="Problem Badge"
            width={100}
            height={100}
            className="h-[60px] w-[200px]"
          />

          <motion.div
            className="absolute bottom-[-40px] right-[-50px]"
            animate={{
              scale: isClicking ? 1 : 1.4,
              rotate: isClicking ? -5 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <CursorIcon className="w-[100px] h-[100px]" />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-2 font-['Inter:Medium',_sans-serif] font-medium leading-[0] text-[60px] lg:text-[80px] text-center tracking-[-3px] lg:tracking-[-4px]">
          {/* First line - Overpaying */}
          <div className="flex flex-col justify-center opacity-40 text-white text-center">
            <p className="leading-[normal] text-nowrap whitespace-pre">
              Overpaying.
            </p>
          </div>

          {/* Second line - No Deliverability Tracking */}
          <div className="problem-title-gradient problem-title-container">
            <p>No Deliverability Tracking.</p>
          </div>

          {/* Third line - Still Landing in Spam */}
          <div className="flex flex-col justify-center opacity-40 text-white text-center">
            <p className="leading-[normal] text-nowrap whitespace-pre">
              Still Landing in Spam.
            </p>
          </div>

          {/* Additional Subheader Text */}
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-center tracking-[-0.8px] mt-10">
            <p className="leading-[normal]">
              Under 2% reply rate means you&apos;re in already landing in spam,
              <br /> overpaying for your email infrastructure, and blind to it.
            </p>
          </div>

          {/* Subheader Text */}
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-nowrap tracking-[-0.8px] mt-8">
            <p className="leading-[normal] whitespace-pre">
              Your provider won&apos;t tell you - but we will.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
