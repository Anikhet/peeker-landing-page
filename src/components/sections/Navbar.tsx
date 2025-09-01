"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
	const navItems = [
		{ href: "#pricing", label: "Pricing" },
		{ href: "#process", label: "Process" },
		{ href: "#features", label: "Features" },
		{ href: "#reviews", label: "Reviews" }
	];

	return (
		<motion.header 
			className="sticky p-4 lg:p-0 top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							whileHover={{ scale: 1.05 }}
						>
							<Image src="/peekerlogo.svg" alt="Peeker" width={100} height={36} className="h-10 w-10 " />
						</motion.div>
					</Link>
				</motion.div>

				<nav className="hidden gap-10 text-sm font-extralight text-neutral-300 md:flex">
					{navItems.map((item, index) => (
						<motion.div
							key={item.href}
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ 
								duration: 0.4, 
								delay: 0.2 + (index * 0.1), 
								ease: "easeOut" 
							}}
						>
							<Link 
								href={item.href} 
								className="transition hover:text-white relative group"
							>
								{item.label}
								<motion.div
									className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
									initial={{ width: 0 }}
									whileHover={{ width: "100%" }}
								/>
							</Link>
						</motion.div>
					))}
				</nav>

				<motion.div 
					className="flex items-center gap-2"
					initial={{ x: 50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button asChild className="rounded-full bg-white text-black hover:bg-white/80 hover:text-black px-4 w-[100px] h-[30px] py-2 text-sm">
							<Link href="#book-a-call">Book a Call</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.header>
	);
}


