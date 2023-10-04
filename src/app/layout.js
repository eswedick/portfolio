import './globals.css'
import { Inter } from 'next/font/google'
import * as Swetrix from "swetrix";
require('dotenv').config();

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Evan Swedick Portfolio',
  description: 'Professional Software Engineering',
}

Swetrix.init(process.env.swetrix_projectKey, {
  debug: process.env.swetrix_debug === 'true',
  disabled: process.env.swetrix_disabled === 'true',
  respectDNT: process.env.swetrix_respectDNT === 'true',
  apiURL: process.env.swetrix_apiURL
})

Swetrix.trackViews()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
