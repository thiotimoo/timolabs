import { Metadata } from "next";
import NavAdminItems from "@/lib/data/nav-admin-items";
import { Provider, Sidebar } from "@/components/layout";
import "@/app/globals.css";
import { authUserSession } from "@/lib/auth-libs";
import { UnauthorizedPage } from "@/components/ui/admin";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Timothy's Admin Dashboard",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user: any = await authUserSession();
    if (!user || !user.role || user.role !== "admin") {
        return <UnauthorizedPage />;
    }

    return (
        <div className="flex md:flex-row flex-col w-full h-full min-h-svh max-w-screen-2xl divide-x divide-adaptive ">
            <Sidebar data={NavAdminItems} />
            <main className="flex-grow w-full flex flex-col">{children}</main>
        </div>
    );
}
