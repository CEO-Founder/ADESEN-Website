import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };

/**
 * Shared generator for opengraph-image.tsx and twitter-image.tsx so both
 * social-preview conventions render the same branded card without
 * duplicating the layout.
 */
export function renderSiteOgImage() {
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
          gap: 28,
          backgroundImage: "linear-gradient(135deg, #0f2a4a 0%, #0b4d3a 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#e0a526",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0f2a4a"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          ADESEN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#e6efe9",
            textAlign: "center",
            maxWidth: 880,
          }}
        >
          Building resilient, self-reliant communities in Gatsibo District
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#e0a526",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          Gatsibo District · Rwanda · 2026–2028
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
