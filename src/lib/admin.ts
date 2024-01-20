
export const fetchBlogList = async () => {
    const response = await fetch(process.env.BASE_URL + "/api/v1/admin/blog");
    const payload = await response.json();
    if (payload.statusCode == 200) {
        return payload.data;
    }
    
    return [];
};