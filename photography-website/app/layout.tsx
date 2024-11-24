import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography Website',
  description: 'Wedding Photography Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}