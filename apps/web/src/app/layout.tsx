import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rajram — Your moments. Our creativity. Delivered with care.",
    template: "%s | Rajram",
  },
  description:
    "Creative services & media production company. Complete event photography teams, business content and editing under one trusted roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
