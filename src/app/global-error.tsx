"use client";

import { useEffect } from "react";

const PAGE_TITLE =
  "Best Study Abroad & Test Prep Experts | Taksheela Institute";
const PAGE_DESCRIPTION =
  "Explore Taksheela Institute for expert study abroad, immigration, counselling and test prep services—your gateway to global education!";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    document.title = PAGE_TITLE;
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#F7FCFD",
          color: "#0B162C",
          fontFamily:
            "Nunito, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <main style={{ maxWidth: 480, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 800 }}>
            Something went wrong
          </h1>
          <p style={{ margin: "16px 0 0", color: "#475569", lineHeight: 1.6 }}>
            This page could not be loaded. Please try again, or go back to the
            homepage.
          </p>
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                border: 0,
                borderRadius: 12,
                background: "#00999E",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 24px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                borderRadius: 12,
                border: "1px solid #00999E",
                color: "#00999E",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 24px",
                textDecoration: "none",
              }}
            >
              Go to homepage
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
