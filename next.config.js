/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"images.pexels.com",
			"plus.unsplash.com",
			"images.unsplash.com",
			"files.casted.us",
		],
	},
};

module.exports = nextConfig;
