import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { absoluteUrl, siteConfig } from "./site-config";
 

const notoSans = localFont({
  src: "../assets/font/NotoSans-VariableFont.ttf",
  display: "swap",
  weight: "100 900",
});

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
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Liz Antoinette Anguren",
    "Liz Anguren",
    "full-stack developer Philippines",
    "software engineer",
    "Ruby on Rails developer",
    "Vue.js developer",
    "React developer",
    "Java developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    locale: siteConfig.locale,
    firstName: "Liz Antoinette",
    lastName: "Anguren",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo12.png", type: "image/png" }],
    shortcut: ["/images/logo12.png"],
    apple: [{ url: "/images/logo12.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#191724" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${absoluteUrl()}#person`,
      name: siteConfig.name,
      alternateName: "Liz Anguren",
      url: absoluteUrl(),
      jobTitle: "Full-Stack Developer",
      homeLocation: {
        "@type": "Country",
        name: "Philippines",
      },
      sameAs: [siteConfig.linkedin, siteConfig.github],
      worksFor: {
        "@type": "Organization",
        name: "Coach Catalyst",
        url: "https://coachcatalyst.com/",
      },
      knowsAbout: [
        "Full-stack web development",
        "Ruby on Rails",
        "Vue.js",
        "React",
        "TypeScript",
        "Java",
        "PostgreSQL",
        "REST APIs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl()}#website`,
      url: absoluteUrl(),
      name: `${siteConfig.name} Portfolio`,
      description: siteConfig.description,
      inLanguage: "en",
      author: { "@id": `${absoluteUrl()}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl()}#profile-page`,
      url: absoluteUrl(),
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": `${absoluteUrl()}#website` },
      mainEntity: { "@id": `${absoluteUrl()}#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
     
     <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={notoSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
