import type { Blog } from "#/types/domains";

export type BlogDetailPageData = {
	blog: Blog;
};

export type BlogDetailPageProps =
	| {
			data: BlogDetailPageData;
			isLoading: false;
	  }
	| {
			data: undefined;
			isLoading: true;
	  };
