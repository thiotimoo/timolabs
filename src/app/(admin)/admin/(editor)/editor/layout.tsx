import { Metadata } from "next";
import { Provider } from "@/components/layout";

import "@/app/globals.css";
import { UnauthorizedPage } from "@/components/ui/admin";
import { authUserSession } from "@/lib/auth-libs";

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
        <div className="flex flex-col w-full h-full min-h-svh divide-y divide-adaptive ">
            <Provider>{children}</Provider>
        </div>
    );
}
