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
    <div className="relative h-screen lg:h-[800px] px-4 py-8 lg:py-0">
      {/* Right Side Image */}
      <Image
        src="/The Problem Section/Right Side Image.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute right-[-70px] top-[50px] h-[40px] w-[30px] lg:h-[400px] lg:w-[300px] lg:right-0 lg:top-[220px] z-10"
      />

      {/* Left Side Image */}
      <Image
        src="/The Problem Section/Left Side Image.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute left-[-130px] top-[120px] h-[100px] w-[250px] lg:h-[400px] lg:w-[516px] lg:top-[220px] z-10"
      />

      {/* Background Image */}
      <Image
        src="/rightBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute right-[-100px] top-[60px] h-[40px] w-[35px] lg:h-[280px] lg:w-[606px] lg:top-[270px]"
      />

           {/* Background Image */}
           <Image
        src="/rightBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute left-[-160px] top-[60px] h-[40px] w-[35px] lg:h-[280px] lg:w-[556px] lg:top-[260px] backdrop-blur-2xl "
      />

      <div className="flex flex-col items-center justify-center min-h-[400px] lg:h-full">
        {/* Problem Badge with Cursor */}
        <div className="relative mb-4 lg:mb-0">
          <Image
            src="/The Problem Section/Eye-brow Text.svg"
            alt="Problem Badge"
            width={100}
            height={100}
            className="h-[30px] w-[150px] lg:h-[60px] lg:w-[200px]"
          />

          <motion.div
            className="absolute bottom-[-20px] right-[-25px] lg:bottom-[-40px] lg:right-[-50px]"
            animate={{
              scale: isClicking ? 1 : 1.4,
              rotate: isClicking ? -5 : 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <CursorIcon className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-1 lg:gap-2 font-['Inter:Medium',_sans-serif] font-medium leading-[1.1] lg:leading-[0] text-[24px] lg:text-[80px] text-center tracking-[-1px] lg:tracking-[-4px] px-2 lg:px-0">
          {/* First line - Overpaying */}
          <div className="flex flex-col justify-center opacity-40 text-white text-center">
            <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">
              Overpaying.
            </p>
          </div>

          {/* Second line - No Deliverability Tracking */}
          <div className="problem-title-gradient" style={{ 
            width: '100%', 
            height: 'auto',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 'clamp(32px, 7vw, 80px)',
            lineHeight: '1.2',
            letterSpacing: '-0.05em'
          }}>
            <p className="leading-[1.2] lg:leading-[normal]">No Deliverability Tracking.</p>
          </div>

          {/* Third line - Still Landing in Spam */}
          <div className="flex flex-col justify-center opacity-40 text-white text-center">
            <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">
              Still Landing in Spam.
            </p>
          </div>

          {/* Additional Subheader Text */}
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[1.4] lg:leading-[0] not-italic relative size-full text-[#686868] text-[12px] lg:text-[20px] text-center tracking-[-0.4px] lg:tracking-[-0.8px] mt-4 lg:mt-10 px-2 lg:px-0 max-w-[300px] lg:max-w-none">
            <p className="leading-[1.4] lg:leading-[normal]">
              Under 2% reply rate means you&apos;re in already landing in spam,
              <br className="hidden lg:block" /> overpaying for your email infrastructure, and blind to it.
            </p>
          </div>

          {/* Subheader Text */}
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[1.4] lg:leading-[0] not-italic relative size-full text-[#686868] text-[12px] lg:text-[20px] text-center tracking-[-0.4px] lg:tracking-[-0.8px] mt-3 lg:mt-8 px-2 lg:px-0 max-w-[280px] lg:max-w-none">
            <p className="leading-[1.4] lg:leading-[normal] whitespace-pre">
              Your provider won&apos;t tell you - but we will.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
