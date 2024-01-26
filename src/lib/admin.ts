import { IBlog } from "@/model/Blog";
import { BlogType } from "@/types/blogs";

export const fetchBlogAdminList = async (blogType: BlogType) => {
    const response = await fetch(process.env.BASE_URL ?? "" + "/api/v1/blog?type="+blogType+"&visibility=all");
    const payload = await response.json();
    
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return [];
};

export const fetchBlogById = async (blogType: string, id: string) => {
    const response = await fetch(
        (process.env.BASE_URL ?? "") + (`/api/v1/blog?id=${id}&type=${blogType}&visibility=all`)
    );
    const payload = await response.json();
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return {};
};

export const updateBlog = async (blog: IBlog) => {
    const response = await fetch(process.env.BASE_URL ?? "" + "/api/v1/blog", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(blog),
    });
    const payload = await response.json();
    return payload;
};

export const removeBlog = async (id: string) => {
    const response = await fetch(process.env.BASE_URL ?? "" + "/api/v1/blog?id="+id, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json',
        },
    });
    const payload = await response.json();
    return payload;
};
