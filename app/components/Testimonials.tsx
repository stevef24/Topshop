import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
	{
		name: "Chloe Ingham",
		rating: 5,
		text: "Absolutely love this convenience store! The owners are lovely, friendly and helpful. The prices are great and they always have a great selection of stock.",
	},
	{
		name: "Tamy Burton",
		rating: 5,
		text: "Great experience at Top shop! Went to collect a parcel and was blown away by the friendly staff. They were efficient, welcoming, and even cracked a few jokes.",
	},
	{
		name: "Szymon Kalarus",
		rating: 5,
		text: "My favourite shop. Owners are the most friendly people I know. Good selection of items, a pickup point for Amazon. Highly recommended over other shops.",
	},
];

export default function Testimonials() {
	return (
		<section
			className="bg-gradient-to-b from-white to-yellow-50 py-16 md:py-24"
			id="reviews"
		>
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
					What Our Customers Say
				</h2>
				<div className="grid gap-8 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="bg-white transition-shadow hover:shadow-md"
						>
							<CardHeader className="pb-4">
								<div className="flex items-center justify-between">
									<CardTitle className="text-lg font-semibold text-gray-900">
										{testimonial.name}
									</CardTitle>
									<div className="flex">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-yellow-500 text-yellow-500"
											/>
										))}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">{testimonial.text}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
