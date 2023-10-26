import type { Metadata } from 'next'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import { Toaster } from 'react-hot-toast'

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
      <html lang="pt-br">
        <body>
          <ReduxProvider>
            <Toaster/>
            {children}
          </ReduxProvider>
        </body>
      </html>
  )
}
