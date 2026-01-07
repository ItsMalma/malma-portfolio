import BlogListItem from "#/components/pages/BlogListPage/BlogListItem";
import type { BlogListPageProps } from "#/components/pages/BlogListPage/types";

export default function BlogListPage({ data, isLoading }: BlogListPageProps) {
	return (
		<ul className="mb-8 flex flex-col items-center justify-center gap-5">
			{isLoading ? (
				<>
					<BlogListItem data={undefined} isLoading={true} />
					<BlogListItem data={undefined} isLoading={true} />
					<BlogListItem data={undefined} isLoading={true} />
					<BlogListItem data={undefined} isLoading={true} />
					<BlogListItem data={undefined} isLoading={true} />
				</>
			) : (
				data.blogs.map((blog) => (
					<BlogListItem data={{ blog }} isLoading={false} />
				))
			)}
		</ul>
	);
}
