"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  calculatorFormSchema,
  type CalculatorFormSchema,
} from "@/utils/validation";
import {
  calculateSavings,
  formatCurrency,
  formatPercentage,
} from "@/utils/calculator";
import { CalculationResults } from "@/types/calculator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import {

  TrendingUp,

  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { PulsatingButton } from "./magicui/pulsating-button";
import Image from "next/image";
import Link from "next/link";

export default function OutlookCalculator() {
  const [results, setResults] = useState<CalculationResults | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CalculatorFormSchema>({
    resolver: zodResolver(calculatorFormSchema),
    defaultValues: {
      currentCosts: {
        emailSequencerCost: 97,
        emailSequencerName: "Instantly",
        dailyEmailVolume: 2000,
        numberOfDomains: 23,
        totalMonthlyCost: 400,
        domainCost: 11.99,
      },
      ourOffer: {
        emailSequencerCost: 70,
        desiredDailyVolume: 2000,
        costPerDomain: 60,
        useExistingDomains: false,
        costForDomains: 11.99,
      },
    },
  });

  const useExistingDomains = watch("ourOffer.useExistingDomains");

  const onSubmit = (data: CalculatorFormSchema) => {
    if (data.ourOffer.useExistingDomains) {
      data.ourOffer.costForDomains = 0;
    }
    const calculatedResults = calculateSavings(
      data.currentCosts,
      data.ourOffer,
      "outlook"
    );
    setResults(calculatedResults);
  };

  return (
    <div className="relative py-20 px-4">
      {/* Calculator Container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 items-start">
          {/* Calculator Card */}
          <div className="flex-none">
            <div className="relative h-[750px] w-[442px]">
              <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
              
              {/* Main Calculator Content */}
              <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                <div className="p-6 h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-[#ffbf7e] text-xl font-medium tracking-tight">
                      Enter Your Current Costs
                    </h2>
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-[#474747] mb-8" />

                  {/* Input Fields */}
                  <div className="space-y-6">
                    {/* Email Sequencer Cost */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        Email sequencer cost (per month)
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("currentCosts.emailSequencerCost", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="97"
                        />
                      </div>
                      {errors.currentCosts?.emailSequencerCost && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errors.currentCosts.emailSequencerCost.message}
                        </p>
                      )}
                    </div>

                    {/* Emails Per Day */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        How many emails do you send per day currently?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("currentCosts.dailyEmailVolume", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="2000"
                        />
                      </div>
                      {errors.currentCosts?.dailyEmailVolume && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errors.currentCosts.dailyEmailVolume.message}
                        </p>
                      )}
                    </div>

                    {/* Domains Purchased */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        How many domains did you purchase to send this volume?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("currentCosts.numberOfDomains", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="23"
                        />
                      </div>
                      {errors.currentCosts?.numberOfDomains && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errors.currentCosts.numberOfDomains.message}
                        </p>
                      )}
                    </div>

                    {/* Current cost of inboxes per month */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        Current cost of inboxes per month?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          step="0.01"
                          {...register("currentCosts.totalMonthlyCost", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="400"
                        />
                      </div>
                      {errors.currentCosts?.totalMonthlyCost && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errors.currentCosts.totalMonthlyCost.message}
                        </p>
                      )}
                    </div>

                    {/* Cost Per Domain */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        Cost per domain?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          {...register("currentCosts.domainCost", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="11.99"
                        />
                      </div>
                      {errors.currentCosts?.domainCost && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errors.currentCosts.domainCost.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="w-full bg-[#ffbf7e] text-black font-medium py-3 px-8 rounded-lg hover:bg-[#ffbf7e]/90 transition-colors text-lg"
                    >
                      Calculate Savings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section - Beside the calculator */}
          {results && (
            <div className="flex-1 space-y-6">
              {/* Main Savings Card - Matching Figma Design */}
              <div className="relative h-[181px] w-[794px]">
                <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
                
                {/* Main Results Content */}
                <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                  <div className="h-full relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-[-41.21%_-80.59%_-102.95%_-82.52%] flex items-center justify-center">
                      <div className="flex-none h-[402.861px] rotate-[180deg] scale-y-[-100%] w-[2047.02px] opacity-20">
                        {/* Union background image would go here */}
                      </div>
                    </div>

                    {/* Results Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      {/* Top Row - Labels */}
                      <div className="flex justify-between items-center px-16 mb-4">
                        <div className="text-center">
                          <p className="text-[#72aa83] text-sm font-semibold tracking-tight">
                            Savings Calculated :
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[#b5b5b5] text-sm font-semibold tracking-tight">
                            Monthly Savings :
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[#b5b5b5] text-sm font-semibold tracking-tight">
                            Annual Savings :
                          </p>
                        </div>
                      </div>

                      {/* Bottom Row - Values */}
                      <div className="flex justify-between items-center px-16">
                        <div className="text-center">
                          <p className="text-[48px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                            {formatCurrency(results.totalSavings)}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                            {formatCurrency(results.totalSavings)}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                            {formatCurrency(results.totalSavings * 12)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Ellipse */}
                    <div className="absolute h-[115px] left-[63px] top-[164px] w-[158px] opacity-20">
                      {/* Ellipse decorative element would go here */}
                    </div>
                  </div>
                </div>
              </div>

                             {/* Savings Impact Cards - Matching Figma Design */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* Inbox Savings Card - Matching Selected Figma Frame */}
                 <div className="relative h-[149px] w-[391px]">
                   <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
                   
                   {/* Main Card Content */}
                   <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                     <div className="h-full relative">
                       {/* Background Decorative Elements */}
                       <div className="absolute h-[281px] left-[150px] top-[652px] w-[283px] opacity-20">
                         {/* Ellipse decorative element would go here */}
                       </div>

                       {/* Content */}
                       <div className="relative z-10 h-full flex flex-col justify-center items-center">
                         {/* Label */}
                         <p className="text-[#b5b5b5] text-sm font-semibold tracking-tight mb-2">
                           Inbox Savings
                         </p>
                         
                         {/* Value */}
                         <p className="text-[48px] font-medium text-[#b5b5b5] tracking-tight">
                           {formatCurrency(results.emailInboxSavings)}
                         </p>

                         {/* Deliverability Badge */}
                         <p className="text-[12px] font-semibold tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent mt-2">
                           (Deliverability &gt;98%)
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Domain Savings Card */}
                 <div className="relative h-[149px] w-[391px]">
                   <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
                   
                   {/* Main Card Content */}
                   <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                     <div className="h-full relative">
                       {/* Background Decorative Elements */}
                       <div className="absolute h-[281px] left-[150px] top-[652px] w-[283px] opacity-20">
                         {/* Ellipse decorative element would go here */}
                       </div>

                       {/* Content */}
                       <div className="relative z-10 h-full flex flex-col justify-center items-center">
                         {/* Label */}
                         <p className="text-[#b5b5b5] text-sm font-semibold tracking-tight mb-2">
                           Domain Savings
                         </p>
                         
                         {/* Value */}
                         <p className="text-[48px] font-medium text-[#b5b5b5] tracking-tight">
                           {formatCurrency(results.domainSavings)}
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Before and After Comparison */}
              <Card className="border-2 border-green-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                    Before & After Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-red-700 mb-2">
                          Current Costs
                        </h3>
                        <div className="text-3xl font-bold text-red-600">
                          {formatCurrency(
                            results.currentTotalWithDomains -
                              results.currentDomainCost
                          )}
                        </div>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="text-sm font-medium text-gray-700">
                            Email Sequencer
                          </span>
                          <span className="font-semibold text-red-600">
                            {formatCurrency(
                              watch("currentCosts.emailSequencerCost")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="text-sm font-medium text-gray-700">
                            Inbox Costs
                          </span>
                          <span className="font-semibold text-red-600">
                            {formatCurrency(
                              watch("currentCosts.totalMonthlyCost")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-center items-center">
                          <span className="text-4xl font-extrabold text-gray-700">
                            +
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="text-sm font-medium text-gray-700">
                            Domain Costs
                          </span>
                          <span className="font-semibold text-red-600">
                            {formatCurrency(
                              watch("currentCosts.numberOfDomains") *
                                watch("currentCosts.domainCost")
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-green-700 mb-2">
                          Our Offer
                        </h3>
                        <div className="text-3xl font-bold text-green-600">
                          {formatCurrency(results.ourTotalCost)}
                        </div>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="text-sm font-medium text-gray-700">
                            Our Email Sequencer
                          </span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(
                              watch("ourOffer.emailSequencerCost")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="text-sm font-medium text-gray-700">
                            Our Inbox Costs
                          </span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(
                              results.domainsNeeded *
                                watch("ourOffer.costPerDomain")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-center items-center">
                          <span className="text-4xl font-extrabold text-gray-700">
                            +
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="text-sm font-medium text-gray-700">
                            Your Domain Costs
                          </span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(
                              watch("ourOffer.costForDomains") *
                                (watch("ourOffer.desiredDailyVolume") / 500)
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Savings Summary */}
                  <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="text-lg font-semibold text-gray-800 mb-2">
                        Ready to start saving{" "}
                        {formatCurrency(results.totalSavings)} per month?
                      </div>
                      <div className="text-xl font-semibold text-green-600 mb-4"></div>

                      <Button
                        onClick={() => {
                          window.location.href =
                            "https://cal.com/conrad-niedzielski/peeker-inboxes";
                        }}
                        className="bg-emerald-500"
                      >
                        Start Saving
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 