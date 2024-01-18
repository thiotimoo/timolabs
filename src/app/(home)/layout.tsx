import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar className="fixed z-50 top-0" />
            <Providers>
                <main className="flex-grow w-full flex flex-col items-center">
                    {children}
                </main>
                <Footer />
            </Providers>
        </>
    );
}
