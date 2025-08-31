"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CursorIcon } from "../icons";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="relative h-[700px]">
      {/* Right Side Image - Ultra-light fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/The Problem Section/Right Side Image.svg"
          alt="Peeker"
          width={100}
          height={36}
          className="absolute right-[-70px] top-[100px] h-[80px] w-[60px] sm:h-[150px] sm:w-[75px] md:h-[250px] md:w-[130px] lg:h-[400px] lg:w-[220px] xl:h-[506px] xl:w-[278px] xl:right-0 xl:top-[30px]"
        />
      </motion.div>

      {/* Left Side Image - Ultra-light fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        <Image
          src="/The Problem Section/Left Side Image.svg"
          alt="Peeker"
          width={100}
          height={36}
          className="absolute left-[-130px]  top-[250px] h-[214px] w-[516px] lg:h-[400px] lg:w-[516px] lg:top-[90px]"
        />
      </motion.div>

      {/* Background Image - Ultra-light fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/rightBG.svg"
          alt="Peeker"
          width={90}
          height={36}
          className="absolute right-[-150px] top-[120px] h-[80px] w-[70px] lg:h-[280px] lg:w-[556px] lg:top-[120px]"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center">
        {/* Problem Badge with Cursor - Simple fade */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/The Problem Section/Eye-brow Text.svg"
            alt="Problem Badge"
            width={100}
            height={100}
            className="h-[60px] w-[200px]"
          />

          <CursorIcon
            className="w-[100px] h-[100px] absolute bottom-[-40px] right-[-50px]"
          />
        </motion.div>

        <div className="relative flex flex-col items-center justify-center gap-2 font-['Inter:Medium',_sans-serif] font-medium leading-[0] text-[60px] lg:text-[80px] text-center tracking-[-3px] lg:tracking-[-4px]">
          {/* First line - Overpaying */}
          <motion.div 
            className="flex flex-col justify-center opacity-40 text-white text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          >
            <p className="leading-[normal] text-nowrap whitespace-pre">
              Overpaying.
            </p>
          </motion.div>

          {/* Second line - No Deliverability Tracking */}
          <motion.div 
            className="problem-title-gradient problem-title-container"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          >
            <p>No Deliverability Tracking.</p>
          </motion.div>

          {/* Third line - Still Landing in Spam */}
          <motion.div 
            className="flex flex-col justify-center opacity-40 text-white text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          >
            <p className="leading-[normal] text-nowrap whitespace-pre">
              Still Landing in Spam.
            </p>
          </motion.div>

          {/* Additional Subheader Text */}
          <motion.div 
            className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-center tracking-[-0.8px] mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
          >
            <p className="leading-[normal]">
              Under 2% reply rate means you&apos;re in already landing in spam,
              <br /> overpaying for your email infrastructure, and blind to it.
            </p>
          </motion.div>

          {/* Subheader Text */}
          <motion.div 
            className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-nowrap tracking-[-0.8px] mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          >
            <p className="leading-[normal] whitespace-pre">
              Your provider won&apos;t tell you - but we will.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
