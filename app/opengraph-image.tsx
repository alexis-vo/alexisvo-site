// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexis Vo — Engineering student at CentraleSupélec";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#a1a1aa",
            marginBottom: 24,
          }}
        >
          Engineering student • CentraleSupélec
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 24,
          }}
        >
          Alexis VO
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#d4d4d8",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Quantitative Finance • AI • Financial Mathematics
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}