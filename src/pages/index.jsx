import Head from "next/head";

import { events } from "@/data/_hackathons";
import { formatDate } from "@/utils";

export default function Home() {
	// console.log(events);
	return (
		<>
			<Head>
				<title>Hackathon Board</title>
				<meta name="description" content="Bridging the gap between worlds." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
			</Head>
			<main className="container py-16 mx-auto px-8 border border-red-500">
				<div className="grid grid-cols-3 cd gap-8">
					{events.map((event) => (
						<div
							key={event.name}
							className="bg-white b shadow-lg rounded-lg p-5"
						>
							<h3 className="text-xl font-semibold">{event.name}</h3>
							<p>{event.venue}</p>
							<small>{formatDate(event.date)}</small>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
