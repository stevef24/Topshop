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
					<div>
						<Image
							src={
								"https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							className="w-full object-cover rounded-3xl"
							alt={"shop image"}
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
