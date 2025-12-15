import { Inter } from "next/font/google"
import "./globals.css"
import "./disable-devtools";
import { Toaster } from "react-hot-toast"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hemand - FullStack Developer Portfolio",
  description: "Professional portfolio showcasing web development projects and skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
  <Toaster
    position="top-center"
    toastOptions={{
      style: {
        background: "#1a0a2e",
        color: "#fff",
        border: "1px solid #7c3aed",
      },
    }}
  />
{children}</body>
    </html>
  )
}
