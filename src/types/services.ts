import type { Blog } from "#/types/domains";

export interface BlogService {
	getAllBlogs(): Promise<Blog[]>;
	getBlog(slug: string): Promise<Blog | null>;
}
