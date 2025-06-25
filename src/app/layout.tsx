import type { Metadata } from "next";
import Navbar from "@components/Navbar"
import "./globals.css";
import Footer from "@components/ui/Footer";

export const metadata: Metadata = {
  title: "catering",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className="min-w-screen min-h-screen max-w-[2560px] antialiased scroll-smooth"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
