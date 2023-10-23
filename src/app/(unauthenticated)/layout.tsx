import '../globals.css'

export const metadata = {
  title: 'Authentication',
  description: 'Authentication pages from Redux Shopping App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}