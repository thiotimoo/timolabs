import { Footer, Navbar, Provider } from "@/components/layout";
import NavPageItems from "@/lib/data/nav-page-items";
import "./home.css"
import "@/app/globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar data={NavPageItems} />
            <Provider>
                <main className="flex-grow w-full flex flex-col items-center">
                    {children}
                </main>
                <Footer />
            </Provider>
        </>
    );
}
