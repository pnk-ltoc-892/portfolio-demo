import type { Metadata } from "next";
import "./globals.css";
import { FloatingNavbar } from "@/components/FloatingNavbar.tsx";


export const metadata: Metadata = {
  title: "Pankaj`s Portfolio",
  description: "Full Stack Web developer",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        
        {/* // ! Navbar */}
        <FloatingNavbar />

        {/* // ! Main Content */}
        {children}
      </body>
    </html>
  );
}
