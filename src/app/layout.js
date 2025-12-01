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
          content="We help companies hire top talent quickly and accurately through a trusted, high-quality recruitment process. Our global network ensures every role is matched with the right professional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="InoHire - Global Recruitment Solutions" />
        <meta property="og:description" content="We help companies hire top talent quickly and accurately through a trusted, high-quality recruitment process. Our global network ensures every role is matched with the right professional." />
        <meta property="og:image" content="/inohirelogo.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="InoHire - Global Recruitment Solutions" />
        <meta name="twitter:description" content="We help companies hire top talent quickly and accurately through a trusted, high-quality recruitment process." />
        <meta name="twitter:image" content="/inohirelogo.png" />
        <meta name="twitter:image:alt" content="InoHire Logo" />
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
