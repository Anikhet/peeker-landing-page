"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  simpleComparisonSchema,
  type SimpleComparisonSchema,
} from "@/utils/validation";
import { formatCurrency } from "@/utils/calculator";
import Image from "next/image";
import { motion } from "framer-motion";
import EyeBrowText from "@/components/ui/auto-purchase-enabled";

interface GoogleCalculatorProps {
  mode: 'comparison';
}

interface SimpleResults {
  ourCost: number;
  savings: number;
  isCheaper: boolean;
  domainsNeeded: number;
  inboxesNeeded: number;
}

export default function GoogleCalculator({ }: GoogleCalculatorProps) {
  const [results, setResults] = useState<SimpleResults | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SimpleComparisonSchema>({
    resolver: zodResolver(simpleComparisonSchema),
    defaultValues: {
      dailyEmails: 2000,
      currentCost: 500,
      provider: 'google',
    },
  });


  const onSubmit = (data: SimpleComparisonSchema) => {
    // Google: 3.5 per inbox = 20 cents per day
    // 1 domain = 3 inboxes = 60 emails per day
    const domainsNeeded = Math.ceil(data.dailyEmails / 60);
    const inboxesNeeded = domainsNeeded * 3;
    const ourCost = inboxesNeeded * 3.5;
    const savings = data.currentCost - ourCost;
    const isCheaper = ourCost <= data.currentCost;

    setResults({
      ourCost,
      savings,
      isCheaper,
      domainsNeeded,
      inboxesNeeded,
    });
  };

  return (
    <div className="relative py-10 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Calculator Card */}
          <div className="flex-none w-full lg:w-auto">
            <div className="relative h-[400px] w-full max-w-[400px] mx-auto lg:h-[500px] lg:w-[500px] lg:max-w-none overflow-hidden">
              <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
              
              <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/2 rounded-[16px] border border-white/20 overflow-hidden">
                <div className="p-4 lg:p-6 h-full">
                  <div className="text-left mb-4 lg:mb-8">
                    <h2 className="text-[#ffbf7e] text-lg lg:text-xl font-medium tracking-tight">
                      Compare Your Costs
                    </h2>
                  </div>

                  <div className="w-full h-px bg-[#474747] mb-4 lg:mb-8" />

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 lg:gap-8">
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-xs lg:text-sm font-medium text-left mb-2 tracking-tight">
                        How many emails do you send per day?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)]/10 rounded-[6px] h-[50px] lg:h-[60px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("dailyEmails", { valueAsNumber: true })}
                          className="bg-transparent text-white text-lg lg:text-2xl font-medium text-left w-full h-full px-4 tracking-tight"
                          placeholder="2000"
                        />
                      </div>
                      {errors.dailyEmails && (
                        <p className="text-red-600 text-xs lg:text-sm mt-1 text-left">
                          {errors.dailyEmails.message}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-xs lg:text-sm font-medium text-left mb-2 tracking-tight">
                        What&apos;s your current cost per month?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)]/10 rounded-[6px] h-[50px] lg:h-[60px] flex items-center justify-center">
                        <input
                          type="number"
                          step="0.01"
                          {...register("currentCost", { valueAsNumber: true })}
                          className="bg-transparent text-white text-lg lg:text-2xl font-medium text-left w-full h-full px-4 tracking-tight"
                          placeholder="500"
                        />
                      </div>
                      {errors.currentCost && (
                        <p className="text-red-600 text-xs lg:text-sm mt-1 text-left">
                          {errors.currentCost.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center items-center">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17
                        }}
                      >
                        <Image src="/CalculateSavings.svg" alt="Calculate" width={100} height={100} className="w-[150px] h-[75px] lg:w-[200px] lg:h-[100px] cursor-pointer" />
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
              <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="w-[500px] blur-2xl h-[120px] absolute bottom-0 right-0 z-[-1]" />
            </div>

          </div>

          {/* Results Section */}
          {results && (
            <div className="flex-1 space-y-4 lg:space-y-6 w-full">
              {results.isCheaper ? (
                <CheaperResults results={results} />
              ) : (
                <NotCheaperResults results={results} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CheaperResults({ results }: { results: SimpleResults }) {
  return (
    <>
      {/* Mobile: Combined Results Card */}
      <div className="lg:hidden relative h-[760px] w-full">
        <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
        <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
          <div className="h-full relative flex flex-col justify-between px-4 py-6">
            {/* Savings */}
            <div className="flex flex-col items-center text-center gap-4">
              <div>
                <p className="text-[#72aa83] text-sm font-semibold tracking-tight mb-1">Savings Calculated:</p>
                <p className="text-[32px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.savings)}
                </p>
              </div>
              <div>
                <p className="text-[#72aa83] text-sm font-semibold tracking-tight mb-1">Annual Savings:</p>
                <p className="text-[32px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.savings * 12)}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-[#474747] my-4" />

            {/* Cost Comparison */}
            <div className="flex flex-col items-center text-center gap-6">
              <div>
                <p className="text-[#fc9292] text-sm font-semibold tracking-tight mb-1">Your Current Cost</p>
                <p className="text-[24px] font-medium tracking-tight bg-gradient-to-b from-[#fc9292] from-[16.848%] to-[#ff0000] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.ourCost + results.savings)}/month
                </p>
              </div>
              <div>
                <p className="text-[#72aa83] text-sm font-semibold tracking-tight mb-1 flex items-center justify-center gap-2">
                  Our Offer
                  <EyeBrowText />
                </p>
                <p className="text-[24px] font-medium tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.ourCost)}/month
                </p>
                <p className="text-[#b5b5b5] text-xs mt-2">{results.domainsNeeded} domains • {results.inboxesNeeded} inboxes</p>
              </div>
              <BonusBullets />
            </div>

            <div className="w-full h-px bg-[#474747] my-4" />

            {/* CTA */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[darkgrey] tracking-[-0.8px] leading-[normal] text-center">
                Ready to start saving <span className="font-bold bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">{formatCurrency(results.savings)}</span> per month?
              </p>
              <button
                onClick={() => {
                  window.location.href = "https://cal.com/conrad-niedzielski/peeker-inboxes";
                }}
                className="cursor-pointer"
              >
                <Image src="/GetStarted.svg" alt="Get Started" width={100} height={100} className="w-[140px] h-[90px] cursor-pointer hover:scale-105 transition-transform" />
              </button>
            </div>

          
            <Image src="/greenTint.svg" alt="Background" width={100} height={100} className="w-[500px] h-[200px] absolute top-0 z-[100] blur-2xl" />

            <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="w-[500px] h-[200px] absolute bottom-0 z-[100] blur-2xl" />
          </div>
        </div>
      </div>

      {/* Desktop: Existing Results Cards */}
      <div className="hidden lg:block">
        {/* Main Savings Card */}
        <div className="relative h-[220px] w-full lg:w-[900px]">
          <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
          
          <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
            <div className="h-full relative flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row justify-center gap-36 items-center px-4 lg:px-16 py-4 lg:py-0">
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                  <p className="text-[#72aa83] text-sm lg:text-sm font-semibold tracking-tight mb-1">
                    Monthly Savings :
                  </p>
                  <p className="text-[32px] lg:text-[40px] xl:text-[56px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                    {formatCurrency(results.savings)}
                  </p>
                </div>
   
                <div className="text-center lg:text-left">
                  <p className="text-[#72aa83] text-sm lg:text-sm font-semibold tracking-tight mb-1">
                    Annual Savings:
                  </p>
                  <p className="text-[32px] lg:text-[40px] xl:text-[56px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                    {formatCurrency(results.savings * 12)}
                  </p>
                </div>
              </div>

    
              <Image src="/greenTint.svg" alt="Background" width={100} height={100} className="w-[500px] h-[220px] absolute top-0 z-[100] blur-lg" />
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="relative h-[240px] w-full lg:w-[900px] mt-6">
          <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
          
          <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
            <div className="h-full relative flex flex-col justify-center px-4 lg:px-16 py-4">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-0">
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                  <p className="text-[#fc9292] text-sm lg:text-sm font-semibold tracking-tight mb-1">
                    Your Current Cost
                  </p>
                  <p className="text-[24px] lg:text-[24px] font-medium tracking-tight bg-gradient-to-b from-[#fc9292] from-[16.848%] to-[#ff0000] to-[163.59%] bg-clip-text text-transparent">
                    {formatCurrency(results.ourCost + results.savings)}/month
                  </p>
                </div>

                <div className="text-center lg:text-left mb-4 lg:mb-0">
                  <p className="text-[#72aa83] text-sm lg:text-sm font-semibold tracking-tight mb-1 flex items-center justify-center lg:justify-start gap-2 lg:gap-4">
                    Our Offer
                    <EyeBrowText />
                  </p>
                  <p className="text-[24px] lg:text-[24px] font-medium tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                    {formatCurrency(results.ourCost)}/month
                  </p>
                  <p className="text-[#b5b5b5] text-xs lg:text-sm mt-2">
                    {results.domainsNeeded} domains • {results.inboxesNeeded} inboxes
                  </p>
                </div>
                <div className="hidden lg:block border border-white/20 p-5 rounded-[16px]">
                  <BonusBullets/>
                </div>
              </div>
              <div className="lg:hidden">
                <BonusBullets/>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative h-[110px] w-full lg:w-[900px] mt-6 border border-white/10 rounded-[16px] overflow-hidden">
          <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center lg:gap-8  lg:px-4 lg:py-4">
            <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="absolute w-[400px] h-[120px] bottom-0 z-[100] blur-lg" />
            
            <div className="text-center">
              <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[16px] xl:text-[20px] text-[darkgrey] tracking-[-0.8px] leading-[normal]">
                Ready to start saving{" "}
                <span className="font-bold bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.savings)}
                </span>{" "}
                per month?
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  window.location.href = "https://cal.com/conrad-niedzielski/peeker-inboxes";
                }}
                className="cursor-pointer"
              >
                <Image src="/GetStarted.svg" alt="Get Started" width={100} height={100} className="w-[150px] h-[100px] cursor-pointer hover:scale-105 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NotCheaperResults({ results }: { results: SimpleResults }) {
  return (
    <>
      {/* Not Cheaper Message */}
      <div className="relative h-[600px] lg:h-[500px] w-full lg:w-[700px]">
        <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
        
        <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
          <div className="h-full relative flex flex-col justify-center items-center text-center p-6 lg:p-6">
            <h3 className="text-[#ffbf7e] text-xl lg:text-2xl font-semibold tracking-tight mb-6 lg:mb-4">
              Let&apos;s Talk About Your Pricing
            </h3>
            <p className="text-[#b5b5b5] text-base lg:text-lg mb-8 lg:mb-6 max-w-md">
              Your current cost of {formatCurrency(results.ourCost + results.savings)} is already competitive. 
              Let&apos;s discuss how we can help optimize your setup.
            </p>
            
            <div className="space-y-6 lg:space-y-4 flex flex-col items-center">
              <BonusBullets />
              
              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
                <button onClick={() => {
                  window.location.href = "https://cal.com/conrad-niedzielski/peeker-inboxes";
                }} className="bg-white text-black font-medium px-6 py-3 lg:px-6 lg:py-3 rounded-full cursor-pointer hover:scale-105 transition-transform text-base lg:text-base min-w-[140px] lg:min-w-0">
                  Book a Call
                </button>
                <button
                  onClick={() => {
                    window.location.href = "https://cal.com/conrad-niedzielski/peeker-inboxes";
                  }}
                >
                  <Image src="/GetStarted.svg" alt="Let's Talk" width={100} height={100} className="w-[150px] h-[90px] lg:w-[150px] lg:h-[100px] cursor-pointer hover:scale-105 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="w-[600px] h-[320px] absolute bottom-0 z-[100] blur-2xl" />
      </div>
    </>
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
    <div className="space-y-2 lg:space-y-2">
      <p className="text-[#b5b5b5] text-xs lg:text-sm font-semibold mb-2 lg:mb-3">Plus you get:</p>
      <div className="space-y-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-3 lg:gap-2">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#72aa83] rounded-full" />
            <span className="text-[#b5b5b5] text-xs lg:text-sm">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 