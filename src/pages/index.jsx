import Head from "next/head";

import { events } from "@/data/_hackathons";
import { formatDate } from "@/utils";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	// console.log(events);
	return (
		<>
			<Head>
				<title>Hackathon Board</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
			</Head>
			<header className="w-full fixed z-50 py-3 shadow-2xl bg-white">
				<div className=" container mx-auto">
					<Link href={`/`} className="text-xl font-semibold">
						Hackathon Board
					</Link>
				</div>
			</header>
			<main className="container pt-24 pb-16 mx-auto px-8 ">
				<div className="grid md:grid-cols-3 gap-8">
					{events.map((event) => (
						<Link
							href={`/hackathons/${event.id}`}
							key={event.name}
							className="bg-white shadow-lg rounded-lg p-5 hover:scale-105 transition duration-500"
						>
							<Image
								src="https://images.pexels.com/photos/3688761/pexels-photo-3688761.jpeg?auto=compress&cs=tinysrgb&w=600"
								width={600}
								height={300}
								alt=""
							/>

							<div className="mt-4 flex items-center justify-between">
								<h3 className="text-xl font-semibold ">{event.name}</h3>
								<p className=" text-blue-700 font-bold ">{event.admission}</p>
							</div>

							<p className="text-slate-700 tracking-wider uppercase text-sm">
								{event.venue}
							</p>

							<p className="text-slate-600 mt-4 text-center text-lg">
								{formatDate(event.date)}
							</p>

							{/* <div className="flex items-center justify-between">
								<p className="rounded-2xl text-xs bg-blue-600 p-2 text-blue-50">
									{formatDate(event.date)}
								</p>
							</div> */}
							{/* <p>{event.type}</p> */}
							<div className="mt-4">
								<h3 className="text-xs font-bold text-slate-800 ">Sponsors:</h3>
								<div className="flex gap-3 text-slate-600">
									{event.sponsors.map((sponsor) => (
										<p key={sponsor.name} className="text-sm">
											{sponsor.name}
										</p>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
