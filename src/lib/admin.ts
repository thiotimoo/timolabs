import { IBlog } from "@/model/Blog";

export const fetchBlogList = async () => {
    const response = await fetch(process.env.BASE_URL ?? "" + "/api/v1/admin/blog");
    const payload = await response.json();
    
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return [];
};

export const publishBlog = async (blog: IBlog) => {
    const response = await fetch(process.env.BASE_URL ?? "" + "/api/v1/admin/blog", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(blog),
    });
    const payload = await response.json();
    return payload;
};
