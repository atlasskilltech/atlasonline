import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atlas SkillTech University | Financial Planning & Applied Finance",
  description: "Online MBA in Financial Planning & Applied Finance with CFP® Global Certification. Industry-aligned curriculum, international recognition, and career-ready finance training at Atlas SkillTech University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-visual relative max-w-[1920px] mx-auto pt-[112px] medium:pt-[131px] cursor-(--f-cursor-default)`}
      >
       <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
