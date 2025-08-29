import Image from "next/image";
import React from "react";



const ProblemSection = () => {
  return (
    <div className="relative h-[700px]">
      <Image
        src="/right2.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute right-[-70px] top-[100px] h-[80px] w-[70px] lg:h-[280px] lg:w-[416px] lg:top-[130px]"
      />
    
    <Image
        src="/rightBG.svg"
        alt="Peeker"
        width={90}
        height={36}
        priority
        className="absolute right-[-150px] top-[120px] h-[80px] w-[70px] lg:h-[280px] lg:w-[556px] lg:top-[130px]"
      />


      <Image
        src="/left2.svg"
        alt="Peeker"
        width={100}
        height={36}
        priority
        className="absolute left-[-130px]  top-[250px] h-[214px] w-[516px] lg:h-[280px] lg:w-[516px] lg:top-[130px]"
      />

      
      <div className=" flex flex-col items-center justify-center">
      {/* Problem Badge */}



      <p
          className="mx-auto mb-5 z-20 inline rounded-full px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/10"
          style={{
            background: `
							radial-gradient(27% 93.87% at 15.6% 0%, rgba(218, 182, 243, 0.3) 0%, rgba(0, 0, 0, 0) 100%),
							linear-gradient(180deg, rgba(187, 175, 255, 0) 23.61%, rgba(187, 175, 255, 0.2) 137.5%),
							rgba(187, 175, 255, 0.09)
						`,
            backgroundBlendMode: "screen",
          }}
        >
    The Problem with Cold Emails
        </p>

    <div className="relative flex flex-col items-center justify-center gap-2 font-['Inter:Medium',_sans-serif] font-medium leading-[0] text-[60px] lg:text-[80px] text-center tracking-[-3px] lg:tracking-[-4px]">
      {/* First line - Overpaying */}
      <div className="flex flex-col justify-center opacity-40 text-white text-center">
        <p className="leading-[normal] text-nowrap whitespace-pre">Overpaying.</p>
      </div>
      
      {/* Second line - No Deliverability Tracking */}
      <div className=""
           style={{ 
             width: '896px',
             height: '97px',
             fontFamily: 'Inter',
             fontStyle: 'normal',
             fontWeight: '500',
             fontSize: '80px',
             lineHeight: '97px',
             letterSpacing: '-0.05em',
             background: 'linear-gradient(177.56deg, #FFBF7E 27.53%, #FFA041 54.43%, #FFBF7E 85.38%, #FFFFFF 118.96%)',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent',
             backgroundClip: 'text'
           }}>
        <p>No Deliverability Tracking.</p>
      </div>
      
      {/* Third line - Still Landing in Spam */}
      <div className="flex flex-col justify-center opacity-40 text-white text-center">
        <p className="leading-[normal] text-nowrap whitespace-pre">Still Landing in Spam.</p>
      </div>
         {/* Additional Subheader Text */}
         <div className="flex flex-col  font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-center tracking-[-0.8px] mt-10">
        <p className="leading-[normal]">
          Under 2% reply rate means you&apos;re in already landing in spam,<br/> overpaying for your email infrastructure, and blind to it.
        </p>
      </div>
      {/* Subheader Text */}
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#686868] text-[20px] text-nowrap tracking-[-0.8px] mt-8">
        <p className="leading-[normal] whitespace-pre">
          Your provider won&apos;t tell you - but we will.
        </p>
      </div>
      
      </div>
    </div>
    </div>
  );
};

export default ProblemSection;
