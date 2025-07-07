import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'The Alchemy of Me',
  description: 'Personal portfolio by Julia Neff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}

