"use client";

import * as React from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const products = [
	{
		id: 1,
		title: "Fresh Organic Apples",
		description: "Crisp and juicy apples from local orchards.",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 2,
		title: "Whole Grain Bread",
		description: "Freshly baked, nutritious whole grain bread.",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 3,
		title: "Free-Range Eggs",
		description: "Farm-fresh eggs from happy, free-range chickens.",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 4,
		title: "Organic Milk",
		description: "Creamy, nutrient-rich milk from grass-fed cows.",
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 5,
		title: "Assorted Vegetables",
		description: "A colorful mix of fresh, seasonal vegetables.",
		image: "/placeholder.svg?height=200&width=200",
	},
];

export default function ProductCarousel() {
	return (
		<section id="products" className="py-12 bg-yellow-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8 text-yellow-800">
					Our Current Offers
				</h2>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full max-w-5xl mx-auto"
				>
					<CarouselContent>
						{products.map((product) => (
							<CarouselItem
								key={product.id}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<div className="p-1">
									<Card>
										<CardContent className="flex flex-col items-center p-6">
											<Image
												src={product.image}
												alt={product.title}
												width={200}
												height={200}
												className="w-full h-48 object-cover rounded-md mb-4"
											/>
											<h3 className="text-xl font-semibold mb-2 text-yellow-800">
												{product.title}
											</h3>
											<p className="text-yellow-700 text-center h-[50px]">
												{product.description}
											</p>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:flex" />
					<CarouselNext className="hidden md:flex" />
				</Carousel>
				<div className="mt-4 flex items-center justify-center text-yellow-600 md:hidden">
					<span className="mr-2">Swipe to see more</span>
					<ChevronRight className="w-4 h-4" />
				</div>
			</div>
		</section>
	);
}
