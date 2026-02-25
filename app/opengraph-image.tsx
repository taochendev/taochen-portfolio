import { ImageResponse } from "next/og";

export const alt = "Tao Chen | Senior Full Stack Engineer — AI & Web";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1120",
          color: "#e8ecf1",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 600, marginBottom: 12 }}>
          Tao Chen
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            marginBottom: 24,
          }}
        >
          Senior Full Stack Engineer
        </div>
        <div style={{ fontSize: 20, color: "#9ca3af" }}>
          AI systems · React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    { ...size }
  );
}
