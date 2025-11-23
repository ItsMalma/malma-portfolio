import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Header } from "#/components/layout/header";

export const Route = createRootRoute({
	component() {
		return (
			<>
				<Header />
				{/* Container */}
				<div className="container mx-auto max-w-lg px-4 pt-10">
					<Outlet />
				</div>
			</>
		);
	},
});
