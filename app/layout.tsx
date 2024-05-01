import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Liz | Web Portfolio",
  description: "Liz is a Full Stack Developer with 5 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
