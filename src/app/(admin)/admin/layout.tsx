import { Metadata } from "next";
import NavAdminItems from "@/lib/data/nav-admin-items";
import { Provider, Sidebar } from "@/components/layout";

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
        <div className="flex md:flex-row flex-col w-full h-full min-h-svh max-w-screen-2xl divide-x divide-adaptive ">
            <Sidebar data={NavAdminItems}/>
            <Provider>
                <main className="flex-grow w-full flex flex-col">
                    {children}
                </main>
            </Provider>
        </div>
    );
}
