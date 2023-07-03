import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-gradient-to-b from-blue-200 to-blue-100 text-slate-900 min-h-screen font-inter antialiased m">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
