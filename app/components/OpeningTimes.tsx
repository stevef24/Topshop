import React from "react";

const OpeningTimes = () => {
	const openingTimes = [
		{ day: "Monday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Tuesday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Wednesday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Thursday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Friday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Saturday", open: "7:00 AM", close: "9:00 PM" },
		{ day: "Sunday", open: "10", close: "7:00 PM" },
	];

	return (
		<div className="bg-yellow-400 justify-center flex flex-col md:flex-row items-center gap-20 py-10 w-full ">
			<div>
				<h2 className="text-6xl font-bold">Opening Time</h2>
			</div>

			<div>
				<table className="border border-black/40">
					<thead className="border-b border-black/40 rounded-tl-2xl">
						<tr>
							<th className="py-2 px-4  font-semibold text-left">Day</th>
							<th className="py-2 px-4  font-semibold text-left">
								Opening Time
							</th>
							<th className="py-2 px-4  font-semibold text-left">
								Closing Time
							</th>
						</tr>
					</thead>
					<tbody>
						{openingTimes.map((time, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? "bg-yellow-100" : "bg-yellow-200"}
							>
								<td className="py-2 px-4 ">{time.day}</td>
								<td className="py-2 px-4 ">{time.open}</td>
								<td className="py-2 px-4 ">{time.close}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OpeningTimes;
