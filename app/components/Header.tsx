/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.75;
		}
	}, []);

	return (
		<section className="relative h-screen overflow-hidden">
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src="/videos/shop.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

			<div className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-24 h-full flex items-center">
				<div className="flex flex-col items-center text-center max-w-[48rem] lg:items-start lg:text-left">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
						Welcome to{" "}
						<span className="text-yellow-400">Top-Shop Convenience</span>
					</h1>
					<p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed mb-8">
						Discover a wide selection of products with the warm, personal touch
						of a family-owned business. We're dedicated to offering our valued
						customers both convenience and quality, alongside exceptional,
						family-oriented service.
					</p>
					<Button
						asChild
						className="bg-yellow-500 text-black hover:bg-yellow-400 inline-flex h-14 items-center justify-center rounded-md px-8 text-lg font-semibold shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50"
					>
						<Link href="#products" className="flex items-center">
							See offers
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
