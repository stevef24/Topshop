"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Store } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const router = useRouter();

	const closeSheet = () => setIsOpen(false);

	const handleLinkClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
			e.preventDefault();
			closeSheet();

			router.push(href);

			const targetId = href.replace(/.*#/, "");
			setTimeout(() => {
				const elem = document.getElementById(targetId);
				if (elem) {
					elem.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}, 100);
		},
		[router]
	);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const maxScroll = documentHeight - windowHeight;
			const progress = Math.min(scrollY / (maxScroll * 0.2), 1);
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Products", href: "#products" },
		{ name: "Reviews", href: "#reviews" },
		{ name: "About Us", href: "#about" },
		{ name: "Contact", href: "#contact" },
	];

	const bgOpacity = scrollProgress.toFixed(2);

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
			style={{
				backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
				boxShadow: scrollProgress > 0 ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
			}}
		>
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				<div className="flex items-center">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mr-4 md:hidden text-white"
								aria-label="Open navigation menu"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="bg-black text-white">
							<nav className="grid gap-4 py-6">
								{navItems.map((item) => (
									<Link
										key={item.href}
										className="flex w-full items-center py-2 text-lg font-semibold hover:text-yellow-400"
										href={item.href}
										onClick={(e) => handleLinkClick(e, item.href)}
									>
										{item.name}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<Link
						className="flex items-center gap-2 text-2xl font-bold text-white hover:text-yellow-400"
						href="#"
					>
						<Store className="h-6 w-6" />
						TOP-SHOP
					</Link>
				</div>
				<nav className="hidden gap-6 md:flex items-center">
					{navItems.slice(0, 3).map((item) => (
						<Link
							key={item.href}
							className="text-sm font-medium text-white hover:text-yellow-400 hover:underline underline-offset-4"
							href={item.href}
							onClick={(e) => handleLinkClick(e, item.href)}
						>
							{item.name}
						</Link>
					))}
				</nav>
				<div className="flex items-center">
					<Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
						<Button
							className="bg-yellow-500 text-black hover:bg-yellow-400"
							size="lg"
						>
							Contact
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
