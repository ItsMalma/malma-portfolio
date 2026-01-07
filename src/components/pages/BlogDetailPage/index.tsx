import * as dateFns from "date-fns";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { BlogDetailPageProps } from "#/components/pages/BlogDetailPage/types";

function Loading() {
	return (
		<>
			<span className="bg-dark-border dark:bg-light-border mb-1 h-7.5 w-1/2 animate-pulse rounded sm:h-9 xl:h-12" />
			<span className="bg-dark-border dark:bg-light-border mb-8 h-3.5 w-1/6 animate-pulse rounded sm:h-4 xl:h-4.5" />
			<span className="bg-dark-border dark:bg-light-border mb-5 h-35 w-full animate-pulse rounded sm:h-35.5 xl:h-36" />
			<span className="bg-dark-border dark:bg-light-border mb-5 h-30 w-full animate-pulse rounded sm:h-30.5 xl:h-31" />
			<span className="bg-dark-border dark:bg-light-border mb-5 h-31 w-full animate-pulse rounded sm:h-31.5 xl:h-32" />
		</>
	);
}

export default function BlogDetailPage({
	data,
	isLoading,
}: BlogDetailPageProps) {
	return (
		<article className="mb-8 flex flex-col items-center justify-center">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<h2 className="mb-1 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
						{data.blog.title}
					</h2>
					<div className="mb-8 text-center text-sm opacity-75 sm:text-base xl:text-lg">
						<span>Published </span>{" "}
						<time dateTime={data.blog.publishedAt.toISOString()}>
							{dateFns.formatDate(data.blog.publishedAt, "MMM dd, yyyy")}
						</time>
					</div>
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							p: (props) => {
								return (
									<p
										{...props}
										className="mb-5 text-base tracking-wide sm:text-lg xl:text-xl"
									/>
								);
							},
						}}
					>
						{data.blog.content}
					</Markdown>
				</>
			)}
		</article>
	);
}
