import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const gabaritoFont = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const spaceFont = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space",
});
const pixelFont = Pixelify_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-pixel",
});

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
        <html lang="en">
            <body
                className={`${gabaritoFont.className} ${pixelFont.variable} ${spaceFont.variable} flex flex-col min-h-screen items-center`}
            >
                {children}
            </body>
        </html>
    );
}
