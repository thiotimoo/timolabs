import { Metadata } from "next";
import NavAdminItems from "@/lib/data/nav-admin-items";
import { Provider, Sidebar } from "@/components/layout";

import "@/app/globals.css";

import { EditorTopBar } from "@/components/ui/admin/editor";

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
        <div className="flex flex-col w-full h-full min-h-svh divide-y divide-adaptive ">
            <Provider>{children}</Provider>
        </div>
    );
}
