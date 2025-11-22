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
        <title>InoHire - Global Legal Recruitment</title>
        <meta
          name="description"
          content="Global legal recruitment experts connecting top legal talent with leading organizations"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
