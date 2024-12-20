import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Les illumines de la Moutilliere",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="  w-full">
                <Providers>
                    <Header />
                    {children}
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
