import Image from "next/image";

const productList = [
	{
		id: 1,
		name: "Chocolate Bar",
		price: "£1.50",
		description: "Delicious milk chocolate",
		imageSrc: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
		imageAlt: "Milk chocolate bar",
	},
	{
		id: 2,
		name: "Potato Chips",
		price: "£0.99",
		description: "Crispy and salty",
		imageSrc: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d",
		imageAlt: "Bag of potato chips",
	},
	{
		id: 3,
		name: "Bottled Water",
		price: "£0.79",
		description: "Refreshing spring water",
		imageSrc: "https://images.unsplash.com/photo-1616118132534-381148898bb4",
		imageAlt: "Plastic bottle of water",
	},
	{
		id: 4,
		name: "Chewing Gum",
		price: "£0.50",
		description: "Spearmint flavor",
		imageSrc: "https://images.unsplash.com/photo-1576020240077-50252c105355",
		imageAlt: "Pack of spearmint chewing gum",
	},
	{
		id: 5,
		name: "Energy Drink",
		price: "£1.29",
		description: "Boost your energy",
		imageSrc: "https://images.unsplash.com/photo-1592892111425-15e04305f961",
		imageAlt: "Can of energy drink",
	},
	{
		id: 6,
		name: "Instant Noodles",
		price: "£0.89",
		description: "Chicken flavor",
		imageSrc: "https://images.unsplash.com/photo-1590779033281-f32e2c238806",
		imageAlt: "Cup of instant noodles",
	},
	{
		id: 7,
		name: "Breakfast Cereal",
		price: "£2.49",
		description: "Chocolate flavored",
		imageSrc: "https://images.unsplash.com/photo-1587413068410-68dbfe36c9d3",
		imageAlt: "Box of chocolate flavored cereal",
	},
	{
		id: 8,
		name: "Candy Bar",
		price: "£0.69",
		description: "Caramel and nougat",
		imageSrc: "https://images.unsplash.com/photo-1586994603619-a5c70f7a8f3e",
		imageAlt: "Caramel and nougat candy bar",
	},
	{
		id: 9,
		name: "Disposable Lighter",
		price: "£1.10",
		description: "Reliable and long-lasting",
		imageSrc: "https://images.unsplash.com/photo-1666923804839-81519d4cc91a",
		imageAlt: "Disposable lighter",
	},
	{
		id: 10,
		name: "Canned Soda",
		price: "£0.80",
		description: "Refreshing cola",
		imageSrc: "https://images.unsplash.com/photo-1592892111252-d3a4eca9643a",
		imageAlt: "Can of cola soda",
	},
	{
		id: 11,
		name: "Granola Bar",
		price: "£0.99",
		description: "Healthy and filling",
		imageSrc: "https://images.unsplash.com/photo-1585434676811-929a9edaec0a",
		imageAlt: "Granola bar with nuts and dried fruit",
	},
	{
		id: 12,
		name: "Plastic Utensils",
		price: "£0.49",
		description: "Fork, knife, and spoon set",
		imageSrc: "https://images.unsplash.com/photo-1590779033281-f32e2c238806",
		imageAlt: "Plastic utensils set",
	},
];

export default function Products() {
	return (
		<div className=" container">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-6xl  text-center font-bold tracking-tight text-gray-900">
					Latest products
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 min-w-[200px]">
					{productList.map((product) => (
						<div key={product.id} className="group relative">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<Image
									src={product.imageSrc}
									alt={product.imageAlt}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									width={200}
									height={200}
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700"></h3>
									<p className="mt-1 text-sm text-gray-500">
										{product.description}
									</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
