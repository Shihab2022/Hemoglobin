import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hemoglobin.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hemoglobin — Blood Donation Network",
    template: "%s | Hemoglobin",
  },
  description:
    "Hemoglobin connects blood donors with hospitals and patients in need. Register as a donor, find nearby blood requests, and save up to three lives with a single donation.",
  applicationName: "Hemoglobin",
  keywords: [
    "blood donation",
    "blood bank",
    "donate blood",
    "blood group",
    "find blood donors",
    "Hemoglobin",
  ],
  authors: [{ name: "Hemoglobin" }],
  creator: "Hemoglobin",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hemoglobin",
    title: "Hemoglobin — Blood Donation Network",
    description:
      "One donation can save up to three lives. Register as a donor and get matched with nearby blood requests.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemoglobin — Blood Donation Network",
    description:
      "One donation can save up to three lives. Register as a donor and get matched with nearby blood requests.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E11D48",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}

