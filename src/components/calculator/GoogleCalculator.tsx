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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign,
  TrendingUp,
  Settings,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

export default function GoogleCalculator() {
  const [googleResults, setGoogleResults] = useState<CalculationResults | null>(
    null
  );

  // Google form
  const {
    register: registerGoogle,
    handleSubmit: handleSubmitGoogle,
    watch: watchGoogle,
    setValue: setValueGoogle,
    formState: { errors: errorsGoogle },
    reset: resetGoogle,
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
        totalMonthlyCost: 497.7, // 23*3*7.2
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
  const googleDailyVolume = watchGoogle("currentCosts.dailyEmailVolume");
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
  const googleOfferSequencerCost = watchGoogle("ourOffer.emailSequencerCost");

  // Google calculated fields
  const googleCurrentInboxes = googleDomains * googleInboxesPerDomain;
  const googleCurrentInboxCost = googleCurrentInboxes * googleCostPerInbox;
  const googleCurrentDomainCost = googleDomains * googleDomainCost;
  const googleCurrentTotal =
    googleCurrentInboxCost +
    googleCurrentDomainCost +
    watchGoogle("currentCosts.emailSequencerCost");
  const googleCurrentSendsPerInbox =
    googleDailyVolume / (googleDomains * googleInboxesPerDomain);

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
  const googleOfferTotal =
    googleOfferInboxCost + googleOfferDomainCost + googleOfferSequencerCost;

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
              {/* Main Savings Card */}
              <Card className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 border-0 shadow-2xl overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-10 sm:translate-y-12 -translate-x-10 sm:-translate-x-12"></div>
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        <span className="text-white font-medium text-sm sm:text-base">
                          SAVINGS CALCULATED
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-4xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">
                      {formatCurrency(googleResults.totalSavings)}
                    </CardTitle>
                    <CardDescription className="text-lg sm:text-2xl text-white/90 font-semibold mb-4">
                      Monthly Savings •{" "}
                      {formatPercentage(
                        googleResults.totalSavingsPercentage
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 inline-block">
                        <div className="text-white/80 text-base sm:text-lg mb-2">
                          Annual Savings
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-white">
                          {formatCurrency(googleResults.totalSavings * 12)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
              {/* Savings Impact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-700 mb-1">
                      {formatCurrency(googleResults.sequencerSavings)}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600">
                      Sequencer Savings
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-700 mb-1">
                      {formatCurrency(googleResults.emailInboxSavings)}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-600">
                      Inbox Savings
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-purple-700 mb-1">
                      {formatCurrency(googleResults.domainSavings)}
                    </div>
                    <div className="text-xs sm:text-sm text-purple-600">
                      Domain Savings
                    </div>
                  </CardContent>
                </Card>
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
                            googleResults.currentTotalWithDomains -
                              googleResults.currentDomainCost
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
                              watchGoogle("currentCosts.emailSequencerCost")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                          <span className="text-sm font-medium text-gray-700">
                            Inbox Costs
                          </span>
                          <span className="font-semibold text-red-600">
                            {formatCurrency(googleCurrentInboxCost)}
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
                            {formatCurrency(googleCurrentDomainCost)}
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
                          {formatCurrency(googleResults.ourTotalCost)}
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
                              watchGoogle("ourOffer.emailSequencerCost")
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="text-sm font-medium text-gray-700">
                            Our Inbox Costs
                          </span>
                          <span className="font-semibold text-green-600">
                            {formatCurrency(googleOfferInboxCost)}
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
                            {formatCurrency(googleOfferDomainCost)}
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
                        {formatCurrency(googleResults.totalSavings)} per
                        month?
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