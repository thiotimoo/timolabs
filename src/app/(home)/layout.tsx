import Navbar from "@/components/layout/NavbarLayout";
import FooterLayout from "@/components/layout/FooterLayout";
import ProviderLayout from "@/components/layout/ProviderLayout";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar className="fixed z-50 top-0" />
            <ProviderLayout>
                <main className="flex-grow w-full flex flex-col items-center">
                    {children}
                </main>
                <FooterLayout />
            </ProviderLayout>
        </>
    );
}
