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
    <div className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 items-start">
          {/* Calculator Card */}
          <div className="flex-none">
            <div className="relative h-[500px] w-[500px]">
              <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
              
              <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/2 rounded-[16px] border border-white/20 overflow-hidden">
                <div className="p-6 h-full">
                  <div className="text-left mb-8">
                    <h2 className="text-[#ffbf7e] text-xl font-medium tracking-tight">
                      Compare Your Costs
                    </h2>
                  </div>

                  <div className="w-full h-px bg-[#474747] mb-8" />

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-left mb-2 tracking-tight">
                        How many emails do you send per day?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)]/10 rounded-[6px] h-[60px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("dailyEmails", { valueAsNumber: true })}
                          className="bg-transparent text-white text-2xl font-medium text-left w-full h-full px-4 tracking-tight"
                          placeholder="2000"
                        />
                      </div>
                      {errors.dailyEmails && (
                        <p className="text-red-600 text-sm mt-1 text-left">
                          {errors.dailyEmails.message}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-left mb-2 tracking-tight">
                        What&apos;s your current cost per month?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)]/10 rounded-[6px] h-[60px] flex items-center justify-center">
                        <input
                          type="number"
                          step="0.01"
                          {...register("currentCost", { valueAsNumber: true })}
                          className="bg-transparent text-white text-2xl font-medium text-left w-full h-full px-4 tracking-tight"
                          placeholder="500"
                        />
                      </div>
                      {errors.currentCost && (
                        <p className="text-red-600 text-sm mt-1 text-left">
                          {errors.currentCost.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center items-center mt-8">
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
                        <Image src="/CalculateSavings.svg" alt="Calculate" width={100} height={100} className="w-[200px] h-[100px]" />
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {results && (
            <div className="flex-1 space-y-6">
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
      {/* Main Savings Card */}
      <div className="relative h-[220px] w-full lg:w-[900px]">
        <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
        
        <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
          <div className="h-full relative flex flex-col justify-center">
            <div className="flex justify-between items-center px-16 mb-4">
              <div className="text-left">
                <p className="text-[#72aa83] text-xs lg:text-sm font-semibold tracking-tight">
                  Savings Calculated:
                </p>
              </div>
              <div className="text-left">
                <p className="text-[#b5b5b5] text-xs lg:text-sm font-semibold tracking-tight">
                  Monthly Savings:
                </p>
              </div>
              <div className="text-left">
                <p className="text-[#b5b5b5] text-xs lg:text-sm font-semibold tracking-tight">
                  Annual Savings:
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center px-16">
              <div className="text-left">
                <p className="text-[40px] lg:text-[56px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                  {formatCurrency(results.savings)}
                </p>
              </div>
              <div className="text-left">
                <p className="text-[24px] lg:text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                  {formatCurrency(results.savings)}
                </p>
              </div>
              <div className="text-left">
                <p className="text-[24px] lg:text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                  {formatCurrency(results.savings * 12)}
                </p>
              </div>
            </div>

            <Image src="/greenTint.svg" alt="Background" width={100} height={100} className="w-[400px] h-[120px] absolute bottom-0 z-[100] blur-lg" />
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="relative h-[240px] w-full lg:w-[900px]">
        <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
        
        <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
          <div className="h-full relative flex justify-between items-center px-16">
            <div className="text-left">
              <p className="text-[#fc9292] text-sm font-semibold tracking-tight mb-2">
                Your Current Cost
              </p>
              <p className="text-[40px] font-medium tracking-tight bg-gradient-to-b from-[#fc9292] from-[16.848%] to-[#ff0000] to-[163.59%] bg-clip-text text-transparent">
                {formatCurrency(results.ourCost + results.savings)}/month
              </p>
            </div>

            <div className="text-left">
              <p className="text-[#72aa83] text-sm font-semibold tracking-tight mb-2 flex items-center gap-4">
                Our Offer
                <Image src="/Calculator Images/Auto Purchase Enabled.svg" alt="Auto Purchase" width={100} height={100} className="w-[200px] h-[30px]" />
              </p>
              <p className="text-[40px] font-medium tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                {formatCurrency(results.ourCost)}/month
              </p>
              <p className="text-[#b5b5b5] text-sm mt-2">
                {results.domainsNeeded} domains • {results.inboxesNeeded} inboxes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative h-[110px] w-full lg:w-[900px] border border-white/10 rounded-[16px] overflow-hidden">
        <div className="relative w-full h-full flex flex-row justify-center items-center gap-8">
          <Image src="/orangeTint.svg" alt="Background" width={100} height={100} className="absolute w-[400px] h-[120px] bottom-0 z-[100] blur-lg" />
          
          <div className="text-center">
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] lg:text-[20px] text-[darkgrey] tracking-[-0.8px] leading-[normal]">
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
    </>
  );
}

function NotCheaperResults({ results }: { results: SimpleResults }) {
  return (
    <>
      {/* Not Cheaper Message */}
      <div className="relative h-[500px] w-full lg:w-[700px]">
        <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
        
        <div className="absolute inset-2 bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
          <div className="h-full relative flex flex-col justify-center items-center text-center">
            <h3 className="text-[#ffbf7e] text-2xl font-semibold tracking-tight mb-4">
              Let&apos;s Talk About Your Pricing
            </h3>
            <p className="text-[#b5b5b5] text-lg mb-6 max-w-md">
              Your current cost of {formatCurrency(results.ourCost + results.savings)} is already competitive. 
              Let&apos;s discuss how we can help optimize your setup.
            </p>
            
            <div className="space-y-4">
              <BonusBullets />
              
              <button
                onClick={() => {
                  window.location.href = "https://cal.com/conrad-niedzielski/peeker-inboxes";
                }}
                className="mt-6"
              >
                <Image src="/GetStarted.svg" alt="Let's Talk" width={100} height={100} className="w-[150px] h-[100px] cursor-pointer hover:scale-105 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BonusBullets() {
  const bullets = [
    "Deliverability >98%",
    "Auto inbox replacement", 
    "24/7 support",
    "Advanced analytics",
    "Spam protection"
  ];

  return (
    <div className="space-y-2">
      <p className="text-[#b5b5b5] text-sm font-semibold mb-3">Plus you get:</p>
      <div className="space-y-1">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#72aa83] rounded-full" />
            <span className="text-[#b5b5b5] text-sm">{bullet}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 