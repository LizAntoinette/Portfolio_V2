import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 

const inter = Inter({ subsets: ['latin'] })

const themeInitScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
      const theme = savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : systemTheme;

      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = 'dark';
      document.documentElement.style.colorScheme = 'dark';
    }
  })();
`;

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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
     
     <head>
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
