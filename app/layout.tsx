import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";
const structData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "مركز شادي للطب البديل",
    description:
        "يوجد مكملات غذائية ومنتجات مكونة جميعها من اعشاب طبيعية لتحسين وظائف الجسم والعمل علي امتداده بالنشاط الذي يحتاجه الإنسان وتنشيط الدورة الدموية",
    author: [
        {
            "@type": "Person",
            name: "Dr. Alaa",
        },
    ],
    datePublished: new Date().toISOString(),
};

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
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <title>My page title</title>
                <script
                    key="structured-1"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structData),
                    }}
                />
            </Head>
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
