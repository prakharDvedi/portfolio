import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prakhar Portfolio",
  description: "Personal portfolio website",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.mainContent}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
