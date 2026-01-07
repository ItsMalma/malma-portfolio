import { useQuery } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";

import BlogDetailPage from "#/components/pages/BlogDetailPage";
import ErrorPage from "#/components/pages/ErrorPage";
import { blogService } from "#/services";

export const Route = createFileRoute("/blog/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const { slug } = Route.useParams();

	const blogQuery = useQuery({
		queryKey: ["blogs", slug],
		queryFn: (ctx) => blogService.getBlog(ctx.queryKey[1]),
	});

	if (blogQuery.isLoading || blogQuery.isPending) {
		return <BlogDetailPage data={undefined} isLoading={true} />;
	}
	if (blogQuery.isError) {
		return <ErrorPage />;
	}
	if (blogQuery.data === null) {
		throw notFound();
	}

	return <BlogDetailPage data={{ blog: blogQuery.data }} isLoading={false} />;
}
