import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Liz | Web Portfolio",
  description: "Liz is a Full Stack Developer with 5 years of experience",
  icons: {
    icon: "/images/logo12.png",
  },
};
{/* <link rel="shortcut icon" type="image/png" href="assets/logo12.png" />? */}
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
