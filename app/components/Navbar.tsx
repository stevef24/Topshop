"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Store, Facebook, Instagram } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const closeSheet = () => setIsOpen(false);

	const handleLinkClick = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
			e.preventDefault();
			closeSheet();

			// Use Next.js router to update the URL without a page reload
			router.push(href);

			// Smooth scroll to the target element
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

	const navItems = [
		{ name: "Products", href: "#products" },
		{ name: "Reviews", href: "#reviews" },
		{ name: "About Us", href: "#about" },
		{ name: "Contact", href: "#contact" },
	];

	const socialLinks = [
		{ name: "Facebook", href: "https://facebook.com/topshop", Icon: Facebook },
		{
			name: "Instagram",
			href: "https://instagram.com/topshop",
			Icon: Instagram,
		},
	];

	return (
		<header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
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
								<div className="flex gap-4 mt-4">
									{socialLinks.map((link) => (
										<Link
											key={link.name}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white hover:text-yellow-400"
										>
											<link.Icon className="h-7 w-7" />
											<span className="sr-only">{link.name}</span>
										</Link>
									))}
								</div>
							</nav>
						</SheetContent>
					</Sheet>
					<Link
						className="flex items-center gap-2 text-2xl font-bold text-white hover:text-yellow-400"
						href="#"
					>
						<Store className="h-6 w-6" />
						TOPSHOP
					</Link>
				</div>
				<nav className="hidden gap-6 md:flex items-center">
					{navItems.slice(0, 3).map((item) => (
						<Link
							key={item.href}
							className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4"
							href={item.href}
							onClick={(e) => handleLinkClick(e, item.href)}
						>
							{item.name}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-4">
					<div className="hidden md:flex gap-2">
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-yellow-400"
							>
								<link.Icon className="h-7 w-7" />
								<span className="sr-only">{link.name}</span>
							</Link>
						))}
					</div>
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
