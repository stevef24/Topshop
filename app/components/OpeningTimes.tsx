/* eslint-disable react/no-unescaped-entities */
export default function OpeningTimes() {
	const times = [
		{ day: "Monday", hours: "8:00 AM - 9:00 PM" },
		{ day: "Tuesday", hours: "8:00 AM - 9:00 PM" },
		{ day: "Wednesday", hours: "8:00 AM - 9:00 PM" },
		{ day: "Thursday", hours: "8:00 AM - 9:00 PM" },
		{ day: "Friday", hours: "8:00 AM - 9:00 PM" },
		{ day: "Saturday", hours: "9:00 AM - 9:00 PM" },
		{ day: "Sunday", hours: "10:00 AM - 8:00 PM" },
	];

	return (
		<section className="bg-white py-12">
			<div className="container mx-auto px-4">
				<h2 className="mb-8 text-center text-3xl font-bold">Opening Times</h2>
				<h4 className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
					We're open every day of the week to serve you better. Check our hours
					below.
				</h4>
				<div className="mx-auto max-w-md overflow-hidden rounded-lg border border-gray-200 shadow-md">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<tbody>
							{times.map((time, index) => (
								<tr
									key={time.day}
									className={
										index !== times.length - 1 ? "border-b border-gray-200" : ""
									}
								>
									<td className="px-6 py-4 font-semibold text-gray-900">
										{time.day}
									</td>
									<td className="px-6 py-4">{time.hours}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
