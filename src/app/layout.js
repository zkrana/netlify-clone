import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scale &amp; Ship Faster with a Composable Web Architecture | Netlify",
  description:
    "Realize the speed, agility and performance of a scalable, composable web architecture with Netlify. Explore the composable web platform now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
