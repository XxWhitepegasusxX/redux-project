import type { Metadata } from 'next'
import { Header } from '@/components/organisms'
import '../globals.css'
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
