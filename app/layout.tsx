import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import ReactQueryProvider from "./providers/ReactQueryProvider"
import "./globals.css"
import NextThemeProvider from "./providers/NextThemeProvider"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
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
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={true}
              theme="colored"
              closeOnClick
            />
            <Header />
            <main className="pt-14">{children}</main>
          </NextThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
