// src/app/page.tsx

import { Hero } from "@/components/sections/hero";
import InboxReality from "@/components/sections/inboxReality";
import ProblemSection from "@/components/sections/problemSection";
import { MarqueeDemo } from "@/components/ui/marquee";




export default function Page() {
	return (
		<main className="relative space-y-20">
			<div className="relative space-y-10">
			<Hero/>
      <MarqueeDemo/>
	  </div>
		<ProblemSection/>
		<InboxReality/>
		
		</main>
	);
}