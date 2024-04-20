"use client";
import clsx from "clsx";
import { useState } from "react";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

type LinkProps = {
	title: string;
	url: string;
};

type MenuLinkProps = LinkProps & {
	subLinks?: LinkProps[];
};

type Props = {
	links: MenuLinkProps[];
	buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Navbar2 = (props: Navbar2Props) => {
	const { links, buttons } = {
		...props,
	} as Props;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
	return (
		<nav className="flex fixed  z-10 h-auto min-h-16 w-full items-center bg-white/50  backdrop-filter backdrop-blur-lg px-[5%] lg:min-h-18">
			<div className="mx-auto flex w-full justify-between ">
				<div className="flex min-h-16 flex-shrink-0 items-center">
					<Logo />
				</div>
				<ul
					className={clsx(
						"absolute left-0 top-16 flex h-[300px] w-full flex-col items-center  justify-start border-b border-border-primary  px-[5%] pt-4 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:border-none lg:px-0 lg:pt-0",
						mobileMenuOpen
							? "block bg-yellow-200 backdrop-filter backdrop-blur-lg"
							: "hidden "
					)}
				>
					{links.map((link, index) => (
						<li
							key={`${link.title}-${index}`}
							className="w-full lg:w-auto text-black font-bold flex justify-center my-4"
							onClick={() => setMobileMenuOpen(false)}
						>
							{link.subLinks && link.subLinks.length > 0 ? (
								<NavItemDropdown subLinks={link.subLinks} title={link.title} />
							) : (
								<Link
									href={link.url}
									className="relative block py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
								>
									{link.title}
								</Link>
							)}
						</li>
					))}
				</ul>
				<div className="flex min-h-16 items-center justify-end gap-x-4 ">
					<div>
						{buttons.map((button, index) => (
							<Button
								key={`${button.title}-${index}`}
								variant={button.variant}
								size={button.size}
								className="px-4 py-1 md:px-6 md:py-2 border rounded-full"
							>
								{button.title}
							</Button>
						))}
					</div>
					<button
						className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden "
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<div
							className={clsx(
								genericHamburgerLine,
								mobileMenuOpen && "translate-y-2 -rotate-45"
							)}
						/>
						<div
							className={clsx(
								genericHamburgerLine,
								mobileMenuOpen && "opacity-0"
							)}
						/>
						<div
							className={clsx(
								genericHamburgerLine,
								mobileMenuOpen && "-translate-y-2 rotate-45"
							)}
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

const NavItemDropdown = ({
	title,
	subLinks,
}: {
	title: string;
	subLinks: LinkProps[];
}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<div>
			<button
				className="flex w-full   items-center justify-center gap-2 py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
				onClick={() => setDropdownOpen((prev) => !prev)}
				onMouseEnter={() => setDropdownOpen(true)}
				onMouseLeave={() => setDropdownOpen(false)}
			>
				<span>{title}</span>
				<AnimatePresence>
					<motion.div
						animate={dropdownOpen ? "rotated" : "initial"}
						variants={{
							rotated: { rotate: 180 },
							initial: { rotate: 0 },
						}}
						transition={{ duration: 0.3 }}
					>
						<SolidChevronDown className="size-4" />
					</motion.div>
				</AnimatePresence>
			</button>
			{dropdownOpen && (
				<AnimatePresence>
					<motion.ul
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{
							hidden: {
								opacity: "var(--opacity-from, 100%)",
								y: "var(--slide-from, 25%)",
							},
							visible: {
								opacity: 1,
								y: "var(--slide-to, 0%)",
							},
						}}
						transition={{ duration: 0.3, type: "spring", bounce: 0 }}
						className="border-border-primary  [--slide-from:0%] lg:absolute lg:h-auto lg:border lg:p-2 lg:[--opacity-from:0%] lg:[--slide-from:25%]"
						onClick={() => setDropdownOpen(false)}
					>
						{subLinks.map((subLink, index) => (
							<li
								key={`${subLink.title}-${index}`}
								className="relative  whitespace-nowrap py-3 text-center align-top text-base lg:px-4 lg:py-2 lg:text-left"
							>
								<a
									href={subLink.url}
									className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
								>
									{subLink.title}
								</a>
							</li>
						))}
					</motion.ul>
				</AnimatePresence>
			)}
		</div>
	);
};
