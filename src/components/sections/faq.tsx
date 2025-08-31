"use client";

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
}

const FAQ = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: 1,
      question: "How fast can I get my inboxes up and running?",
      answer: "Most setups are completed within 5–10 minutes. Our onboarding team walks you through every step if needed.",
      isExpanded: true
    },
    {
      id: 2,
      question: "Do you work with my current cold email tool?",
      answer: "Yes, we integrate with all major cold email tools and platforms.",
      isExpanded: false
    },
    {
      id: 3,
      question: "What happens if my inbox gets flagged or breaks?",
      answer: "We provide instant replacement inboxes and 24/7 support to get you back up and running immediately.",
      isExpanded: false
    },
    {
      id: 4,
      question: "How is Peeker different from other inbox providers?",
      answer: "We offer real-time monitoring, instant replacements, and dedicated support that others don't provide.",
      isExpanded: false
    },
    {
      id: 5,
      question: "Do I need to sign a long-term contract?",
      answer: "No, we offer month-to-month plans with no long-term commitments required.",
      isExpanded: false
    }
  ]);

  const toggleFAQ = (id: number) => {
    setFaqItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, isExpanded: !item.isExpanded }
          : item
      )
    );
  };

  return (
    <div className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[44px] font-medium text-white tracking-tight mb-4">
            Scale With Clarity
          </h2>
          <p className="text-[16px] font-medium text-[#bcbcbc] tracking-tight max-w-[311px] mx-auto">
            Everything you need to know before getting started with Peeker Inboxes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.id} className="relative">
              {/* Dashed Border Container */}
              <div className="absolute inset-0 border border-dashed border-[#474747] rounded-[20px]" />
              
              {/* Main FAQ Content */}
              <div className="relative backdrop-blur-[4.6px] bg-white/5 rounded-[16px] border border-white/20 overflow-hidden">
                <div className="relative">
                  {/* Background Decorative Elements */}
                  <div className="absolute h-[281px] left-[150px] top-[652px] w-[283px] opacity-20">
                    {/* Ellipse decorative element would go here */}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Question */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-[20px] font-medium text-white tracking-tight flex-1">
                        {item.question}
                      </h3>
                      
                      {/* Arrow Indicator */}
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="flex-none w-[30px] h-[30px] flex items-center justify-center ml-4"
                      >
                        <div className={`text-white text-[20px] font-semibold transition-transform duration-300 ${
                          item.isExpanded ? 'rotate-[135deg]' : 'rotate-[315deg]'
                        }`}>
                          →
                        </div>
                      </button>
                    </div>

                    {/* Answer */}
                    {item.isExpanded && (
                      <div className="mt-6">
                        <p className="text-[20px] font-medium text-white tracking-tight leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Decorative Ellipse */}
                  <div className="absolute h-[115px] w-[115px] opacity-20">
                    {/* Ellipse decorative element would go here */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute h-[115px] w-[115px] opacity-20">
            {/* Ellipse decorative element would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;