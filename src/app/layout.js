"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SettingsProvider } from "@/lib/SettingsContext";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <title>InoHire - Global Recruitment Solutions</title>
        <meta
          name="description"
          content="Global recruitment consultancy specializing in AI, Technology, Finance, Marketing, and Legal roles. Fast, accurate, and confidential hiring solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="InoHire - Global Recruitment Solutions" />
        <meta property="og:description" content="Expert recruitment solutions for AI, Technology, Finance, Marketing, and Legal roles. Fast, accurate, and confidential hiring support." />
        <meta property="og:image" content="/inohirelogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InoHire - Global Recruitment Solutions" />
        <meta name="twitter:description" content="Expert recruitment solutions for AI, Technology, Finance, Marketing, and Legal roles." />
        <meta name="twitter:image" content="/inohirelogo.png" />
      </head>
      <body suppressHydrationWarning>
        {isAdminRoute ? (
          children
        ) : (
          <SettingsProvider>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                width: "100%",
                maxWidth: "100vw",
              }}
            >
              <Navbar />
              <main
                style={{
                  flexGrow: 1,
                  overflowX: "hidden",
                  width: "100%",
                  maxWidth: "100vw",
                }}
              >
                {children}
              </main>
              <Footer />
            </div>
          </SettingsProvider>
        )}
      </body>
    </html>
  );
}
