import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


// const inter = localFont({
//   src: "./fonts/InterVF.ttf",
//   variable: "--font-inter",
//   weight: "100 200 300 400 500 700 800 900",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
       
        {children}
      </body>
    </html>
  );
}
