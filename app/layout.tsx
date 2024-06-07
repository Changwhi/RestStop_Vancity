import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Washroom Finder",
  description: "Find washrooms near you in Metro Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="XD0Fo9TzW36pkiNprMdSpc34F5znfI77271_N11CO4s" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
