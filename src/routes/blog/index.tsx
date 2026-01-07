import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import BlogListPage from "#/components/pages/BlogListPage";
import ErrorPage from "#/components/pages/ErrorPage";
import { blogService } from "#/services";

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
});

function RouteComponent() {
	const blogsQuery = useQuery({
		queryKey: ["blogs"],
		queryFn: blogService.getAllBlogs,
	});

	if (blogsQuery.isLoading || blogsQuery.isPending) {
		return <BlogListPage data={undefined} isLoading={true} />;
	}
	if (blogsQuery.isError) {
		return <ErrorPage />;
	}

	return (
		<BlogListPage
			data={{
				blogs: blogsQuery.data,
			}}
			isLoading={false}
		/>
	);
}
