"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#070707] relative ">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background ellipses */}
          <div className="absolute h-80 w-[2289px] -left-12 -top-20 opacity-20">
            {/* Large ellipse decorative element */}
          </div>
          
          {/* Multiple decorative ellipses positioned around */}
          <div className="absolute h-80 w-[411px] left-3 top-[694px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] -left-64 top-[722px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] right-[-256px] top-[650px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] right-[1167px] top-[722px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] right-[1062px] top-[728px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] right-[679px] top-[757px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
          <div className="absolute h-80 w-[411px] right-[379px] top-[757px] opacity-20">
            {/* Ellipse decorative element */}
          </div>
        </div>

        {/* Blurred Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[250px] font-semibold text-center tracking-[-10px] blur-[4.65px] opacity-20">
            Peeker Inboxes
          </div>
          <div className="text-[250px] font-semibold text-center tracking-[-10px] blur-[50px] opacity-20">
            Peeker Inboxes
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Top Section - Call to Action */}
          <div className="text-center mb-20">
            <h2 className="text-[36px] font-medium text-white tracking-tight mb-6">
              Ready to use self healing inboxes?
            </h2>
            
            {/* Feature Points */}
            <div className="space-y-4 mb-8">
              <p className="text-[20px] font-medium text-[#bcbcbc] tracking-tight">
                <span className="bg-clip-text bg-gradient-to-b from-[#72aa83] to-[#9dff00] text-transparent">
                  Month-to-month plans
                </span>
                {" — cancel anytime, no long-term lock-in"}
              </p>
              <p className="text-[20px] font-medium text-[#bcbcbc] tracking-tight">
                <span className="bg-clip-text bg-gradient-to-b from-[#72aa83] to-[#9dff00] text-transparent">
                  Free automatic setup
                </span>
                {" — we handle the entire inbox and tracking configuration for you"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Get Started Button */}
              <div className="relative">
                <div className="bg-gradient-to-b from-[#f4f4f4] via-[#565656] to-[#b3a293] rounded-[25.856px] px-8 py-3 border border-[#c9c9c9] shadow-lg">
                  <div className="flex items-center gap-3">
                    {/* Decorative Ellipse 1 */}
                    <div className="w-6 h-6 opacity-60">
                      {/* Ellipse decorative element */}
                    </div>
                    
                    {/* Button Text */}
                    <span className="text-[16px] font-semibold bg-gradient-to-b from-[#fcd292] from-[55.172%] to-[#1a1a1a] bg-clip-text text-transparent">
                      Get Started
                    </span>
                    
                    {/* Decorative Ellipse 2 */}
                    <div className="w-6 h-6 opacity-60">
                      {/* Ellipse decorative element */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Slack Button */}
              <div className="bg-[rgba(187,175,255,0.09)] border border-[#dab6f3] rounded-[88.359px] px-6 py-3 flex items-center gap-3">
                <div className="w-6 h-6">
                  {/* Slack icon would go here */}
                  <span className="text-white text-xl">💬</span>
                </div>
                <span className="text-[#ddd7f9] text-[21px] font-medium tracking-tight">
                  Join our Slack
                </span>
              </div>
            </div>
          </div>

          {/* Middle Section - Community Call to Action */}
          <div className="text-center mb-16">
            <h3 className="text-[36px] font-medium text-white tracking-tight">
              Join our Cold Email Slack community
            </h3>
          </div>

          {/* Bottom Section - Navigation and Legal */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
            {/* Left Side - Navigation */}
            <div className="flex flex-col space-y-4">
              <Link href="/pricing" className="text-[20px] font-medium text-white tracking-tight hover:text-[#bcbcbc] transition-colors">
                Pricing
              </Link>
              <Link href="/process" className="text-[20px] font-medium text-white tracking-tight hover:text-[#bcbcbc] transition-colors">
                Process
              </Link>
              <Link href="/reviews" className="text-[20px] font-medium text-white tracking-tight hover:text-[#bcbcbc] transition-colors">
                Reviews
              </Link>
              <Link href="/features" className="text-[20px] font-medium text-white tracking-tight hover:text-[#bcbcbc] transition-colors">
                Features
              </Link>
            </div>

            {/* Right Side - Legal and Copyright */}
            <div className="text-right">
              <p className="text-[20px] font-medium text-white tracking-tight mb-2">
                © 2025 Peeker Inboxes. All rights reserved.
              </p>
              <div className="text-[20px] font-medium text-white tracking-tight">
                <Link href="/privacy" className="hover:text-[#bcbcbc] transition-colors">
                  Privacy Policy
                </Link>
                {" · "}
                <Link href="/terms" className="hover:text-[#bcbcbc] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute h-80 w-[292px] left-[277px] top-[453px] opacity-20">
          {/* Ellipse decorative element */}
        </div>
      </div>
      <Image src="/Footer/Footer Text.svg" alt="Footer Text" width={100} height={100}
      className='w-[2000px] h-[400px]' />
    </div>
  );
};

export default Footer;