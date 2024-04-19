import { Navbar2 } from "./components/Navbar";
import Image from "next/image";
import { Header1 } from "./components/Header";
import { Logo3 } from "./components/LogoSection";
import OpeningTimes from "./components/OpeningTimes";
import { Testimonial17 } from "./components/Testimonials";
import About from "./components/About";
import { Footer7 } from "./components/Footer";
import { Contact1 } from "./components/Contact";
import { images } from "./components/LogoSection";
import Logo from "./components/Logo";
import Products from "./components/Products";

export default function Home() {
	return (
		<div className="w-full">
			<Navbar2
				links={[
					{ title: "About Us", url: "#about" },
					{ title: "Products", url: "#products" },
					{ title: "Reviews", url: "#reviews" },
				]}
				buttons={[{ title: "Contact", size: "sm" }]}
				logo={{
					component: <Logo />,
					alt: "TopShop logo",
				}}
			/>
			<Header1
				heading={"Welcome to Top-Shop Convenience"}
				description={
					"Discover a wide range of products and enjoy exceptional customer service at Top-Shop Convenience. We are dedicated to providing convenience and quality to our valued customers."
				}
				buttons={[{ title: "explore", variant: "primary" }]}
				image={{
					component: (
						<Image
							src={
								"https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							className="w-full object-cover rounded-3xl"
							alt={"shop image"}
							width={500}
							height={500}
						/>
					),
					alt: undefined,
				}}
			/>
			<Logo3 heading={"Parcel Services"} images={images} />
			<Products />
			<OpeningTimes />
			<Testimonial17
				heading={"What our customers think"}
				description={"Read what our customers have to say about us."}
				testimonials={[
					{
						testimonial:
							"really nice people, whenever we go there they always talk to you and are the best corner shop in my area :)",

						name: "Emily S.",
						position: "Customer",
						companyName: "Top-Shop Convenience",
						numberOfStars: 5,
					},
					{
						testimonial:
							"Really helpful chap sorted my paypoint cash out voucher when 6 other stores wouldnt he's got my business in future thankyou",

						name: "Greg C.",
						position: "Customer",
						companyName: "Top-Shop Convenience",
						numberOfStars: 5,
					},
					{
						testimonial:
							"Friendly family run shop. Friendly & efficient. Always happy to help.",

						name: "Ani M",
						position: "Customer",
						companyName: "Top-Shop Convenience",
						numberOfStars: 5,
					},
				]}
			/>
			<About />
			<Contact1
				tagline={"Contact us today"}
				heading={"Want us to add something to the store ? Contact us!"}
				description={""}
				button={{ title: "Submit" }}
			/>
			<Footer7
				image={{
					component: <Logo />,
					alt: undefined,
				}}
				columnLinks={[]}
				footerText={""}
				footerLinks={[]}
			/>
		</div>
	);
}
