import Header from "./components/Header";

import OpeningTimes from "./components/OpeningTimes";

import About from "./components/About";

import Products from "./components/Products";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

import Testimonials from "./components/Testimonials";
import { DeliveryPartners } from "./components/LogoSection";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<DeliveryPartners />
			<OpeningTimes />
			<Products />
			<Testimonials />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}
