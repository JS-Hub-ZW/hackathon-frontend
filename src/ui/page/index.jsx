export default function Page({ children }) {
	return (
		<>
			<header>header</header>
			<main>{children}</main>
			<footer>footer</footer>
		</>
	);
}
