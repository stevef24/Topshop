"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";

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
					<div>
						<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
							{heading}
						</h1>
						<p className="md:text-md">{description}</p>
						<div className="mt-6 flex gap-x-4 md:mt-8 ">
							{buttons.map((button, index) => (
								<Button
									key={`${button.title}-${index}`}
									variant={button.variant}
									size={button.size}
									iconRight={button.iconRight}
									iconLeft={button.iconLeft}
									className="rounded-full bg-yellow-300 text-black"
								>
									{button.title}
								</Button>
							))}
						</div>
					</div>
					<div>{image.component}</div>
				</div>
			</div>
		</header>
	);
};
