// import localFont from "next/font/local";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "./components/Footer";



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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden font-general text-persian-red-99 bg-persian-red-1 antialiased" 
      >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
