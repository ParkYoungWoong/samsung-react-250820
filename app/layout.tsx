import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/signin
