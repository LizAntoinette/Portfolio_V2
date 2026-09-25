const DEFAULT_LOCAL_URL = "http://localhost:3000";

function toAbsoluteUrl(value: string, isConfiguredUrl = false): URL {
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(url);
  } catch {
    if (isConfiguredUrl) {
      throw new Error(
        `Invalid production site URL: "${value}". Set NEXT_PUBLIC_SITE_URL to a valid origin.`,
      );
    }

    return new URL(DEFAULT_LOCAL_URL);
  }
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NETLIFY === "true" ? process.env.URL : undefined) ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = toAbsoluteUrl(
  configuredSiteUrl || DEFAULT_LOCAL_URL,
  Boolean(configuredSiteUrl),
);

export const siteConfig = {
  name: "Liz Antoinette Anguren",
  title: "Liz Antoinette Anguren | Full-Stack Developer",
  shortTitle: "Liz Anguren | Full-Stack Developer",
  description:
    "Portfolio of Liz Antoinette Anguren, a full-stack developer in the Philippines building web applications with Ruby on Rails, Vue.js, React, and TypeScript.",
  locale: "en_PH",
  email: "lizanguren12@gmail.com",
  github: "https://github.com/LizAntoinette",
  linkedin: "https://www.linkedin.com/in/liz-anguren/",
  url: siteUrl,
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}
