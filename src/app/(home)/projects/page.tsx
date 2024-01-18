import MainLayout from "@/components/Layouts/MainLayout";
import ProjectList from "@/components/Lists/ProjectList";
import React from "react";

const PostPage = () => {
    return (
        <MainLayout>
            <ProjectList display={false} />
        </MainLayout>
    );
};

export default PostPage;
