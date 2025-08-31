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
    <div className="min-h-screen w-full text-center bg-background">
      <div className="flex justify-center py-4">
        <Tabs className=""
          value={provider}
          onValueChange={(val) =>
            val && setProvider(val as "outlook" | "google")
          }
        >
          <TabsList className="bg-black border border-white/6 rounded-lg p-1">
            <TabsTrigger 
            className="text-white bg-black"
            value="outlook">
              {provider === "outlook" ? (
                <FigmaButton>Outlook</FigmaButton>
              ) : (
                <span className="px-4 py-2">
                  Outlook
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger className="text-white bg-black" value="google">
              {provider === "google" ? (
                <FigmaButton>Google</FigmaButton>
              ) : (
                <span className="px-4 py-2 text-white ">
                  Google
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
