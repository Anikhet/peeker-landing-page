"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import OutlookCalculator from "./OutlookCalculator";
import GoogleCalculator from "./GoogleCalculator";
import { FigmaButton } from "../ui/figma-button";

export default function InboxCalculator() {
  const [provider, setProvider] = useState<"outlook" | "google">("outlook");

  return (
    <div className="min-h-screen w-full text-center ">
      <div className="flex justify-center py-4">
        <Tabs className=""
          value={provider}
          onValueChange={(val) =>
            val && setProvider(val as "outlook" | "google")
          }
        >
          <TabsList className="bg-white/2 rounded-lg h-[44px] space-x-4 ">
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
          <TabsContent value="outlook">
            <OutlookCalculator />
          </TabsContent>
          <TabsContent value="google">
            <GoogleCalculator />
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}
