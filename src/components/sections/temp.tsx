'use client';

import { useState } from 'react';

interface CalculatorInputs {
  emailSequencerCost: number;
  emailsPerDay: number;
  inboxesPerDomain: number;
  domainsPurchased: number;
  costPerInbox: number;
  costPerDomain: number;
}

export default function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    emailSequencerCost: 97,
    emailsPerDay: 2000,
    inboxesPerDomain: 3,
    domainsPurchased: 23,
    costPerInbox: 7.2,
    costPerDomain: 11.99
  });

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [field]: numValue }));
  };

  const calculateTotalCost = () => {
    const { emailSequencerCost, domainsPurchased, costPerInbox, costPerDomain } = inputs;
    const totalInboxes = inputs.inboxesPerDomain * domainsPurchased;
    const totalInboxCost = totalInboxes * costPerInbox;
    const totalDomainCost = domainsPurchased * costPerDomain;
    
    return emailSequencerCost + totalInboxCost + totalDomainCost;
  };

  const totalCost = calculateTotalCost();

  return (
    <div className="relative py-20 px-4">
      {/* Calculator Container */}
      <div className="max-w-2xl mx-auto">
        {/* Dashed Border Container */}
        <div className="relative h-[750px] w-[442px] mx-auto">
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
                      value={inputs.emailSequencerCost}
                      onChange={(e) => handleInputChange('emailSequencerCost', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Emails Per Day */}
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                    How many emails do you send per day currently?
                  </label>
                  <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                    <input
                      type="number"
                      value={inputs.emailsPerDay}
                      onChange={(e) => handleInputChange('emailsPerDay', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Inboxes Per Domain */}
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                    How many inboxes do you have on each domain?
                  </label>
                  <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                    <input
                      type="number"
                      value={inputs.inboxesPerDomain}
                      onChange={(e) => handleInputChange('inboxesPerDomain', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Domains Purchased */}
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                    How many domains did you purchase to send this volume?
                  </label>
                  <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                    <input
                      type="number"
                      value={inputs.domainsPurchased}
                      onChange={(e) => handleInputChange('domainsPurchased', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Cost Per Inbox */}
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                    Current cost per inbox per month?
                  </label>
                  <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                    <input
                      type="number"
                      value={inputs.costPerInbox}
                      onChange={(e) => handleInputChange('costPerInbox', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Cost Per Domain */}
                <div className="relative">
                  <label className="block text-[rgba(255,255,255,0.7)] text-sm font-medium text-center mb-2 tracking-tight">
                    Cost per domain?
                  </label>
                  <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                    <input
                      type="number"
                      value={inputs.costPerDomain}
                      onChange={(e) => handleInputChange('costPerDomain', e.target.value)}
                      className="bg-transparent text-white text-xl font-medium text-center w-full h-full px-4 tracking-tight"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              {/* Total Cost Display */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[rgba(217,217,217,0.17)] opacity-20 rounded-[6px] h-[50px] flex items-center justify-center">
                  <span className="text-white text-xl font-medium tracking-tight">
                    Total Monthly Cost: ${totalCost.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}