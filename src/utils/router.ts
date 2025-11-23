import { createRouter } from "@tanstack/react-router";

import { routeTree } from "#/utils/generated/route-tree";

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultViewTransition: true,
});
