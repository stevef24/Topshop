import Link from "next/link";
import { Store } from "lucide-react";

const footerLinks = [
	{ title: "Home", url: "/" },
	{ title: "About", url: "/#about" },
	{ title: "Products", url: "/#products" },
	{ title: "Reviews", url: "/#reviews" },
	{ title: "Contact", url: "/#contact" },
];

export function Footer() {
	return (
		<footer className="w-full py-6 bg-black text-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex items-center gap-2">
						<Store className="h-6 w-6 text-yellow-400" />
						<span className="text-lg font-semibold">Topshop Convenience</span>
					</div>
					<nav className="flex flex-wrap justify-center gap-4">
						{footerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.url}
								className="text-sm hover:text-yellow-400 hover:underline underline-offset-4"
							>
								{link.title}
							</Link>
						))}
					</nav>
					<p className="text-sm text-gray-400">
						© 2024 Topshop Convenience. Created by Stav.
					</p>
				</div>
			</div>
		</footer>
	);
}
