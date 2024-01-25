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
