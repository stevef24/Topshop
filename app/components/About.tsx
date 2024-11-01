/* eslint-disable react/no-unescaped-entities */
import { Store } from "lucide-react";

export default function About() {
	return (
		<section
			id="about"
			className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-4xl">
				<div className="text-center mb-10">
					<Store className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-yellow-800 mb-4">
						About Topshop Convenience
					</h2>
					<p className="text-xl text-yellow-600 max-w-2xl mx-auto">
						Your friendly neighborhood store in the heart of NG6 0DT
					</p>
				</div>
				<div className="space-y-8 text-center md:text-left">
					<div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-6">
						<div className="md:w-1/2">
							<h3 className="text-2xl font-semibold text-yellow-700 mb-2">
								Community-Focused
							</h3>
							<p className="text-lg text-gray-600">
								We're more than just a shop – we're a part of your community,
								committed to serving our neighbors with care and dedication.
							</p>
						</div>
						<div className="md:w-1/2">
							<h3 className="text-2xl font-semibold text-yellow-700 mb-2">
								Wide Selection
							</h3>
							<p className="text-lg text-gray-600">
								Our shelves are stocked with a carefully curated range of daily
								essentials and local favorites, from fresh produce to household
								items.
							</p>
						</div>
					</div>
					<div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-6">
						<div className="md:w-1/2">
							<h3 className="text-2xl font-semibold text-yellow-700 mb-2">
								Friendly Service
							</h3>
							<p className="text-lg text-gray-600">
								At Topshop, we believe in building lasting relationships. Our
								team is here to greet you with a warm smile and help you find
								exactly what you need.
							</p>
						</div>
						<div className="md:w-1/2">
							<h3 className="text-2xl font-semibold text-yellow-700 mb-2">
								Convenience First
							</h3>
							<p className="text-lg text-gray-600">
								Located in the heart of NG6 0DT, we're your go-to spot for
								quick, easy, and friendly shopping experiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
