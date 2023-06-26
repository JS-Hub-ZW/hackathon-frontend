export function formatDate(date) {
	return new Date(date).toLocaleDateString("en-UK", {
		// timeZone: "UTC",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
