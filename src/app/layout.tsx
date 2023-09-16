import '@/app/globals.css'
import AuthProvider from '@/providers/AuthProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={inter.className}>
      <AuthProvider> 
        {children}
      </AuthProvider>      
      </body>
    </html>
  )
}
