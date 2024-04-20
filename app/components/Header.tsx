"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";

type Props = {
	heading: string;
	description: string;
	buttons: ButtonProps[];
	image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header1 = (props: Header1Props) => {
	const { heading, description, buttons, image } = {
		...props,
	} as Props;
	return (
		<header className="px-[5%] py-32 md:py-24 lg:py-28">
			<div className="container">
				<div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col max-md:justify-center md:items-start">
						<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl max-md:text-center">
							{heading}
						</h1>
						<p className="md:text-md max-md:text-center">{description}</p>
						<div className="mt-6 flex gap-x-4 md:mt-8 max-md:justify-center">
							{buttons.map((button, index) => (
								<Link
									key={`${button.title}-${index}`}
									className="rounded-full py-2 px-3 bg-yellow-300 text-black border border-black"
									href={"/#products"}
								>
									{button.title}
								</Link>
							))}
						</div>
					</div>
					<div>
						<Image
							src={image.src}
							alt={"open"}
							width={500}
							height={500}
							className="rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
