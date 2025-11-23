import { createFileRoute } from "@tanstack/react-router";

import { IndexPage } from "#/components/pages";

export const Route = createFileRoute("/")({
	component: IndexPage,
});
