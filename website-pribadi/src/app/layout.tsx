import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Websire Pribadi",
  description: "Website Pribadi untuk menampilkan proyek dan esai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-purple-700 min-h-screen w-full p-8">
            <Layout >
              {children}
            </Layout>
          </div>
        </body>
      </html>
    );
}
