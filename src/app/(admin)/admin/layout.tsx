import { Metadata } from "next";
import SidebarLayout from "@/components/layout/SidebarLayout";
import ProviderLayout from "@/components/layout/ProviderLayout";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Timothy's Admin Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-row w-full h-full min-h-svh max-w-screen-2xl divide-x divide-adaptive ">
            <SidebarLayout className="w-72" />
            <ProviderLayout>
                <main className="flex-grow w-full flex flex-col">
                    {children}
                </main>
            </ProviderLayout>
        </div>
    );
}
