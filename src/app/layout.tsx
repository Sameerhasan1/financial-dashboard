import './globals.css'

export const metadata = {
  title: 'Wealth Elite Financial Dashboard',
  description: 'Investment Management Dashboard',
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
