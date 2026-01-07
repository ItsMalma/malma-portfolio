import { createRouter } from "@tanstack/react-router";

import { routeTree } from "#/libs/generated/route-tree";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultViewTransition: true,
});

export default router;
