import MainLayout from "@/components/Layouts/MainLayout";
import PostList from "@/components/Lists/ListPost";
import React from "react";

const PostPage = () => {
    return (
        <MainLayout>
            <PostList display={false}/>
        </MainLayout>
    );
};

export default PostPage;
