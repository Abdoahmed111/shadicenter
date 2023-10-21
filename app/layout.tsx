import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: [] });

export const metadata: Metadata = {
    icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ar" data-theme="mytheme">
            <body className={cairo.className}>
                <main>
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
