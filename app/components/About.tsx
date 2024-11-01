import { Store, Users, ShoppingBag, Smile, Clock } from "lucide-react";

export default function About() {
	const features = [
		{
			icon: Users,
			title: "Community-Focused",
			description: "More than a shop – we're part of your community.",
		},
		{
			icon: ShoppingBag,
			title: "Wide Selection",
			description: "Curated range of essentials and local favorites.",
		},
		{
			icon: Smile,
			title: "Friendly Service",
			description: "Building relationships with warm, helpful attitudes.",
		},
		{
			icon: Clock,
			title: "Convenience First",
			description: "Quick, easy shopping in the heart of NG6 0DT.",
		},
	];

	return (
		<section
			id="about"
			className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<Store className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
						About Topshop Convenience
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Your friendly neighborhood store in the heart of NG6 0DT
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="flex items-start space-x-4">
							<feature.icon className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
