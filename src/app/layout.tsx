import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rameshwaram Cruise - Luxury Ganga Cruise Varanasi",
  description: "Book your luxury Ganga cruise experience in Varanasi. Witness the Divine Ganga Aarti from our heritage cruise ship Mandakini. Unforgettable memories on the sacred river.",
  keywords: "Ganga cruise, Varanasi cruise, Rameshwaram cruise, Ganga Aarti cruise, luxury cruise Varanasi, boat ride Ganges, Mandakini ship, Varanasi tourism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fff8f0] text-[#1a2a2a] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
