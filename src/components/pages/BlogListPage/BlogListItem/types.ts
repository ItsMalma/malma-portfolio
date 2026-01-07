import type { Blog } from "#/types/domains";

export type BlogListItemData = {
	blog: Blog;
};

export type BlogListItemProps =
	| {
			data: BlogListItemData;
			isLoading: false;
	  }
	| {
			data: undefined;
			isLoading: true;
	  };
