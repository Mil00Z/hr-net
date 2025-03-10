

import AppProvider from "./contextProvider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Create Next App",
  description: "Generated by create next app",
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ]
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

              {children}

          </body>
        
        </html>

    </AppProvider>
  );
}
