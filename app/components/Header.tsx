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
					<div className="flex items-center justify-center mt-6 space-x-4">
						<Link
							href="https://www.facebook.com/profile.php?id=100095278175115&mibextid=LQQJ4d&rdid=za6BjsBTsRaWJYZ1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FutLSxhyzeL9aMV1k%2F%3Fmibextid%3DLQQJ4d"
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
							aria-label="Visit our Facebook page"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-8 w-8"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</Link>
						<Link
							href="https://www.instagram.com/topshopconvenience/profilecard/?igsh=cWtwaGZyYnc5Z2Zm"
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
							aria-label="Visit our Instagram page"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-8 w-8"
							>
								<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
