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
			<div className="container px-4 md:px-6 mx-auto max-w-3xl">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Get in Touch
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						We'd love to hear from you! Have a suggestion or question? Drop us a
						message below.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
				<p className="text-center text-sm text-gray-500 mt-8">
					We aim to respond to all messages within 24 hours. Thanks for reaching
					out!
				</p>
			</div>
		</section>
	);
}
