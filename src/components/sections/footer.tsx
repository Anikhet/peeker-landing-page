"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#070707] relative  ">
      <Image
        src="/footerTint.svg"
        alt="Footer BG"
        width={100}
        height={100}
        className="w-full absolute top-0 left-0"
      />
      <div className=" relative">
        {/* Background Decorative Elements */}

        {/* Main Content */}
        <div className="relative z-10 justify-between flex flex-col lg:flex-row p-8 lg:p-20 pb-20 lg:pb-60">
          {/* Top Section - Call to Action */}
          <div className="text-left space-y-6">
            <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] lg:text-[36px] text-white tracking-[-1.8px] leading-tight">
              Ready to use self healing inboxes?
            </h2>

            {/* Feature Points */}
            <div className=" ">
              <div className="text-left flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
                <h2
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    letterSpacing: "-0.05em",
                    background:
                      "linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Month-to-month plans
                </h2>
                <span className="text-[#bcbcbc] text-[14px] lg:text-base">
                  {" "}
                  — cancel anytime, no long-term lock-in
                </span>
              </div>
              <div className="text-left flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
                <h2
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    letterSpacing: "-0.05em",
                    background:
                      "linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Free automatic setup
                </h2>{" "}
                <span className="text-[#bcbcbc] text-[14px] lg:text-base">
                  {" "}
                  — we handle the entire inbox and tracking configuration for
                  you
                </span>
              </div>
            </div>

            {/* Middle Section - Community Call to Action */}
            <div className="text-left mt-20 lg:mt-40">
              <h3 className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] lg:text-[36px] text-white tracking-[-1.8px] leading-tight">
                Join our Cold Email Slack community
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4   items-center">
              {/* Badge */}
              <div
                className=" flex justify-center items-center gap-3 rounded-full px-3 py-1 text-[16px] lg:text-[21px]  text-neutral-300 ring-1 ring-white/10"
                style={{
                  background: `
              radial-gradient(27% 93.87% at 15.6% 0%, rgba(218, 182, 243, 0.3) 0%, rgba(0, 0, 0) 100%),
              linear-gradient(180deg, rgba(187, 175, 255, 0) 23.61%, rgba(187, 175, 255, 0.2) 137.5%),
              rgba(187, 175, 255, 0.09)
            `,
                  backgroundBlendMode: "screen",
                }}
              >
                <Image
                  src="/slack.svg"
                  alt="Slack"
                  width={100}
                  height={100}
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"
                />
                <p className="text-[#DDD7F9] font-medium">Join our Slack</p>
              </div>
              {/* Get Started Button */}
              <div className="relative">
                <Image
                  src="/GetStarted.svg"
                  alt="Get Started"
                  width={100}
                  height={100}
                  className="w-[120px] h-[80px] lg:w-[150px] lg:h-[100px] cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section - Navigation and Legal */}
          <div className="flex flex-col lg:flex-col justify-between items-center lg:items-end text-right">
            {/* Left Side - Navigation */}
            <div className="flex flex-col space-y-4">
              <Link
                href="/pricing"
                className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.8px] leading-[normal] hover:text-[#bcbcbc] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/process"
                className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.8px] leading-[normal] hover:text-[#bcbcbc] transition-colors"
              >
                Process
              </Link>
              <Link
                href="/reviews"
                className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.8px] leading-[normal] hover:text-[#bcbcbc] transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/features"
                className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-white tracking-[-0.8px] leading-[normal] hover:text-[#bcbcbc] transition-colors"
              >
                Features
              </Link>
            </div>
            {/* Right Side - Legal and Copyright */}
            <div className="text-right mb-20">
              <p className="font-['Inter:Medium',_sans-serif] font-medium text-[20px] text-white tracking-[-0.8px] leading-[normal] ">
                © 2025 Peeker Inboxes. All rights reserved.
              </p>
              <div className="font-['Inter:Medium',_sans-serif] font-medium text-[20px] text-white tracking-[-0.8px] leading-[normal]">
                <Link
                  href="/privacy"
                  className="hover:text-[#bcbcbc] transition-colors"
                >
                  Privacy Policy
                </Link>
                {" · "}
                <Link
                  href="/terms"
                  className="hover:text-[#bcbcbc] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Background Image */}
      <div className="relative ">
        <Image
          src="/Footer/Footer Text.svg"
          alt="Footer Text"
          width={100}
          height={100}
          className="w-full absolute bottom-0  "
        />
      </div>
    </div>
  );
};

export default Footer;
