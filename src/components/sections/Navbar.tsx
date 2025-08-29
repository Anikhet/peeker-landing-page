import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30">
			<div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
				<Link href="/" className="flex items-center gap-2" aria-label="Peeker home">
					<Image src="/peekerlogo.svg" alt="Peeker" width={100} height={36} priority className="h-10 w-10 " />
				</Link>

				<nav className="hidden gap-10 text-sm font-extralight text-neutral-300 md:flex">
					<Link href="#pricing" className="transition hover:text-white">
						Pricing
					</Link>
					<Link href="#process" className="transition hover:text-white">
						Process
					</Link>
					<Link href="#features" className="transition hover:text-white">
						Features
					</Link>
					<Link href="#reviews" className="transition hover:text-white">
						Reviews
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<Button asChild className="rounded-full bg-white text-black px-4 w-[100px] h-[30px]  py-2 text-sm">
						<Link href="#book-a-call">Book a Call</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}


