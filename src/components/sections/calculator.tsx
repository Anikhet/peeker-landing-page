import React from 'react'
import InboxCalculator from '../calculator/InboxCalculator'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Calculator = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Calculator Header - From Figma Frame */}
        <div className="text-center mb-16">
          <div className="bg-clip-text bg-white flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[44px] text-center text-white tracking-[-2.2px]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[normal]">
            <h1
            className={`mx-auto z-20 w-full lg:w-[644px] text-center font-medium ${inter.className}
                text-[44px] leading-[40px] lg:text-[44px] lg:leading-[73px] tracking-[-0.05em]
                bg-clip-text text-transparent hero-title-gradient`}
 
          >Calculate Inbox Savings While

          </h1>
              <span className="text-white">
                Staying Out of Spam
              </span>
            </p>
          </div>
          
          {/* Subtitle - From Selected Figma Frame */}
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-end leading-[0] not-italic relative size-full text-[#bcbcbc] text-[16px] text-center tracking-[-0.64px] mt-6">
            <p className="leading-[normal]">
              Uncover your true inbox costs and how Peeker <br/> automates deliverability, replacements, and support.
            </p>
          </div>
        </div>

        {/* Calculator Component */}
        <InboxCalculator />
      </div>
    </div>
  )
}

export default Calculator
