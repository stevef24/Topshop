/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
	return (
		<div
			id="about"
			className="bg-yellow-400 justify-center flex flex-col  items-center gap-10 py-16 w-full px-10"
		>
			<h2 className="text-6xl font-bold">About Us</h2>
			<div className="max-w-[800px]">
				<p className="text-center">
					Welcome to Topshop Convenience, your friendly, family-owned store
					located in the heart of NG6 0DT. We take pride in serving our
					community by providing a wide range of daily essentials, always with a
					warm smile and helpful attitude. Our shelves are stocked with
					carefully selected products to cater to your needs, ensuring that
					you'll find what you're looking for in our cozy store. At Topshop
					Convenience, we believe in building lasting relationships with our
					customers, and we strive to make your shopping experience as pleasant
					and convenient as possible. Come visit us and experience the
					difference of a truly local, family-run business.
				</p>
			</div>
		</div>
	);
};

export default About;
