import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";

import { Footer } from "#/components/layout/footer";
import { Header } from "#/components/layout/header";

export const Route = createRootRoute({
	component() {
		return (
			<>
				<HeadContent />
				<Header />
				<div className="container mx-auto max-w-lg px-4 pt-10">
					<Outlet />
				</div>
				<Footer />
			</>
		);
	},
});
