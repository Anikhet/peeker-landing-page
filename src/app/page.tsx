// src/app/page.tsx

import { Hero } from "@/components/sections/hero";
import { MarqueeDemo } from "@/components/ui/marquee";




export default function Page() {
	return (
		<main className="relative ">
			<Hero/>
      <MarqueeDemo/>
			{/* <Logos />
			<FeatureCards />
			<Pricing />
			<FAQ />
			<Footer /> */}
		</main>
	);
}