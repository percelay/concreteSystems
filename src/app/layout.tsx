import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSI Concrete Systems | The Power of Precision Precast",
  description:
    "CSI Concrete Systems, Inc. — vertically integrated precast concrete manufacturer. We design the molds, build the batch plants, and manufacture the final concrete structures in-house. Hudson, NH.",
  keywords: [
    "precast concrete",
    "tunnel liners",
    "concrete systems",
    "PCTL",
    "bridge systems",
    "retaining walls",
    "CSI",
    "Hudson NH",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-dark text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
