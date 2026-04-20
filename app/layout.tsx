import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Designer Portfolio",
  description: "A portfolio site for a product designer featuring case studies, an about section, and a contact form.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
