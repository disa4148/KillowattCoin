import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./widgets/header/Header"
import Footer from "./widgets/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "KillowattCoin",
   description: "",
   viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html>
         <body className={inter.className}>
            
            <Header />
            {children}
            <Footer />
         </body>
      </html>
    

   )
}
