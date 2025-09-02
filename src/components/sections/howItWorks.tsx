"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="min-h-screen py-12 lg:py-20 px-4 lg:px-0 relative ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 0.1, scale: 1, filter: "blur(3xl)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image src="orangeTint.svg" alt="orangeTint" width={100} height={101} className="w-60 h-40 object-cover absolute top-10 blur-3xl opacity-10 left-0" />
            </motion.div>
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-20">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 lg:gap-10"
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
              src="/How It Works Section/Eye-brow Text.svg"
              alt="Eye-brow Text"
              width={100}
              height={100}
              className="h-[40px] w-[80px] sm:h-[50px] sm:w-[100px] lg:h-[60px] lg:w-[120px]"
            />
          </motion.div>

          <div className="text-center px-2 lg:px-0">
            <motion.h1 
              className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-white tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.2px] lg:tracking-[-2.2px] leading-tight mb-4 max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-none mx-auto"
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              From Setup To Tracking To Replacement
            </motion.h1>
            <motion.div
              className="how-it-works-title-gradient how-it-works-title-container"
              style={{
                fontSize: "clamp(24px, 6vw, 44px)",
                lineHeight: "1.2",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                letterSpacing: "-0.05em",
              }}
              initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <p className="leading-[1.2] lg:leading-[normal]">
                We Handle Everything
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/How It Works Section/1st card.png"
              alt="step1"
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div 
            className="space-y-4 flex flex-col justify-center mb-8 lg:mb-10 px-2 lg:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="step1.svg"
              alt="step1"
              width={65}
              height={19}
              className="w-[65px] h-[19px]"
            />
            <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-white tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.2px] lg:tracking-[-2.2px] leading-tight">
              Connect Your Email Sender and Domains
            </h2>
            <div className="how-it-works-description">
              <p>
                Sign up and connect your sequencer like{" "}
                <span className="how-it-works-accent-text">Instantly</span>,{" "}
                <span className="how-it-works-accent-text">Email Bison</span>,
                or <span className="how-it-works-accent-text">Smartlead</span>{" "}
                via API key.
              </p>
              <p className="mt-4">
                Then register your sending domains through your provider ({" "}
                <span className="how-it-works-muted-text">
                  GoDaddy, Porkbun
                </span>
                , etc.) in just a few clicks.
              </p>
            </div>
            {/* Help Chat Bubble */}
            <div className="">
              <div className="help-chat-bubble relative">
                <div className="overflow-clip relative w-full h-full">
                  {/* Ellipse Image */}
                  <div className="absolute h-[31px] left-[77px] top-11 w-[115px]">
                    <div className="absolute help-chat-ellipse">
                      <Image
                        alt=""
                        className="block w-full h-full"
                        src="orangeTint.svg"
                        width={205}
                        height={101}
                      />
                    </div>
                  </div>

                  {/* Help Text */}
                  <div className="absolute flex flex-col help-chat-text left-[113px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                    <p className="leading-[1.208] whitespace-pre">
                      What if I need help with this?
                    </p>
                  </div>

                  {/* Book a Call Button */}
                  <Link href="https://app.peeker.ai/signup" target="_blank" rel="noopener noreferrer">
                    <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top cursor-pointer">
                      <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                        <p className="leading-[1.208] whitespace-pre">
                          Get Started
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Border */}
                <div
                  aria-hidden="true"
                  className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Step 2 */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/How It Works Section/2nd card.png"
              alt="step2"
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div 
            className="space-y-4 flex flex-col justify-center mb-16 lg:mb-20 px-2 lg:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <Image
              src="/How It Works Section/Step 2 text.svg"
              alt="step2"
              width={65}
              height={19}
              className="w-[65px] h-[19px]"
            />
            <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-white tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.2px] lg:tracking-[-2.2px] leading-tight">
              Request The Inboxes You Need
            </h2>

            <div className="how-it-works-description">
              <p>
                Tell us how much{" "}
                <span className="how-it-works-muted-text">volume</span>{" "}
                you&apos;re sending, <br className="hidden sm:block" />
                and we&apos;ll handle the rest.
              </p>
            </div>

            <div className="how-it-works-description">
              <p>
                Submit your request for{" "}
                <span className="how-it-works-accent-text">GSuite</span> or{" "}
                <span className="how-it-works-accent-text">
                  Microsoft Azure inboxes
                </span>
                , and we&apos;ll match it to your sending requirements.
              </p>
            </div>
            {/* Help Chat Bubble */}
            <div className="">
              <div className="help-chat-bubble relative">
                <div className="overflow-clip relative w-full h-full">
                  {/* Ellipse Image */}
                  <div className="absolute h-[31px] left-[77px] top-11 w-[115px]">
                    <div className="absolute help-chat-ellipse">
                      <Image
                        alt=""
                        className="block w-full h-full"
                        src="orangeTint.svg"
                        width={205}
                        height={101}
                      />
                    </div>
                  </div>

                  {/* Help Text */}
                  <div className="absolute flex flex-col help-chat-text left-[153px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                    <p className="leading-[1.208] whitespace-pre ">
                    What if I don’t know how many inboxes I need?
                    </p>
                  </div>

                  {/* Book a Call Button */}
                  <Link href="https://app.peeker.ai/signup" target="_blank" rel="noopener noreferrer">
                    <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top cursor-pointer">
                      <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                        <p className="leading-[1.208] whitespace-pre">
                          Get Started
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Border */}
                <div
                  aria-hidden="true"
                  className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Step 3 */}
        <motion.section 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/How It Works Section/3rd card.png"
              alt="step3"
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
          </motion.div>
         
          <motion.div 
            className="space-y-4 flex flex-col justify-center mb-8 lg:mb-10 px-2 lg:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            <Image
              src="/How It Works Section/Step 3 Text.svg"
              alt="step3"
              width={65}
              height={19}
              className="w-[65px] h-[19px]"
            />
            <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-white tracking-[-1.2px] sm:tracking-[-1.4px] md:tracking-[-1.6px] lg:tracking-[-1.6px] leading-tight opacity-90">
              Automatically Set Up, Track and Replace
            </h2>

            <div className="how-it-works-description">
              <p>
                We&apos;ll upload your inboxes{" "}
                <span className="how-it-works-accent-text">
                  directly to your
                </span>{" "}
                <span className="how-it-works-accent-text">sequencer</span>,{" "}
                <br className="hidden sm:block" />
                configure warm-up settings, and verify everything is{" "}
                <br className="hidden sm:block" />
                sending properly.
              </p>
              <p className="mt-4">
                Your{" "}
                <span className="how-it-works-accent-text">
                  deliverability tracking
                </span>{" "}
                will be activated and <br className="hidden sm:block" />
                <span className="how-it-works-accent-text">
                  replaced automatically
                </span>{" "}
                if we catch any indications of spam.
              </p>
            </div>
            {/* Help Chat Bubble */}
            <div className="flex ">
              <div className="help-chat-bubble relative">
                <div className="overflow-clip relative w-full h-full">
                  {/* Ellipse Image */}
                  <div className="absolute h-[21px] left-[77px] top-11 w-[215px]">
                    <div className="absolute help-chat-ellipse">
                      <Image
                        alt=""
                        className="block w-full h-full"
                        src="orangeTint.svg"
                        width={205}
                        height={101}
                      />
                    </div>
                  </div>

                  {/* Help Text */}
                  <div className="absolute flex flex-col help-chat-text left-[133px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                    <p className="leading-[1.208] whitespace-pre">
                    What if I have special set up requests?
                    </p>
                  </div>

                  {/* Book a Call Button */}
                  <Link href="https://app.peeker.ai/signup" target="_blank" rel="noopener noreferrer">
                    <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top cursor-pointer">
                      <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                        <p className="leading-[1.208] whitespace-pre">
                          Get Started
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Border */}
                <div
                  aria-hidden="true"
                  className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]"
                />
              </div>
            </div>
          </motion.div>

        </motion.section>
        
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 0.1, scale: 1, filter: "blur(3xl)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
      >
        <Image src="orangeTint.svg" alt="orangeTint" width={205} height={101} className="w-60 h-full object-cover absolute bottom-10 blur-3xl opacity-10 left-0" />
      </motion.div>
    </div>
  );
};

export default HowItWorks;
