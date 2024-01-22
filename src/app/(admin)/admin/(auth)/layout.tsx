import { Metadata } from "next";
import { Provider } from "@/components/layout";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Admin Login",
    description: "Admin Login Page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex md:flex-row flex-col w-full h-full min-h-svh max-w-screen-2xl divide-x divide-adaptive ">
            <Provider>
                <main className="flex-grow w-full flex flex-col">
                    {children}
                </main>
            </Provider>
        </div>
    );
}
