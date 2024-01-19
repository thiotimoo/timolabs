import MainLayout from "@/components/layout/MainLayout";
import ProjectList from "@/components/list/ProjectList";
import React from "react";

const PostPage = () => {
    return (
        <MainLayout>
            <ProjectList display={false} />
        </MainLayout>
    );
};

export default PostPage;
