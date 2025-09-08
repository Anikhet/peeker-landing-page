// src/app/page.tsx

import Calculator from "@/components/sections/calculator";
import { Hero } from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howItWorks";
import InboxReality from "@/components/sections/inboxReality";
import ProblemSection from "@/components/sections/problemSection";
import SolutionSection from "@/components/sections/solutionSection";
import Testimonials from "@/components/sections/testimonials";
import { MarqueeDemo } from "@/components/ui/marquee";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Page() {
  
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <SmoothCursor /> */}
      <div className="relative space-y-10">
        <div className="relative min-h-screen space-y-90 lg:space-y-10">
          <Hero />
          <MarqueeDemo />
        </div>
        <ProblemSection />
        <InboxReality />

        <SolutionSection />
        <HowItWorks />
        <Testimonials />
        <Calculator />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
