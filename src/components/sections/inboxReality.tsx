import React from "react";

const InboxReality = () => {
  return (
    <div className="contents ">
      {/* Main heading */}
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic text-[44px] text-center text-nowrap text-white top-[2289px] tracking-[-2.2px] translate-x-[-50%] translate-y-[-100%]" style={{ left: "calc(50% + 0.5px)" }}>
        <p className="leading-[normal] whitespace-pre">Why Managing Deliverability at Scale Feels Impossible</p>
      </div>
      

      
      {/* Left text */}
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic text-[32px] text-white top-[2931px] tracking-[-1.6px] translate-y-[-100%] w-[362px]" style={{ left: "calc(50% - 649px)" }}>
        <p className="leading-[normal]">{`You land in spam and don't even know it`}</p>
      </div>
      
      {/* Right image container */}
      <div className="absolute flex h-[468px] items-center justify-center left-[1101px] top-[2359px] w-[516px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[468px] relative rounded-[20px] w-[516px]">
            <div aria-hidden="true" className="absolute border-[#474747] border-[0.592px] border-dashed inset-0 pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
      
      {/* Left image container */}
      <div className="absolute flex h-[468px] items-center justify-center left-[303px] top-[2359px] w-[756px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[468px] relative rounded-[20px] w-[756px]">
            <div aria-hidden="true" className="absolute border-[#474747] border-[0.592px] border-dashed inset-0 pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
      
      {/* Right text */}
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic text-[32px] text-white top-[2931px] tracking-[-1.6px] translate-y-[-100%] w-[469px]" style={{ left: "calc(50% + 149px)" }}>
        <p className="leading-[normal]">You overpay, your infrastructure burns, and support disappears</p>
      </div>
      
      {/* Bottom description text */}
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic text-[#686868] text-[18px] top-[2926px] tracking-[-0.72px] translate-y-[-100%] w-[342px]" style={{ left: "calc(50% - 243px)" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`You might be landing in spam and have no idea.  Warmup reply rates don't reflect where your actual emails go.`}</p>
      </div>
      
      {/* Badge section */}
      <div className="absolute contents left-1/2 top-[2186px] translate-x-[-50%]">
        {/* Badge */}
        <div className="absolute bg-[rgba(187,175,255,0.09)] box-border content-stretch flex from-[#bbafff00] from-[23.611%] gap-[8.367px] h-[30px] items-center justify-center p-[3.347px] rounded-[55.224px] to-[#bbafff33] to-[137.5%] top-[2186px] translate-x-[-50%] w-[111px]" style={{ left: "calc(50% + 0.5px)" }}>
          <div aria-hidden="true" className="absolute border-[#dab6f3] border-[0.837px] border-solid inset-0 pointer-events-none rounded-[55.224px]" />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ddd7f9] text-[13.388px] text-center text-nowrap tracking-[-0.2678px]">
            <p className="leading-[1.1] whitespace-pre">Inbox Reality</p>
          </div>
        </div>
        
        {/* Orange rectangle */}
        <div className="absolute bg-[#ff5900] h-[30px] left-[878px] mix-blend-hue top-[2186px] w-[164px]" />
      </div>
    </div>
  );
};

export default InboxReality;
