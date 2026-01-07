import { Link } from "@tanstack/react-router";
import * as dateFns from "date-fns";

import type { BlogListItemProps } from "#/components/pages/BlogListPage/BlogListItem/types";

function Loading() {
	return (
		<li className="flex w-full flex-col gap-2">
			<span className="bg-dark-border dark:bg-light-border h-4.5 w-2/3 animate-pulse rounded sm:h-5 xl:h-6" />
			<span className="bg-dark-border dark:bg-light-border h-3.5 w-1/6 animate-pulse rounded sm:h-4 xl:h-4.5" />
		</li>
	);
}

export default function BlogListItem({ data, isLoading }: BlogListItemProps) {
	if (isLoading) {
		return <Loading />;
	}

	return (
		<li className="flex w-full flex-col">
			<Link
				to="/blog/$slug"
				params={{ slug: data.blog.slug }}
				className="text-lg font-semibold hover:underline sm:text-xl xl:text-2xl"
			>
				{data.blog.title}
			</Link>
			<time
				dateTime={data.blog.publishedAt.toISOString()}
				className="text-sm opacity-75 sm:text-base xl:text-lg"
			>
				{dateFns.formatDate(data.blog.publishedAt, "MMM dd, yyyy")}
			</time>
		</li>
	);
}
