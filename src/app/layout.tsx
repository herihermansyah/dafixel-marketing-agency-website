import type {Metadata} from "next";
import {Hanken_Grotesk, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

const hkGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hkGrotesk",
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakartaSans",
});

export const metadata: Metadata = {
  title: {
    default: "Dapixel | B2B Growth & Performance Marketing Agency",
    template: "%s | Dapixel",
  },
  description:
    "Dapixel is a trusted B2B marketing agency that helps your business grow through high-quality lead generation, account-based marketing (ABM) strategies, and data-driven digital marketing performance.",
  keywords: [
    "B2B marketing agency",
    "agency marketing B2B",
    "B2B lead generation",
    "digital marketing agency",
    "growth marketing B2B",
  ],
  openGraph: {
    title: "Dapixel | B2B Growth & Performance Marketing Agency",
    description:
      "Boost your B2B business revenue with data-driven marketing strategies. Generate high-quality leads now with Dapixel.",
    url: "https://dafixel-marketing-agency-website.vercel.app/",
    siteName: "Dapixel",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://dafixel-marketing-agency-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dapixel - B2B Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapixel | B2B Growth & Performance Marketing Agency",
    description:
      "Boost your B2B business revenue with data-driven lead generation.",
    images: [
      "https://dafixel-marketing-agency-website.vercel.app/og-image.jpg",
    ],
  },
  alternates: {
    canonical: "https://dafixel-marketing-agency-website.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hkGrotesk.className} ${jakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
