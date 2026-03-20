import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ReactQueryProvider from "./providers/ReactQueryProvider"
import "./globals.css"
import NextThemeProvider from "./providers/NextThemeProvider"
import MainHeader from "./components/MainHeader"
import DialogContainer from "@/ds/components/molecules/dialog/DialogContainer"
import ToastContainer from "@/ds/components/molecules/toast/ToastContainer"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Devlog AI",
  description: "Generate Contents for Developer!",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NextThemeProvider>
            <ToastContainer />
            <DialogContainer />
            <MainHeader />
            <main className="pt-14">{children}</main>
          </NextThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
