import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export const imagesList = [
	{ src: "/dhl-1.svg", alt: "dhl logo" },
	{ src: "/dpd-logo-2015-.svg", alt: "dpd logo" },
	{ src: "/ebay.svg", alt: "ebay logo" },
	{ src: "/fedex-express-6.svg", alt: "fedex logo" },
	{ src: "/logo-amazon.svg", alt: "amazon logo" },
	{ src: "/ups-logo-1.svg", alt: "royal mail logo" },
	{ src: "/royal-mail-2.svg", alt: "ups logo" },
	{ src: "/inpost.png", alt: "inpost logo" },
];

export function DeliveryPartners() {
	return (
		<section id="delivery-partners" className="bg-yellow-50 py-12">
			<div className="py-14">
				<div className="container mx-auto px-4 md:px-8">
					<h2 className="text-3xl font-bold text-center mb-8 text-yellow-800">
						Our Delivery Partners
					</h2>
					<div className="relative mt-6">
						<Marquee className="max-w-full [--duration:40s]">
							{imagesList.map((logo, idx) => (
								<Image
									key={idx}
									src={logo.src}
									alt={logo.alt}
									width={160}
									height={40}
									className="h-10 w-40 px-2 object-contain dark:brightness-0 dark:invert"
								/>
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-yellow-50"></div>
						<div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-yellow-50"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
