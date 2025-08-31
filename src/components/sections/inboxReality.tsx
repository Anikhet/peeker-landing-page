import Image from "next/image";
import React from "react";

const InboxReality = () => {
  return (
    <div className="relative px-4">
      {/* Badge section - at the very top */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-[rgba(187,175,255,0.09)] rounded-full border border-[#dab6f3]">
          <span className="font-['Inter:Medium',_sans-serif] font-medium text-[#ddd7f9] text-sm tracking-tight">
            Inbox Reality
          </span>
        </div>
      </div>

      {/* Main heading - below badge */}
      <div className="text-center mb-16">
        <h1 className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-[-2.2px] leading-tight">
          Why Managing Deliverability at Scale Feels Impossible
        </h1>
      </div>
      
      {/* Content grid - two columns with different proportions */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
        {/* Left side - larger column (7/12) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Left image container */}
          <div className="flex justify-center">
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[700px] md:w-[400px] lg:w-[756px] relative rounded-[20px]  flex items-center justify-center">
            <Image src="/Inbox Reality Section/Left Image Full Extended.svg" alt="inbox reality" width={100} height={100} className="w-full h-full" />
            </div>
          </div>
          
          {/* Left text - below image */}
          <div className="text-left">
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] md:text-[28px] lg:text-[32px] text-white tracking-[-1.6px] leading-tight">
              You land in spam and <br/> don&apos;t even know it
            </p>
          </div>

          {/* Description text - positioned at bottom right corner of left container */}
          <div className="text-left" style={{
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
          }}>
            <p className="text-right">
              You might be landing in spam and have no idea. Warmup reply rates don&apos;t reflect where your actual emails go.
            </p>
          </div>
        </div>
        
        {/* Right side - smaller column (5/12) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Right image container */}
          <div className="flex justify-center">
            <div className="h-[300px] md:h-[400px] lg:h-[468px] w-[500px] md:w-[400px] lg:w-[516px] relative rounded-[20px] flex items-center justify-center">
            <Image src="/Inbox Reality Section/Right Image Full Extended.svg" alt="inbox reality" width={100} height={100} className="w-full h-full object-right opacity-30" />
            </div>
          </div>
          
          {/* Right text - below image */}
          <div className="text-left">
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[24px] md:text-[28px] lg:text-[32px] text-white/20 tracking-[-1.6px] leading-tight">
              You overpay, your infrastructure <br/> burns, and support disappears
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InboxReality;
