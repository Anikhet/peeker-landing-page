import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-10">
       <Image src="/How It Works Section/Eye-brow Text.svg" alt="Eye-brow Text" width={100} height={100} className="h-[60px] w-[120px]" />
          
          <div className="text-center">
            <h1 className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-[-2.2px] leading-tight mb-4">
              From Setup To Tracking To Replacement
            </h1>
            <div className="how-it-works-title-gradient how-it-works-title-container">
              <p>We Handle Everything</p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <section className="grid grid-cols-2 gap-20">
          {/* Step 1 */}
         
      
            <Image src="/How It Works Section/Step 1 Card.svg" alt="step1" width={65} height={19} className="w-full h-full object-cover" />
           
            <div className="space-y-4 flex flex-col justify-center mb-10" >
              <Image src="step1.svg" alt="step1" width={65} height={19} className="w-[65px] h-[19px]" />
              <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-[-2.2px] leading-tight">
                Connect Your Email Sender and Domains
              </h2>
              <div className="how-it-works-description">
                <p>
                  Sign up and connect your sequencer like{" "}
                  <span className="how-it-works-accent-text">Instantly</span>,{" "}
                  <span className="how-it-works-accent-text">Email Bison</span>, or{" "}
                  <span className="how-it-works-accent-text">Smartlead</span> via API key.
                </p>
                <p className="mt-4">
                  Then register your sending domains through your provider ({" "}
                  <span className="how-it-works-muted-text">GoDaddy, Porkbun</span>, etc.) in just a few clicks.
                </p>
              </div>
                    {/* Help Chat Bubble */}
        <div className="flex justify-center">
          <div className="help-chat-bubble relative">
            <div className="overflow-clip relative w-full h-full">
              {/* Background Union Image */}
              <div className="absolute flex help-chat-background items-center justify-center">
                <div className="flex-none h-[389.901px] rotate-[180deg] scale-y-[-100%] w-[2054.05px]">
                  <div className="relative w-full h-full" data-name="Union">
                    <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/83cc84d4a3cde06a372f5f70978db248afe998b5.svg" width={2054} height={390} />
                  </div>
                </div>
              </div>
              
              {/* Ellipse Image */}
              <div className="absolute h-[31px] left-[77px] top-11 w-[115px]">
                <div className="absolute help-chat-ellipse">
                  <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/e83ccae04611f59e2b1f5a2aeb854f59c6984ea9.svg" width={115} height={31} />
                </div>
              </div>
              
              {/* Help Text */}
              <div className="absolute flex flex-col help-chat-text left-[113px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                <p className="leading-[1.208] whitespace-pre">What if I need help with this?</p>
              </div>
              
              {/* Book a Call Button */}
              <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top">
                <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                  <p className="leading-[1.208] whitespace-pre">Book a Call</p>
                </div>
              </div>
            </div>
            
            {/* Border */}
            <div aria-hidden="true" className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]" />
          </div>
        </div>
            </div>
 
          </section>

          {/* Step 2 */}
          <section className="grid grid-cols-2 gap-16">
        <Image src="/How It Works Section/Step 2 Card.svg" alt="step2" width={65} height={19} className="w-full h-full object-cover" />
            <div className="space-y-4 flex flex-col justify-center mb-20" >
              <Image src="/How It Works Section/Step 2 text.svg" alt="step2" width={65} height={19} className="w-[65px] h-[19px]" />
              <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-[-2.2px] leading-tight">
                Request The Inboxes You Need
              </h2>

              <div className="how-it-works-description">
                <p>
                  Tell us how much{" "}
                  <span className="how-it-works-muted-text">volume</span>{" "}
                  you&apos;re sending,{" "}
                  <br />
                  and we&apos;ll handle the rest.
                </p>
              </div>

             
              <div className="how-it-works-description">
                <p>
                  Submit your request for{" "}
                  <span className="how-it-works-accent-text">GSuite</span> or{" "}
                  <span className="how-it-works-accent-text">Microsoft Azure inboxes</span>, and we&apos;ll match it to your sending requirements.
                </p>
              </div>
                    {/* Help Chat Bubble */}
        <div className="flex justify-center">
          <div className="help-chat-bubble relative">
            <div className="overflow-clip relative w-full h-full">
              {/* Background Union Image */}
              <div className="absolute flex help-chat-background items-center justify-center">
                <div className="flex-none h-[389.901px] rotate-[180deg] scale-y-[-100%] w-[2054.05px]">
                  <div className="relative w-full h-full" data-name="Union">
                    <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/83cc84d4a3cde06a372f5f70978db248afe998b5.svg" width={2054} height={390} />
                  </div>
                </div>
              </div>
              
              {/* Ellipse Image */}
              <div className="absolute h-[31px] left-[77px] top-11 w-[115px]">
                <div className="absolute help-chat-ellipse">
                  <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/e83ccae04611f59e2b1f5a2aeb854f59c6984ea9.svg" width={115} height={31} />
                </div>
              </div>
              
              {/* Help Text */}
              <div className="absolute flex flex-col help-chat-text left-[113px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                <p className="leading-[1.208] whitespace-pre">What if I need help with this?</p>
              </div>
              
              {/* Book a Call Button */}
              <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top">
                <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                  <p className="leading-[1.208] whitespace-pre">Book a Call</p>
                </div>
              </div>
            </div>
            
            {/* Border */}
            <div aria-hidden="true" className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]" />
          </div>
        </div>
            </div>
          </section>
       

              {/* Step 3 */}
              <section className="grid grid-cols-2 gap-20">
            <div className="w-full h-[380px] border rounded-2xl bg-gray-800/20">
            <Image src="/How It Works Section/Step 3 Card.svg" alt="step3" width={65} height={19} className="w-[65px] h-[19px]" />
            </div> 
            <div className="space-y-4 flex flex-col justify-center mb-10" >
              <Image src="/How It Works Section/Step 3 Text.svg" alt="step3" width={65} height={19} className="w-[65px] h-[19px]" />
              <h2 className="font-['Inter:Medium',_sans-serif] font-medium text-[32px] md:text-[40px] lg:text-[44px] text-white tracking-[-1.6px] leading-tight opacity-90">
                Automatically Set Up, Track and Replace
              </h2>

              <div className="how-it-works-description">
                <p>
                  We&apos;ll upload your inboxes{" "}
                  <span className="how-it-works-accent-text">directly to your</span>{" "}
                  <span className="how-it-works-accent-text">sequencer</span>,{" "}
                  <br />
                  configure warm-up settings, and verify everything is{" "}
                  <br />
                  sending properly.
                </p>
                <p className="mt-4">
                  Your{" "}
                  <span className="how-it-works-accent-text">deliverability tracking</span>{" "}
                  will be activated and{" "}
                  <br />
                  <span className="how-it-works-accent-text">replaced automatically</span>{" "}
                  if we catch any indications of spam.
                </p>
              </div>
                    {/* Help Chat Bubble */}
        <div className="flex justify-center">
                        <div className="help-chat-bubble relative">
            <div className="overflow-clip relative w-full h-full">
              {/* Background Union Image */}
              <div className="absolute flex help-chat-background items-center justify-center">
                <div className="flex-none h-[389.901px] rotate-[180deg] scale-y-[-100%] w-[2054.05px]">
                  <div className="relative w-full h-full" data-name="Union">
                    <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/83cc84d4a3cde06a372f5f70978db248afe998b5.svg" width={2054} height={390} />
                  </div>
                </div>
              </div>
              
              {/* Ellipse Image */}
              <div className="absolute h-[31px] left-[77px] top-11 w-[115px]">
                <div className="absolute help-chat-ellipse">
                  <Image alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/e83ccae04611f59e2b1f5a2aeb854f59c6984ea9.svg" width={115} height={31} />
                </div>
              </div>
              
              {/* Help Text */}
              <div className="absolute flex flex-col help-chat-text left-[113px] text-center text-nowrap text-white top-[34px] translate-x-[-50%] translate-y-[-100%]">
                <p className="leading-[1.208] whitespace-pre">What if I need help with this?</p>
              </div>
              
              {/* Book a Call Button */}
              <div className="absolute help-chat-button left-[330px] overflow-clip translate-y-[-50%] help-chat-button-top">
                <div className="absolute flex flex-col help-chat-button-text left-1/2 text-center text-nowrap translate-x-[-50%] translate-y-[-100%] help-chat-button-text-top">
                  <p className="leading-[1.208] whitespace-pre">Book a Call</p>
                </div>
              </div>
            </div>
            
            {/* Border */}
            <div aria-hidden="true" className="absolute border border-solid border-white/5 inset-0 pointer-events-none rounded-[85px]" />
          </div>
        </div>
            </div>
          </section>

  
      </div>
    </div>
  );
};

export default HowItWorks;
