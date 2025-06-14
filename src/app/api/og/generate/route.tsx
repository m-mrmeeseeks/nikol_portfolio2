import { ImageResponse } from "next/og";
// import { baseURL, person } from "@/resources"; // Temporarily comment this out

export const runtime = "edge";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  // Replace these with your actual static values for testing
  const STATIC_BASE_URL = "https://yourdomain.com"; // Your actual base URL
  const STATIC_PERSON_AVATAR = "/your-avatar.jpg"; // Path to your avatar relative to base URL
  const STATIC_PERSON_NAME = "Your Name"; // Your name
  const STATIC_PERSON_ROLE = "Your Role"; // Your role

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "8rem",
        background: "#151515",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          fontStyle: "normal",
          color: "white",
        }}
      >
        <span
          style={{
            fontSize: "8rem",
            lineHeight: "8rem",
            letterSpacing: "-0.05em",
            whiteSpace: "pre-wrap",
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <img
            src={STATIC_BASE_URL + STATIC_PERSON_AVATAR} // Using static values
            style={{
              width: "12rem",
              height: "12rem",
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "4.5rem",
                lineHeight: "4.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
              }}
            >
              {STATIC_PERSON_NAME}
            </span>
            <span
              style={{
                fontSize: "2.5rem",
                lineHeight: "2.5rem",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
                opacity: "0.6",
              }}
            >
              {STATIC_PERSON_ROLE}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      fonts: []
    },
  );
}
