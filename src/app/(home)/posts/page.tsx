import MainLayout from "@/components/layout/MainLayout";
import PostList from "@/components/list/PostList";
import React from "react";

const PostPage = () => {
    return (
        <MainLayout>
            <PostList display={false}/>
        </MainLayout>
    );
};

export default PostPage;
