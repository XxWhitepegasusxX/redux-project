import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/organisms'


export const metadata: Metadata = {
  title: 'Redux Shopping',
  description: 'Redux shopping service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header/>
      <body className='mt-20 mb-10'>{children}</body>
      <footer></footer>
    </html>
  )
}
