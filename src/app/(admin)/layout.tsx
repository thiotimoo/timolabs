import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

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
            <Sidebar className="w-72" />
            <Providers>
                <main className="flex-grow w-full flex flex-col">
                    {children}
                </main>
            </Providers>
        </div>
    );
}
