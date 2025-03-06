import type { Metadata } from "next";
import Navbar from "./navbar/navbar";

export const metadata: Metadata = {
  title: "YouTube",
  description: "YouTube Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
