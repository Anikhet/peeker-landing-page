"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import OutlookCalculator from "./OutlookCalculator";
import GoogleCalculator from "./GoogleCalculator";
import { FigmaButton } from "../ui/figma-button";
import { motion } from "framer-motion";

interface InboxCalculatorProps {
  mode: 'pricing' | 'comparison';
}

export default function InboxCalculator({ mode }: InboxCalculatorProps) {
  const [provider, setProvider] = useState<"outlook" | "google">("outlook");

  if (mode === 'pricing') {
    return <PricingView provider={provider} setProvider={setProvider} />;
  }

  return (
    <div className="min-h-screen w-full text-center ">
      <div className="flex justify-center py-4">
        <Tabs className=""
          value={provider}
          onValueChange={(val) =>
            val && setProvider(val as "outlook" | "google")
          }
        >
          <TabsList className="bg-white/2 rounded-lg h-[44px] space-x-4  ">
         
           

            <TabsTrigger 
            className=""
            value="outlook">
              {provider === "outlook" ? (
                <FigmaButton>Outlook</FigmaButton>
              ) : (
                <span 
                  className="px-4 py-2 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] tracking-[-0.48px] leading-[normal] opacity-[0.93]"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 17.647%, #ffcf98 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "rgba(0,0,0,0.18) 0px 1.39px 4.517px"
                  }}
                >
                  OUTLOOK
                </span>
              )}
            </TabsTrigger>

            <TabsTrigger className="text-white" value="google">
              {provider === "google" ? (
                <FigmaButton>Google</FigmaButton>
              ) : (
                <span 
                  className="px-4 py-2 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] tracking-[-0.48px] leading-[normal] opacity-[0.93]"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 17.647%, #ffcf98 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "rgba(0,0,0,0.18) 0px 1.39px 4.517px"
                  }}
                >
                  GOOGLE
                </span>
              )}
            </TabsTrigger>

            
          </TabsList> 
          <TabsContent value="google">
            <GoogleCalculator mode="comparison" />
          </TabsContent>
          <TabsContent value="outlook">
            <OutlookCalculator mode="comparison" />
          </TabsContent>
      
        </Tabs>
      </div>
    </div>
  );
}

function PricingView({ provider, setProvider }: { provider: "outlook" | "google", setProvider: (provider: "outlook" | "google") => void }) {
  const [dailyEmails, setDailyEmails] = useState<number>(2000);
  const [showResults, setShowResults] = useState(false);

  const calculatePricing = () => {
    if (provider === 'google') {
      // Google: 3.5 per inbox = 20 cents per day
      // 1 domain = 3 inboxes = 60 emails per day
      const domainsNeeded = Math.ceil(dailyEmails / 60);
      const inboxesNeeded = domainsNeeded * 3;
    
      const monthlyCost = inboxesNeeded * 3.5;
      return { domainsNeeded, inboxesNeeded, monthlyCost };
    } else {
      // Outlook: $50 per domain, 500 emails per domain
      const domainsNeeded = Math.ceil(dailyEmails / 500);
      const monthlyCost = domainsNeeded * 50;
      return { domainsNeeded, inboxesNeeded: 0, monthlyCost };
    }
  };

  const results = calculatePricing();

  return (
    <div className="min-h-screen w-full text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Provider Selection */}
        <div className="flex justify-center py-4 mb-8">
          <Tabs 
            value={provider}
            onValueChange={(val) => val && setProvider(val as "outlook" | "google")}
          >
            <TabsList className="bg-white/1 rounded-lg h-[44px] space-x-4">
            
          
              <TabsTrigger value="outlook">
                {provider === "outlook" ? (
                  <FigmaButton>Outlook</FigmaButton>
                ) : (
                  <span 
                    className="px-4 py-2 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] tracking-[-0.48px] leading-[normal] opacity-[0.93]"
                    style={{
                      background: "linear-gradient(180deg, #ffffff 17.647%, #ffcf98 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "rgba(0,0,0,0.18) 0px 1.39px 4.517px"
                    }}
                  >
                    OUTLOOK
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="google">
                {provider === "google" ? (
                  <FigmaButton>Google</FigmaButton>
                ) : (
                  <span 
                    className="px-4 py-2 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] tracking-[-0.48px] leading-[normal] opacity-[0.93]"
                    style={{
                      background: "linear-gradient(180deg, #ffffff 17.647%, #ffcf98 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "rgba(0,0,0,0.18) 0px 1.39px 4.517px"
                    }}
                  >
                    GOOGLE
                  </span>
                )}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid Layout - Input Form and Results Side by Side */}
        <div className={`grid gap-8 items-start ${showResults ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Input Form */}
          <div className={`flex justify-center ${showResults ? 'lg:justify-end' : ''}`}>
            <div className="relative h-[300px] w-[350px] lg:h-[400px] lg:w-[442px] overflow-hidden">
              <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
              
              <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/2 rounded-[16px] border border-white/20 overflow-hidden">
                <div className="p-6 h-full">
                  <div className="text-left mb-4 lg:mb-8">
                    <h2 className="text-[#ffbf7e] text-lg lg:text-xl font-medium tracking-tight">
                      Get Your Pricing
                    </h2>
                  </div>

                  <div className="w-full h-px bg-[#474747] mb-4 lg:mb-8" />

                  <div className="flex flex-col gap-3 lg:gap-5">
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-xs lg:text-sm font-medium text-left mb-2 tracking-tight">
                        How many emails do you want to send per day?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)]/10 rounded-[6px] h-[40px] lg:h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          value={dailyEmails}
                          onChange={(e) => setDailyEmails(Number(e.target.value))}
                          className="bg-transparent text-white text-lg lg:text-xl font-medium text-left w-full h-full px-4 tracking-tight"
                          placeholder="2000"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center mt-4 lg:mt-8">
                      <motion.button
                        onClick={() => setShowResults(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17
                        }}
                      >
                        <Image src="/CalculateSavings.svg" alt="Calculate Pricing" width={100} height={100} className="w-[150px] h-[75px] lg:w-[200px] lg:h-[100px]" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="w-[500px] blur-2xl h-[120px] absolute bottom-0 right-0 z-[-1]" />
                </div>
        
          </div>

          {/* Results */}
          <div className={`flex justify-center ${showResults ? 'lg:justify-start' : ''}`}>
            {showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[350px] lg:max-w-[500px]"
              >
                <div className="relative h-[300px] lg:h-[400px] w-full">
                  <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
                  
                  <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                    <div className="h-full relative flex flex-col justify-center items-center p-4 lg:p-6">
                      <div className="text-center mb-4 lg:mb-6">
                        <h3 className="text-[#72aa83] text-lg lg:text-2xl font-medium tracking-tight mb-2 lg:mb-4">
                          Your Peeker Pricing
                        </h3>
                        <div className="text-[32px] lg:text-[50px] font-extrabold text-[#72aa83] mb-2">
                          ${results.monthlyCost.toFixed(0)}/month
                        </div>
                        <p className="text-[#b5b5b5] text-xs lg:text-sm">
                          {provider === 'google' 
                            ? `${results.domainsNeeded} domains • ${results.inboxesNeeded} inboxes `
                            : `${results.domainsNeeded} domains • ${results.domainsNeeded * 99} inboxes`
                          }
                        </p>
                      </div>

                      <BonusBullets />
                      <Image src="/greenTint.svg" alt="Background" width={100} height={100} className="w-[400px] h-[100px] lg:w-[600px] lg:h-[150px] absolute top-0 z-[100] blur-2xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function BonusBullets() {
  const bullets = [
    "Free Deliverability Tracker",
    "Free Inbox Placement Tests",
    "Track Inboxes From Other Providers",
    "Domain & Inbox Auto-Rotation",
    "Premium Slack Support"
  ];

  return (
    <div className="space-y-1 lg:space-y-2">
      <p className="text-[#b5b5b5] text-xs lg:text-sm font-semibold mb-2 lg:mb-3">Plus you get:</p>
      <div className="space-y-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#72aa83] rounded-full" />
            <span className="text-[#b5b5b5] text-xs lg:text-sm">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
