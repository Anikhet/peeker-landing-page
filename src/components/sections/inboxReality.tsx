"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InboxReality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative px-4">
      {/* Main heading - below badge */}
      <motion.div 
        className="text-center flex flex-col items-center justify-center gap-5 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image 
            src="/Inbox Reality Section/Eye-brow Text.svg" 
            alt="Inbox Reality Badge" 
            width={100} 
            height={100} 
            className="h-[60px] w-[120px]" 
          />
        </motion.div>
        
        <motion.h1 
          className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] lg:text-[44px] text-white tracking-[-2.2px] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Why Managing Deliverability at Scale Feels Impossible
        </motion.h1>
      </motion.div>
      
      {/* Content grid - two columns with different proportions */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* Left side - larger column (7/12) */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* Left image container */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[700px] md:w-[400px] lg:w-[756px] relative rounded-[20px] flex items-center justify-center">
              <Image 
                src="/Inbox Reality Section/Left Image Full Extended.svg" 
                alt="inbox reality" 
                width={100} 
                height={100} 
                className="w-full h-full" 
              />
            </div>
          </motion.div>
          
          {/* Left text - below image */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] md:text-[28px] lg:text-[32px] text-white tracking-[-1.6px] leading-tight">
              You land in spam and <br/> don&apos;t even know it
            </p>
          </motion.div>

          {/* Description text - positioned at bottom right corner of left container */}
          <motion.div 
            className="text-left" 
            style={{
              width: "342px",
              marginTop: "-108px",
              fontFamily: "'Inter'",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "-0.04em",
              color: "#686868",
              marginLeft: "auto"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-right">
              You might be landing in spam and have no idea. Warmup reply rates don&apos;t reflect where your actual emails go.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Right side - smaller column (5/12) */}
        <motion.div 
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {/* Right image container */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[500px] md:w-[400px] lg:w-[516px] relative rounded-[20px] flex items-center justify-center">
              <Image 
                src="/Inbox Reality Section/Right Image Full Extended.svg" 
                alt="inbox reality" 
                width={100} 
                height={100} 
                className="w-full h-full object-right opacity-30" 
              />
            </div>
          </motion.div>
          
          {/* Right text - below image */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] md:text-[28px] lg:text-[32px] text-white/20 tracking-[-1.6px] leading-tight">
              You overpay, your infrastructure <br/> burns, and support disappears
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InboxReality;
