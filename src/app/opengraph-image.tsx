import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matei Bărgău - Full-stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Matei Bărgău
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#60a5fa",
            }}
          >
            Full-stack Web Developer
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "16px",
              fontSize: "18px",
              color: "#94a3b8",
            }}
          >
            <span>Django</span>
            <span>Angular</span>
            <span>Spring Boot</span>
            <span>AWS</span>
            <span>ElasticSearch</span>
            <span>MCP</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
