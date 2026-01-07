import type { Blog } from "#/types/domains";

export type BlogListPageData = {
	blogs: Blog[];
};

export type BlogListPageProps =
	| {
			data: BlogListPageData;
			isLoading: false;
	  }
	| {
			data: undefined;
			isLoading: true;
	  };
