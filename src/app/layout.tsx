import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Navbar from "@/components/navbar/Navbar";
import ToasterProvider from "@/providers/ToasterProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Feel like home anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
