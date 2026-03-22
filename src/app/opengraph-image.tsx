import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "مسامرات شعرية — Poetry Nights";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2c1810 0%, #1a1410 50%, #0a0805 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          padding: "60px",
        }}
      >
        {/* Ornament */}
        <div
          style={{
            color: "#b8860b",
            fontSize: 28,
            letterSpacing: "12px",
            marginBottom: 20,
          }}
        >
          ٭ ٭ ٭
        </div>

        {/* Title */}
        <div
          style={{
            color: "#e8dcc8",
            fontSize: 80,
            textAlign: "center",
            lineHeight: 1.3,
            direction: "rtl",
          }}
        >
          مسامرات شعرية
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#9a8b78",
            fontSize: 28,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Poetry Nights
        </div>

        {/* Verse */}
        <div
          style={{
            color: "#c4956a",
            fontSize: 24,
            marginTop: 40,
            textAlign: "center",
            direction: "rtl",
            maxWidth: "900px",
            lineHeight: 2,
          }}
        >
          على قدر أهل العزم تأتي العزائمُ ✶ وتأتي على قدر الكرام المكارمُ
        </div>

        {/* Footer */}
        <div
          style={{
            color: "#6b5d4e",
            fontSize: 18,
            marginTop: 30,
            display: "flex",
            gap: "24px",
          }}
        >
          <span>20 شاعراً</span>
          <span>·</span>
          <span>120+ بيت</span>
          <span>·</span>
          <span>المساجلة الشعرية</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
