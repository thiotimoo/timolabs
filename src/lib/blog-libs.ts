import { BlogType } from "@/types/blogs";

export const fetchSortedBlogs = async (
    blogType: BlogType,
    limit: number = 100
) => {
    const blogList = await fetchAllBlogs(blogType);

    return blogList
        .sort((a: any, b: any) => {
            if (a.pinned && !b.pinned) {
                return -1; // Pinned posts come first
            } else if (!a.pinned && b.pinned) {
                return 1; // Pinned posts come first
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return -1;
            }
        })
        .slice(0, limit);
};

export const fetchAllBlogs = async (blogType: BlogType) => {
    const response = await fetch(
        `${process.env.BASE_URL}/api/v1/blog?type=${blogType}`,
        { cache: 'no-store' }
    );
    const payload = await response.json();

    if (payload.statusCode == 200) {
        return payload.data;
    }

    return [];
};

export const fetchBlogFromSlug = async (blogType: string, slug: string) => {
    const response = await fetch(
        `${process.env.BASE_URL}/api/v1/blog?slug=${slug}&type=${blogType}`,
        { cache: 'no-store' }
    );
    const payload = await response.json();
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return {};
};
