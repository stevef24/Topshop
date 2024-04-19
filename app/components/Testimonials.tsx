"use client";

import type { ImageProps } from "@relume_io/relume-ui";
import { Star } from "@relume_io/relume-ui";
import Image from "next/image";

type Testimonial = {
	testimonial: string;
	avatar: ImageProps;
	name: string;
	position: string;
	companyName: string;
	numberOfStars: number;
};

type Props = {
	heading: string;
	description: string;
	testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
	Props;

export function Testimonial17(props: Testimonial17Props) {
	const { heading, description, testimonials } = {
		...props,
	} as Props;
	return (
		<section
			id="reviews"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-yellow-100"
		>
			<div className="container">
				<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
					<h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						{heading}
					</h1>
					<p className="md:text-md">{description}</p>
				</div>
				<div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div
							key={`${testimonial.testimonial}-${index}`}
							className="flex w-full flex-col items-start justify-between border rounded-3xl border-border-primary p-6 md:p-8"
						>
							<div className="mb-5 md:mb-6">
								<div className="mb-6 flex">
									{Array(testimonial.numberOfStars)
										.fill(null)
										.map((_, starIndex) => (
											<Star key={starIndex} className="mr-1 size-6" />
										))}
								</div>
								<blockquote
									className={`before:content-['"'] after:content-['"'] md:text-md`}
								>
									{testimonial.testimonial}
								</blockquote>
							</div>
							<div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
								<div>
									<p className="font-semibold">{testimonial.name}</p>
									<p>
										{testimonial.position}, {testimonial.companyName}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
