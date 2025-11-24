export function Footer() {
	const now = new Date();

	return (
		<footer className="z-50 w-screen border-t">
			<div className="container mx-auto flex max-w-lg items-center justify-center px-4 py-2 md:py-3">
				<p className="text-center text-sm">
					&copy; {now.getFullYear()} Adam Akmal Madani. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
