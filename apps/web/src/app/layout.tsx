import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "AIP Library",
    template: "%s | AIP Library",
  },
  description:
    "A global aviation metadata platform for AIRAC cycles, AIP amendments, supplements, AICs, and official publication links.",
  applicationName: "AIP Library",
  keywords: ["AIP", "AIRAC", "aviation", "metadata", "AIS"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
