/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			// Handle form submission here
		}, 2000);
	};

	return (
		<section
			id="contact"
			className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-yellow-50"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Get in Touch
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						We'd love to hear from you! Have a suggestion or question? Drop us a
						message or visit us in person.
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex-1">
						<h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Name
								</label>
								<Input
									id="name"
									placeholder="Your name"
									required
									className="w-full"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="Your email"
									required
									className="w-full"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Message
								</label>
								<Textarea
									id="message"
									placeholder="What's on your mind?"
									className="min-h-[120px] w-full"
									required
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-yellow-500 text-black hover:bg-yellow-400"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="mr-2 h-4 w-4" />
										Send Message
									</>
								)}
							</Button>
						</form>
						<p className="text-sm text-gray-500 mt-4">
							We aim to respond to all messages within 24 hours. Thanks for
							reaching out!
						</p>
					</div>
					<div className="flex-1">
						<h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
						<div className="flex justify-center aspect-h-9">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.718773430126!2d-1.1848224031260044!3d52.98945920047691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1c9044fd621%3A0x388100e929e7f0db!2sTop-Shop%20Convenience!5e0!3m2!1sen!2suk!4v1730495261796!5m2!1sen!2suk"
								width="450"
								height="450"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
