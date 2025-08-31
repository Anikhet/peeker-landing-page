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
} from "@/utils/calculator";
import { CalculationResults } from "@/types/calculator";

export default function GoogleCalculator() {
  const [googleResults, setGoogleResults] = useState<CalculationResults | null>(
    null
  );

  // Google form
  const {
    register: registerGoogle,
    handleSubmit: handleSubmitGoogle,
    watch: watchGoogle,
    formState: { errors: errorsGoogle },
  } = useForm<CalculatorFormSchema>({
    resolver: zodResolver(calculatorFormSchema),
    defaultValues: {
      currentCosts: {
        emailSequencerCost: 97,
        emailSequencerName: "Instantly",
        dailyEmailVolume: 2000,
        numberOfDomains: 23,
        inboxesPerDomain: 3,
        costPerInbox: 7.2,
        totalMonthlyCost: 497.7,
        domainCost: 11.99,
      },
      ourOffer: {
        emailSequencerCost: 70,
        desiredDailyVolume: 2000,
        inboxesPerDomain: 3,
        sendsPerInbox: 30,
        costPerInbox: 3.5,
        costPerDomain: 11.99,
        useExistingDomains: false,
        costForDomains: 11.99,
      },
    },
  });

  // Google calculated values
  const googleInboxesPerDomain = watchGoogle("currentCosts.inboxesPerDomain");
  const googleDomains = watchGoogle("currentCosts.numberOfDomains");
  const googleCostPerInbox = watchGoogle("currentCosts.costPerInbox");
  const googleDomainCost = watchGoogle("currentCosts.domainCost");

  const googleOfferDailyVolume = watchGoogle("ourOffer.desiredDailyVolume");
  const googleOfferInboxesPerDomain = watchGoogle("ourOffer.inboxesPerDomain");
  const googleOfferSendsPerInbox = watchGoogle("ourOffer.sendsPerInbox");
  const googleOfferCostPerInbox = watchGoogle("ourOffer.costPerInbox");
  const googleOfferCostForDomains = watchGoogle("ourOffer.costForDomains");
  const googleOfferUseExistingDomains = watchGoogle(
    "ourOffer.useExistingDomains"
  );

  // Google calculated fields
  const googleCurrentInboxes = googleDomains * googleInboxesPerDomain;
  const googleCurrentInboxCost = googleCurrentInboxes * googleCostPerInbox;
  const googleCurrentDomainCost = googleDomains * googleDomainCost;

  const googleOfferSendsPerDomain =
    googleOfferInboxesPerDomain * googleOfferSendsPerInbox;
  const googleOfferDomainsNeeded = Math.ceil(
    googleOfferDailyVolume / googleOfferSendsPerDomain
  );
  const googleOfferInboxesNeeded =
    googleOfferDomainsNeeded * googleOfferInboxesPerDomain;
  const googleOfferInboxCost =
    googleOfferInboxesNeeded * googleOfferCostPerInbox;
  const googleOfferDomainCost = googleOfferUseExistingDomains
    ? 0
    : googleOfferDomainsNeeded * googleOfferCostForDomains;

  const onSubmitGoogle = (data: CalculatorFormSchema) => {
    const calculatedResults = calculateSavings(
      data.currentCosts,
      data.ourOffer,
      "google"
    );
    setGoogleResults(calculatedResults);
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
                          {...registerGoogle("currentCosts.emailSequencerCost", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="97"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.emailSequencerCost && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.emailSequencerCost.message}
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
                          {...registerGoogle("currentCosts.dailyEmailVolume", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="2000"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.dailyEmailVolume && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.dailyEmailVolume.message}
                        </p>
                      )}
                    </div>

                    {/* Inboxes Per Domain */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        How many inboxes do you have on each domain?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          {...registerGoogle("currentCosts.inboxesPerDomain", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="3"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.inboxesPerDomain && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.inboxesPerDomain.message}
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
                          {...registerGoogle("currentCosts.numberOfDomains", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="23"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.numberOfDomains && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.numberOfDomains.message}
                        </p>
                      )}
                    </div>

                    {/* Cost Per Inbox */}
                    <div className="relative">
                      <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                        Current cost per inbox per month?
                      </label>
                      <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                        <input
                          type="number"
                          step="0.01"
                          {...registerGoogle("currentCosts.costPerInbox", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="7.2"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.costPerInbox && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.costPerInbox.message}
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
                          step="0.01"
                          {...registerGoogle("currentCosts.domainCost", {
                            valueAsNumber: true,
                          })}
                          className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                          placeholder="11.99"
                        />
                      </div>
                      {errorsGoogle.currentCosts?.domainCost && (
                        <p className="text-red-600 text-sm mt-1 text-center">
                          {errorsGoogle.currentCosts.domainCost.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <button
                      onClick={handleSubmitGoogle(onSubmitGoogle)}
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
          {googleResults && (
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
                            {formatCurrency(googleResults.totalSavings)}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                            {formatCurrency(googleResults.totalSavings)}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[32px] font-medium text-[#b5b5b5] tracking-tight">
                            {formatCurrency(googleResults.totalSavings * 12)}
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
                          {formatCurrency(googleResults.emailInboxSavings)}
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
                          {formatCurrency(googleResults.domainSavings)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before and After Comparison - Matching Selected Figma Frame */}
              <div className="relative h-[265px] w-[794px]">
                <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
                
                {/* Main Comparison Content */}
                <div className="absolute inset-2 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                  <div className="h-full relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute flex inset-[-27.31%_-80.59%_-34.48%_-82.52%] items-center justify-center">
                      <div className="flex-none h-[402.861px] rotate-[180deg] scale-y-[-100%] w-[2047.02px] opacity-20">
                        {/* Union background image would go here */}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full">
                      {/* Top Section - Current Cost vs Our Offer */}
                      <div className="flex justify-between items-center px-16 pt-12">
                        {/* Current Cost */}
                        <div className="text-center">
                          <p className="text-[#fc9292] text-sm font-semibold tracking-tight mb-2">
                            Current Cost
                          </p>
                          <p className="text-[48px] font-medium tracking-tight bg-gradient-to-b from-[#fc9292] from-[16.848%] to-[#ff0000] to-[163.59%] bg-clip-text text-transparent">
                            {formatCurrency(
                              googleResults.currentTotalWithDomains -
                                googleResults.currentDomainCost
                            )}
                          </p>
                          <p className="text-[#777777] text-sm font-semibold tracking-tight mt-1">
                            / per month
                          </p>
                        </div>

                        {/* Our Offer */}
                        <div className="text-center">
                          <p className="text-[#72aa83] text-sm font-semibold tracking-tight mb-2">
                            Our Offer
                          </p>
                          <p className="text-[48px] font-medium tracking-tight bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                            {formatCurrency(googleResults.ourTotalCost)}
                          </p>
                          <p className="text-[#777777] text-sm font-semibold tracking-tight mt-1">
                            / per month
                          </p>
                        </div>
                      </div>

                      {/* Bottom Section - Detailed Breakdown */}
                      <div className="flex justify-between items-center px-16 mt-8">
                        {/* Current Costs Breakdown */}
                        <div className="text-center">
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight mb-2">
                            Inbox Cost :
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight">
                            {formatCurrency(googleCurrentInboxCost)}
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight mt-2">
                            Domain Cost :
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight">
                            {formatCurrency(googleCurrentDomainCost)}
                          </p>
                        </div>

                        {/* Our Offer Breakdown */}
                        <div className="text-center">
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight mb-2">
                            Inbox Cost :
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight">
                            {formatCurrency(googleOfferInboxCost)}
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight mt-2">
                            Domain Cost :
                          </p>
                          <p className="text-[#b5b5b5] text-sm font-medium tracking-tight">
                            {formatCurrency(googleOfferDomainCost)}
                          </p>
                        </div>
                      </div>

                      {/* Auto Inbox Purchasing Badge */}
                      <div className="absolute top-[25px] right-[25px]">
                        <div className="bg-[rgba(255,224,175,0)] border border-[darkorange] rounded-[55.224px] px-3 py-1">
                          <p className="text-[#ddd7f9] text-xs font-medium tracking-tight">
                            Auto Inbox Purchasing Enabled
                          </p>
                        </div>
                      </div>

                      {/* Decorative Ellipse */}
                      <div className="absolute h-[92px] left-[446px] top-[234px] w-[126px] opacity-20">
                        {/* Ellipse decorative element would go here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Summary - Matching Selected Figma Frame */}
              <div className="relative h-[120px] w-[794px]">
                <div className="absolute inset-0 backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                  <div className="h-full relative">
                    {/* Background Decorative Elements */}
                    <div className="absolute flex inset-[-165.3%_-77.96%_-193.41%_-79.85%] items-center justify-center">
                      <div className="flex-none h-[389.901px] rotate-[180deg] scale-y-[-100%] w-[2047px] opacity-20">
                        {/* Union background image would go here */}
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      {/* Main Text */}
                      <div className="text-center mb-4">
                        <p className="text-[20px] font-semibold text-[darkgrey] tracking-tight">
                          Ready to start saving{" "}
                          <span className="font-bold bg-gradient-to-b from-[#72aa83] from-[16.848%] to-[#9dff00] to-[163.59%] bg-clip-text text-transparent">
                            {formatCurrency(googleResults.totalSavings)}
                          </span>{" "}
                          per month?
                        </p>
                      </div>

                      {/* Get Started Button */}
                      <div className="relative">
                        <div className="bg-gradient-to-b from-[#f4f4f4] via-[#565656] to-[#b3a293] rounded-[25.446px] px-6 py-3 border border-[#c9c9c9] shadow-lg">
                          <div className="flex items-center gap-3">
                            {/* Decorative Ellipse 1 */}
                            <div className="w-6 h-6 opacity-60">
                              {/* Ellipse decorative element would go here */}
                            </div>
                            
                            {/* Button Text */}
                            <button
                              onClick={() => {
                                window.location.href =
                                  "https://cal.com/conrad-niedzielski/peeker-inboxes";
                              }}
                              className="text-[16px] font-semibold bg-gradient-to-b from-[#fcd292] from-[55.172%] to-[#1a1a1a] bg-clip-text text-transparent bg-transparent border-none cursor-pointer"
                            >
                              Get Started
                            </button>
                            
                            {/* Decorative Ellipse 2 */}
                            <div className="w-6 h-6 opacity-60">
                              {/* Ellipse decorative element would go here */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Ellipse */}
                    <div className="absolute h-[31px] left-[220px] top-[77px] w-[115px] opacity-20">
                      {/* Ellipse decorative element would go here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 