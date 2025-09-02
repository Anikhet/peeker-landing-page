"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InboxReality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Image 
            src="/Inbox Reality Section/Eye-brow Text.svg" 
            alt="Inbox Reality Badge" 
            width={100} 
            height={100} 
            className="h-[40px] w-[80px] sm:h-[50px] sm:w-[100px] lg:h-[60px] lg:w-[120px] object-contain" 
          />
        </motion.div>
        
        <motion.h1 
          className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[44px] text-white tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2px] lg:tracking-[-2.2px] leading-tight px-2 lg:px-0 max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-none"
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Why Managing Deliverability at Scale Feels Impossible
        </motion.h1>
      </motion.div>
      
      {/* Content grid - two columns with different proportions */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {/* Left side - larger column (7/12) */}
        <motion.div 
          className="lg:col-span-6 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {/* Left image container */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[700px] md:w-[400px] lg:w-[756px] relative rounded-[20px] flex items-center justify-center overflow-hidden group">
              {/* Short Image - Default */}
              <div className="absolute inset-0 opacity-100 group-hover:opacity-0 scale-90 group-hover:scale-85 transition-all duration-300 ease-out">
                <Image 
                  src="/Inbox Reality Section/Left Image Short.png" 
                  alt="inbox reality short" 
                  width={2112} 
                  height={1872} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {/* Extended Image - On Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-100 transition-all duration-300 ease-out">
                <Image 
                  src="/Inbox Reality Section/Left Image Full Extended.png" 
                  alt="inbox reality extended" 
                  width={756} 
                  height={468} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </motion.div>
          
          {/* Left text - below image */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
              fontSize: "14px",
              lineHeight: "22px",
              letterSpacing: "-0.04em",
              color: "#686868",
              marginLeft: "auto"
            }}
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <p className="text-right text-[14px">
              You might be landing in spam and have no idea. Warmup reply rates don&apos;t reflect where your actual emails go.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Right side - smaller column (5/12) */}
        <motion.div 
          className="lg:col-span-6 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Right image container */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[700px] md:w-[400px] lg:w-[756px] relative rounded-[20px] flex items-center justify-center overflow-hidden group">
              {/* Short Image - Default */}
              <div className="absolute inset-0 opacity-100 group-hover:opacity-0 scale-90 group-hover:scale-85 transition-all duration-300 ease-out">
                <Image 
                  src="/Inbox Reality Section/Right Image Short.png" 
                  alt="inbox reality short" 
                  width={2032} 
                  height={1872} 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {/* Extended Image - On Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-300 ease-out">
                <Image 
                  src="/Inbox Reality Section/Right Image Full Extended.png" 
                  alt="inbox reality extended" 
                  width={3024} 
                  height={1872} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right text - below image */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] md:text-[28px] lg:text-[32px] text-white/20 tracking-[-1.6px] leading-tight">
              You overpay, your infrastructure <br/> burns, and support disappears
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InboxReality;
