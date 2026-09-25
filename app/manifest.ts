import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} Portfolio`,
    short_name: "Liz Anguren",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0d",
    theme_color: "#191724",
    icons: [
      {
        src: "/images/logo12.png",
        sizes: "494x321",
        type: "image/png",
      },
    ],
  };
}
