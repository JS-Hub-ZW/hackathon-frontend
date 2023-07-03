import Link from "next/link";

export default function Page({ children }) {
	return (
		<>
			<header className="py-3 shadow-2xl bg-white">
				<div className=" container mx-auto">
					<Link href={`/`} className="text-xl font-semibold">
						Hackathon Board
					</Link>
				</div>
			</header>
			<main className="min-h-screen">{children}</main>
			<footer>footer</footer>
		</>
	);
}
