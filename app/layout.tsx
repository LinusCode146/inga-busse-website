import './globals.css'
import React from "react";
import {Nunito} from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  description: 'Generated by create next app',
}

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      <title>Inga Busse</title>
    </head>
      <body className={`${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}