"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | undefined>("item-1");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const faqItems = [
    {
      id: "item-1",
      question: "How fast can I get my inboxes up and running?",
      answer:
        "Answer - Most setups are completed within 5–10 minutes. Our onboarding team walks you through every step if needed.",
    },
    {
      id: "item-2",
      question: "Do you work with my current cold email tool?",
      answer:
        "Yes, we integrate with all major cold email tools and platforms.",
    },
    {
      id: "item-3",
      question: "What happens if my inbox gets flagged or breaks?",
      answer:
        "We provide instant replacement inboxes and 24/7 support to get you back up and running immediately.",
    },
    {
      id: "item-4",
      question: "How is Peeker different from other inbox providers?",
      answer:
        "We offer real-time monitoring, instant replacements, and dedicated support that others don't provide.",
    },
    {
      id: "item-5",
      question: "Do I need to sign a long-term contract?",
      answer:
        "No, we offer month-to-month plans with no long-term commitments required.",
    },
  ];

  const handleValueChange = (value: string | undefined) => {
    setOpenItem(value);
  };

  return (
    <div ref={ref} className="min-h-screen py-10 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-10 lg:space-y-20 px-4 lg:px-0">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-2"
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
              src="/FAQS/Eye-brow Text.svg"
              alt="Eye-brow Text"
              width={100}
              height={100}
              className="h-[40px] w-[80px] lg:h-[60px] lg:w-[100px]"
            />
          </motion.div>

          <div className="text-center">
            <motion.div
              className="text-center"
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "clamp(28px, 5vw, 44px)",
                letterSpacing: "-0.05em",
                background:
                  "linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <h2>Scale With Clarity</h2>
            </motion.div>
            <motion.p 
              className="text-[14px] lg:text-[16px] font-medium text-[#bcbcbc] tracking-[-0.64px] max-w-[280px] lg:max-w-[311px] mx-auto px-4 lg:px-0"
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Everything you need to know before getting started with Peeker
              Inboxes.
            </motion.p>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="space-y-4 lg:space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleValueChange}
            className="space-y-3 lg:space-y-4 w-full lg:w-[860px] mx-auto"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="relative">
                {/* Main FAQ Content - Exact Figma styling */}
                <div className="relative backdrop-filter rounded-[12px] lg:rounded-[16px] border border-white/5 overflow-hidden">
                  <div className="relative">
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Question - Exact Figma styling */}
                      <AccordionTrigger className="p-4 lg:p-8 text-left hover:no-underline flex items-center justify-between">
                        <div
                          className="text-center transition-all duration-300"
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "clamp(16px, 4vw, 20px)",
                            letterSpacing: "-0.05em",
                            background: openItem === item.id
                              ? "linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)"
                              : "none",
                            WebkitBackgroundClip: openItem === item.id ? "text" : "unset",
                            WebkitTextFillColor: openItem === item.id ? "transparent" : "#FFFFFF",
                            backgroundClip: openItem === item.id ? "text" : "unset",
                          }}
                        >
                          <h2>{item.question}</h2>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`transition-transform duration-200 ${
                              openItem === item.id ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </AccordionTrigger>

                      {/* Answer - Exact Figma styling */}
                      <AccordionContent className="px-4 lg:px-8 pb-4 lg:pb-8">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.8px] leading-[normal]">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </div>
                  </div>

                  {/* Border - Exact Figma styling */}
                  <div
                    aria-hidden="true"
                    className="absolute border border-solid border-white/10 inset-0 pointer-events-none rounded-[12px] lg:rounded-[16px]"
                  />
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
