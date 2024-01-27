import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { Provider } from "@/components/layout";

export const metadata: Metadata = {
    title: "Timolabs",
    description: "Timothy's Personal Blog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${GeistSans.className} ${GeistMono.variable} flex flex-col min-h-screen items-center`}
            >
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
