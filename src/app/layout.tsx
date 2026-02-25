import type { Metadata } from "next";
import "./globals.css";
import LocatorUI from "./locator-ui";

export const metadata: Metadata = {
  title: "Nail Art Brand - Premium Glassmorphic Design",
  description: "Handcrafted, premium nail art designed for the modern muse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#1b0e11] font-display antialiased selection:bg-primary selection:text-white">
        {children}
        <LocatorUI />
      </body>
    </html>
  );
}
