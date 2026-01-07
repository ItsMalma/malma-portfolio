import type { ApiBlog, ApiListResult, ApiSingleResult } from "#/types/api";
import type { Blog } from "#/types/domains";
import type { BlogService } from "#/types/services";

const blogApiService: BlogService = {
	getAllBlogs: async () => {
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/blogs`);
		if (!response.ok) {
			throw new Error(`Failed to fetch blogs from API`, {
				cause: await response.json(),
			});
		}

		const { data, errors } = (await response.json()) as ApiListResult<ApiBlog>;
		if (data === null) {
			throw new Error(`Failed to fetch blogs from API`, {
				cause: errors,
			});
		}

		const blogs = data.map<Blog>((apiBlog) => ({
			...apiBlog,
			publishedAt: apiBlog.published_at,
		}));

		return blogs;
	},

	getBlog: async (slug) => {
		const response = await fetch(
			`${import.meta.env.VITE_BASE_API_URL}/blogs/${slug}`,
		);
		if (!response.ok) {
			throw new Error(`Failed to fetch blog from API`, {
				cause: await response.json(),
			});
		}

		const { data, errors } =
			(await response.json()) as ApiSingleResult<ApiBlog>;
		if (data === null) {
			throw new Error(`Failed to fetch blog from API`, {
				cause: errors,
			});
		}

		const blog: Blog = {
			...data,
			publishedAt: data.published_at,
		};

		return blog;
	},
};

export default blogApiService;
