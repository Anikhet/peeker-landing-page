"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CursorIcon } from "../icons";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative h-screen lg:h-[800px] px-4 py-8 lg:py-0 overflow-hidden">
      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-[-70px] top-[50px] lg:right-0 lg:top-[220px] z-10"
      >
        <Image
          src="/The Problem Section/Right.png"
          alt="Peeker"
          width={1646}
          height={1547}
          className="h-[40px] w-[30px] lg:h-[400px] lg:w-[300px] object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 0.6, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/orangeTint.svg"
          alt="Peeker"
          width={100}
          height={36}
          className=" absolute w-1/2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 z-10 scale-y-[-1]"
        />
      </motion.div>

      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute left-[-130px] top-[120px] lg:top-[220px] z-10"
      >
        <Image
          src="/The Problem Section/Left Side Image.png"
          alt="Peeker"
          width={1393}
          height={1655}
          className="h-[100px] w-[250px] lg:h-[400px] lg:w-[516px] object-contain"
        />
      </motion.div>

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/rightBG.svg"
          alt="Peeker"
          width={100}
          height={36}
          className="absolute right-[-100px] top-[60px] h-[40px] w-[35px] lg:h-[280px] lg:w-[606px] lg:top-[270px]"
        />
      </motion.div>

           {/* Background Image */}
           <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
           <Image
        src="/leftBG.svg"
        alt="Peeker"
        width={100}
        height={36}
        className="absolute left-[-160px] top-[60px] h-[40px] w-[35px] lg:h-[280px] lg:w-[556px] lg:top-[260px] backdrop-blur-2xl "
      />
      </motion.div>

      <div className="flex flex-col items-center justify-center min-h-[400px] lg:h-full">
        {/* Problem Badge with Cursor */}
        <motion.div 
          className="relative mb-4 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/The Problem Section/Eye-brow Text.svg"
            alt="Problem Badge"
            width={100}
            height={100}
            className="h-[30px] w-[150px] lg:h-[60px] lg:w-[200px]"
          />

          <motion.div 
            className="absolute bottom-[-20px] right-[-25px] lg:bottom-[-40px] lg:right-[-50px]"
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -10, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <CursorIcon className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex flex-col items-center justify-center gap-1 lg:gap-2 font-['Inter:Medium',_sans-serif] font-medium leading-[1.1] lg:leading-[0] text-[24px] lg:text-[80px] text-center tracking-[-1px] lg:tracking-[-4px] px-2 lg:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* First line - Overpaying */}
          <motion.div 
            className="flex flex-col justify-center opacity-40 text-white text-center"
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={isInView ? { opacity: 0.4, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">
              Overpaying.
            </p>
          </motion.div>

          {/* Second line - No Deliverability Tracking */}
          <motion.div 
            className="problem-title-gradient" 
            style={{ 
              width: '100%', 
              height: 'auto',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 'clamp(32px, 7vw, 80px)',
              lineHeight: '1.2',
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <p className="leading-[1.2] lg:leading-[normal]">No Deliverability Tracking.</p>
          </motion.div>

          {/* Third line - Still Landing in Spam */}
          <motion.div 
            className="flex flex-col justify-center opacity-40 text-white text-center"
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={isInView ? { opacity: 0.4, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">
              Still Landing in Spam.
            </p>
          </motion.div>

          {/* Additional Subheader Text */}
          <motion.div 
            className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[1.4] lg:leading-[0] not-italic relative size-full text-[#686868] text-[12px] lg:text-[20px] text-center tracking-[-0.4px] lg:tracking-[-0.8px] mt-4 lg:mt-10 px-2 lg:px-0 max-w-[300px] lg:max-w-none"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="leading-[1.4] lg:leading-[normal]">
              Under 2% reply rate means you&apos;re in already landing in spam,
              <br className="hidden lg:block" /> overpaying for your email infrastructure, and blind to it.
            </p>
          </motion.div>

          {/* Subheader Text */}
          <motion.div 
            className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[1.4] lg:leading-[0] not-italic relative size-full text-[#686868] text-[12px] lg:text-[20px] text-center tracking-[-0.4px] lg:tracking-[-0.8px] mt-3 lg:mt-8 px-2 lg:px-0 max-w-[280px] lg:max-w-none"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <p className="leading-[1.4] lg:leading-[normal] whitespace-pre">
              Your provider won&apos;t tell you - but we will.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSection;
