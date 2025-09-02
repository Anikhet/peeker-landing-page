"use client";

import React, { useRef } from 'react'
import InboxCalculator from '../calculator/InboxCalculator'
import { motion, useInView } from 'framer-motion'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Calculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Calculator Header - From Figma Frame */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="bg-clip-text bg-white flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[44px] text-center text-white tracking-[-2.2px]" 
            style={{ WebkitTextFillColor: "transparent" }}
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="leading-[normal]">
            <h1
            className={`mx-auto z-20 w-full lg:w-[644px] text-center font-medium ${inter.className}
                text-[44px] leading-[40px] lg:text-[44px] lg:leading-[73px] tracking-[-0.05em]
                bg-clip-text text-transparent hero-title-gradient`}
 
          >Calculate Inbox Savings While

          </h1>
              <span className="text-white">
                Staying Out of Spam
              </span>
            </p>
          </motion.div>
          
          {/* Subtitle - From Selected Figma Frame */}
          <motion.div 
            className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#bcbcbc] text-[16px] text-center tracking-[-0.64px] mt-6"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="leading-[normal]">
              Uncover your true inbox costs and how Peeker <br/> automates deliverability, replacements, and support.
            </p>
          </motion.div>
        </motion.div>

        {/* Calculator Component */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <InboxCalculator />
        </motion.div>
      </div>
    </div>
  )
}

export default Calculator
