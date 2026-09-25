import { ImageResponse } from "next/og";
import { siteConfig } from "./site-config";

export const alt = `${siteConfig.name} — Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          color: "#f7f5f8",
          background:
            "radial-gradient(circle at 82% 18%, rgba(156,207,216,0.25), transparent 32%), linear-gradient(145deg, #191724 0%, #0c0c0d 78%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#9ccfd8",
            fontSize: 27,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ width: 54, height: 4, background: "#9ccfd8" }} />
          Software portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              color: "#f6c177",
              fontSize: 42,
              fontWeight: 700,
            }}
          >
            Full-Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", color: "#d7d3dc", fontSize: 25 }}>
          <span>Ruby on Rails</span>
          <span style={{ color: "#ebbcba" }}>•</span>
          <span>Vue.js</span>
          <span style={{ color: "#ebbcba" }}>•</span>
          <span>React</span>
          <span style={{ color: "#ebbcba" }}>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    size,
  );
}
