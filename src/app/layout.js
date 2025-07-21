// Import global styles and reusable layout components
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Site-wide metadata (can be used for SEO or head injection in custom document/head)
export const metadata = {
  title: 'The Alchemy of Me',
  description: 'Personal portfolio by Julia Neff',
};

// Root layout wraps every page of the application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-900 font-sans">
        {/* Full-page flex container ensures sticky footer behavior */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Persistent site navigation */}
          <Navbar />
          
          {/* Main content area — grows to fill remaining vertical space */}
          <main className="max-w-5xl mx-auto px-4 py-6" style={{ flexGrow: 1 }}>
            {children}
          </main>
          
          {/* Footer always pinned to bottom unless content exceeds viewport height */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
