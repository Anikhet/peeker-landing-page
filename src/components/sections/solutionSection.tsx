
"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className='min-h-[600px] lg:min-h-[800px]  flex flex-col justify-center items-center py-12 lg:py-20 px-4 lg:px-0 relative overflow-hidden'>
      {/* Background Images */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/Solution Section/Left solution.png"
          alt="Solution Left"
          width={800}
          height={600}
          priority
          className="absolute left-[-100px] hidden lg:block top-[230px] h-[200px] w-[300px] lg:h-[400px] lg:w-[600px] z-10 object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -120 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/leftBG.png"
          alt="Solution Left"
          width={800}
          height={600}
          priority
          className="absolute left-[-100px] hidden lg:block top-[220px] h-[200px] w-[300px] lg:h-[400px] lg:w-[600px] z-5 object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/Solution Section/right solution.png"
          alt="Solution Right"
          width={800}
          height={600}
          priority
          className="absolute right-[-100px] hidden lg:block top-[150px] h-[200px] w-[300px] lg:h-[400px] lg:w-[600px] z-10 object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/rightBG.png"
          alt="Solution Right"
          width={800}
          height={600}
          priority
          className="absolute right-[-100px] hidden lg:block top-[100px] h-[200px] w-[300px] lg:h-[400px] lg:w-[600px] z-5 object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/Solution Section/Bottom Solution.png"
          alt="Solution Bottom"
          width={1200}
          height={400}
          priority
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:block h-[150px] w-[800px] lg:h-[200px] lg:w-[1000px] z-10 object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/leftBG.png"
          alt="Solution Bottom"
          width={1200}
          height={400}
          priority
          className="absolute  bottom-[-60px] left-[40%] transform -translate-x-1/2 hidden lg:block h-[150px] w-[800px] lg:h-[200px] lg:w-[1000px] z-6 object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/rightBG.png"
          alt="Solution Bottom"
          width={1200}
          height={400}
          priority
          className="absolute bottom-[-60px] left-[59%] transform -translate-x-1/2 hidden lg:block h-[150px] w-[800px] lg:h-[200px] lg:w-[1000px] z-6 object-contain"
        />
      </motion.div>

      {/* Header Section */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-5 mb-8 lg:mb-12"
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
            src="/Solution Section/Eye-brow Text.svg" 
            alt="Solution Badge" 
            width={100} 
            height={100} 
            className="h-[40px] w-[80px] sm:h-[50px] sm:w-[100px] lg:h-[30px] lg:w-[100px] object-contain" 
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col justify-center opacity-40 text-white font-['Inter:Medium',_sans-serif] font-medium leading-[1.2] lg:leading-[0] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] text-center tracking-[-2px] sm:tracking-[-2.5px] md:tracking-[-3px] lg:tracking-[-4px] mb-6 lg:mb-8 px-2 lg:px-0"
        initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
        animate={isInView ? { opacity: 0.4, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <p className="leading-[1.2] lg:leading-[normal] text-nowrap whitespace-pre">Struggle with Spam No Longer</p>
      </motion.div>
      <motion.div 
        className="text-center px-2 lg:px-0 mb-50"
        style={{ 
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: 'clamp(32px, 8vw, 70px)',
          lineHeight: '1.2',
          letterSpacing: '-0.05em',
          background: 'linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
        initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
           <p className="leading-[1.2] lg:leading-[normal]"> Introducing Self Healing Inboxes</p>
      </motion.div>
    </div>
  )
}

export default SolutionSection