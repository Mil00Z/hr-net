import AppProvider from "./contextProvider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

//Styles
import "./globals.css";
import '@/styles/main.scss';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hr Net",
  description: "V1 of Employees Listing Management",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <AppProvider>

        <html lang="fr">
          
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased skeleton`}>

              <Header />

                {children}

              <Footer />

          </body>
        
        </html>

    </AppProvider>
  );
}
