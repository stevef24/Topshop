import React from "react";
import Image from "next/image";

const Contact = () => {
	return (
		<div className="container flex justify-center items-center flex-col gap-12 py-16 text-center p-6">
			<div>
				<h1 className="text-6xl font-bold">Contact us</h1>
				<p className="text-lg mt-2">
					Want something added to the store? Reach out!
				</p>
			</div>
			<Image src={"/email.svg"} alt={"mail"} width={300} height={300} />
			<button className="bg-yellow-300 text-black border border-black px-4 py-2 rounded-full">
				Email us
			</button>
		</div>
	);
};

export default Contact;
