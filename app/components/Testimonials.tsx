import { Star } from "lucide-react";

const testimonials = [
	{
		name: "John Doe",
		rating: 5,
		text: "Great local shop with friendly staff and a wide range of products!",
	},
	{
		name: "Jane Smith",
		rating: 4,
		text: "Always find what I need here. Convenient location and good prices.",
	},
	{
		name: "Mike Johnson",
		rating: 5,
		text: "The fresh produce section is amazing. Love shopping here!",
	},
];

export default function Testimonials() {
	return (
		<section className="bg-white py-12">
			<div className="container mx-auto px-4">
				<h2 className="mb-8 text-center text-3xl font-bold">
					What Our Customers Say
				</h2>
				<div className="grid gap-8 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="rounded-lg bg-yellow-50 p-6 shadow-md transition-transform hover:scale-105"
						>
							<div className="mb-4 flex">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 fill-yellow-500 text-yellow-500"
									/>
								))}
							</div>
							<p className="mb-4 text-gray-600">{testimonial.text}</p>
							<div className="inline-block border-t border-gray-200 pt-2 text-sm font-semibold">
								{testimonial.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
