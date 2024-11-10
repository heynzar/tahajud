import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tahajud - Beautiful Prayer App for Muslims",
  description:
    "Tahajud is a beautifully designed app for Muslims, offering prayer times, Time Between Each Prayers, and Personalized settings for a Good experience.",
  keywords: [
    "Tahajud",
    "prayer app",
    "Muslim",
    "Islamic app",
    "prayer times",
    "Muslim worship",
    "spirituality",
    "Qibla Salat",
    "daily prayers",
  ],
  authors: [{ name: "NZAR", url: "https://nzar-q.vercel.app" }],
  openGraph: {
    title: "Tahajud - Beautiful Prayer App for Muslims",
    description:
      "Tahajud is a beautifully designed app for Muslims, offering prayer times, Time Between Prayers.",
    url: "../../public/tahajud.png",
    type: "website",
    images: [
      {
        url: "../",
        width: 1200,
        height: 630,
        alt: "Tahajud Web App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Tahajud - Beautiful Prayer App for Muslims",
    description:
      "Tahajud is a beautifully designed app for Muslims, offering prayer times, Time Between Prayers.",
    images: "../../public/tahajud.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased select-none`}>
        {children}
      </body>
    </html>
  );
}
