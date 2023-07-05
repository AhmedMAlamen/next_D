import Footer from '@/components/Footer'
import './global.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Flexibble',
  description: 'ShowCase And Discover Remarkable Developer Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
             {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}
