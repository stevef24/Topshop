import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Store } from "lucide-react";

export default function Navbar() {
	return (
		<header className="bg-black text-white">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				<div className="flex items-center">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="mr-4 md:hidden text-white"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="bg-black text-white">
							<nav className="grid gap-4 py-6">
								<Link
									className="flex w-full items-center py-2 text-lg font-semibold hover:text-yellow-400"
									href="#about"
								>
									About Us
								</Link>
								<Link
									className="flex w-full items-center py-2 text-lg font-semibold hover:text-yellow-400"
									href="#products"
								>
									Products
								</Link>
								<Link
									className="flex w-full items-center py-2 text-lg font-semibold hover:text-yellow-400"
									href="#reviews"
								>
									Reviews
								</Link>
								<Link
									className="flex w-full items-center py-2 text-lg font-semibold hover:text-yellow-400"
									href="#contact"
								>
									Contact
								</Link>
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
				<nav className="hidden gap-6 md:flex">
					<Link
						className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4"
						href="#about"
					>
						About Us
					</Link>
					<Link
						className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4"
						href="#products"
					>
						Products
					</Link>
					<Link
						className="text-sm font-medium hover:text-yellow-400 hover:underline underline-offset-4"
						href="#reviews"
					>
						Reviews
					</Link>
				</nav>
				<div>
					<Button
						className="bg-yellow-500 text-black hover:bg-yellow-400"
						size="lg"
					>
						Contact
					</Button>
				</div>
			</div>
		</header>
	);
}
