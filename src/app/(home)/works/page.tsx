import { MainContent } from "@/components/layout";
import { ProjectList } from "@/components/ui/list";
import React from "react";

const PostPage = () => {
    return (
        <MainContent>
            <ProjectList display={false} />
        </MainContent>
    );
};

export default PostPage;
