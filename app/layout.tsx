import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Line Studio",
  description: "Pixel Perfect clone of an awwwards 'Site of the month'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
