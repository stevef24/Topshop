"use client";

import type { ImageProps } from "@relume_io/relume-ui";
import dhl from "/public/dhl-1.svg";
import dpd from "/public/dpd-logo-2015-.svg";
import ebay from "/public/ebay.svg";
import fedex from "/public/fedex-express-6.svg";
import amazon from "/public/logo-amazon.svg";
import royalMail from "/public/royal-mail-2.svg";
import ups from "/public/ups-logo-1.svg";
import Image from "next/image";

type Props = {
	heading: string;
	images: ImageProps[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Logo3 = (props: Logo3Props) => {
	const { heading, images } = {
		...props,
	} as Props;
	return (
		<section className="overflow-hidden py-12 md:py-16 lg:py-20 bg-yellow-100">
			<div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
				<h1 className="text-center  font-bold leading-[1.2] text-6xl">
					{heading}
				</h1>
			</div>
			<div className="flex items-center pt-[28px] md:pt-0">
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<div
							key={index}
							className="flex shrink-0 animate-loop-horizontally items-center"
						>
							{images.map((logo, index) => (
								<Image
									className="mx-12"
									key={`${logo.alt} + ${index}`}
									src={logo.src}
									alt={`${logo.alt}`}
									width={100}
									height={100}
								/>
							))}
						</div>
					))}
			</div>
		</section>
	);
};

export const imagesList = [
	{
		src: "/dhl-1.svg",
		alt: "dhl logo",
	},
	{
		src: "/dpd-logo-2015-.svg",
		alt: "dpd logo",
	},
	{
		src: "/ebay.svg",
		alt: "ebay logo",
	},
	{
		src: "/fedex-express-6.svg",
		alt: "fedex logo",
	},
	{
		src: "/logo-amazon.svg",
		alt: "amazon logo",
	},
	{
		src: "/ups-logo-1.svg",
		alt: "royal mail logo",
	},
	{
		src: "/royal-mail-2.svg",
		alt: "ups logo",
	},
];
