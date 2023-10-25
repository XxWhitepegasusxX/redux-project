import { Header } from '@/components/organisms'
import type { Metadata } from 'next'

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
      <>
        <Header/>
        {children}
      </>
  )
}
