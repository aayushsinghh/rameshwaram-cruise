import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rameshwaram Cruise - Luxury Ganga Cruise Varanasi",
  description: "Book your luxury Ganga cruise experience in Varanasi. Witness the Divine Ganga Aarti, scenic views of ancient ghats, and enjoy live cultural performances on the sacred river.",
  keywords: "Ganga cruise, Varanasi cruise, Rameshwaram cruise, Ganga Aarti cruise, luxury cruise Varanasi, booking cruise Varanasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
