import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DenimVF = localFont({
  src: "./fonts/DenimVF.woff",
  variable: "--font-denim",
});

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
      <body
        className={`${DenimVF.variable} overflow-x-clip antialiased [text-rendering:optimizeLegibility] selection:bg-flare-red selection:text-off-white`}
      >
        {children}
      </body>
    </html>
  );
}