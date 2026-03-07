import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Πthon 2nd Edition — MathTec",
  description: "Rejoigne/fix Cannot find module '@/components/layout/Navbar' or its corresponding type declarations.z la deuxième édition du Pi-thon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#0d0118] text-white min-h-screen flex flex-col px-10`}>
        <Navbar />
        {/* add top padding so fixed navbar doesn't overlap page content */}
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}