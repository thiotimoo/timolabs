import { Metadata } from "next";
import { Provider } from "@/components/layout";

import "@/app/globals.css";

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
