import { Geist, Geist_Mono,Plus_Jakarta_Sans } from "next/font/google";
import { generateSEO } from "@/components/Seo.jsx";


import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // আপনার প্রয়োজনীয় ওয়েটগুলো
  variable: '--font-jakarta', // সিএসএস ভ্যারিয়েবল নাম
});


export const metadata = generateSEO({
  title: "Rajib Hasan | Full Stack Web Developer (React, Next.js, Node.js)",
  description:
    "Rajib Hasan is a professional Full Stack Web Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB and modern responsive web applications. Explore projects, services and contact for collaboration.",
  keywords: [
    "Rajib Hasan",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio Website",
    "Freelance Web Developer",
    "Hire Web Developer",
    "Responsive Web Design",
    "MongoDB Developer",
  ],
  url: "/",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.className}`}>
    
      <body>
      <Navbar />
        
      {children}</body>
    </html>
  );
}
