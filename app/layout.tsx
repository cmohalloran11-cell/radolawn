import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

export const metadata: Metadata = {
  title: "Rado Lawn Service · Spring Hill, FL · The Rado Family Since 1997",
  description:
    "Family-owned landscaping in Spring Hill since 1997. Lawn maintenance, landscape design, HOA contracts, tree service. BBB A+ rated. The Rado Brothers — Michele and Domenico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-umber-700 font-body antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
