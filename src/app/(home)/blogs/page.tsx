import { MainContent } from "@/components/layout";
import { PostList } from "@/components/ui/list";
import React from "react";

const PostPage = () => {
    return (
        <MainContent>
            <PostList display={false}/>
        </MainContent>
    );
};

export default PostPage;
