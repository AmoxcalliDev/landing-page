import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background:
                        "radial-gradient(circle at 22% 18%, #6ee7b7 0%, #10b981 38%, #064e3b 100%)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(155deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 45%, rgba(245,158,11,0.28) 100%)",
                    }}
                />

                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "relative" }}
                >
                    <path
                        d="M4.5 10.5L12 5L19.5 10.5"
                        stroke="rgba(255,255,255,0.96)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect x="6.2" y="10.8" width="2.2" height="7" rx="1" fill="rgba(255,255,255,0.95)" />
                    <rect x="10.9" y="10.8" width="2.2" height="7" rx="1" fill="rgba(255,255,255,0.95)" />
                    <rect x="15.6" y="10.8" width="2.2" height="7" rx="1" fill="rgba(255,255,255,0.95)" />
                    <rect x="10.9" y="13.3" width="2.2" height="4.5" rx="0.9" fill="#f59e0b" />
                    <rect x="5.2" y="18.6" width="13.6" height="2.2" rx="1.1" fill="rgba(255,255,255,0.95)" />
                    <circle cx="18.9" cy="6" r="1.4" fill="#fbbf24" />
                </svg>
            </div>
        ),
        {
            ...size,
        },
    );
}
