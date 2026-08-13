import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaseenaslam.com"),
  title: { default: "YASEENX — Digital Architecture. Commerce. Growth.", template: "%s | YASEENX" },
  description: "Mohammad Yaseen Aslam is a Digital Architect, E-Commerce Entrepreneur, Full-Stack Developer and Growth Marketer building scalable digital systems.",
  keywords: ["Mohammad Yaseen Aslam", "YASEENX", "Shopify", "Full-Stack Developer", "Growth Marketing", "SaaS", "Pakistan"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "YASEENX — Digital Architecture. Commerce. Growth.", description: "Technology, commerce and growth systems built with a founder mindset.", url: "https://yaseenaslam.com", siteName: "YASEENX", type: "website" },
  twitter: { card: "summary_large_image", title: "YASEENX — Digital Architecture. Commerce. Growth.", description: "Technology, commerce and growth systems built with a founder mindset." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
