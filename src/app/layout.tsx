import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Montserrat } from 'next/font/google'
import Link from 'next/link';
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'LocalSEO Tracker',
  description: 'Track your local SEO rankings in Sydney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <header className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold gradient-text">
                    LocalSEO Tracker
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/features" className="nav-link">Features</Link>
                  <Link href="/pricing" className="nav-link">Pricing</Link>
                </div>
                <div className="flex items-center gap-4">
                  <SignedOut>
                    <Link href="/sign-in">
                      <button className="button-primary !py-2">
                        Sign In
                      </button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard" className="nav-link mr-4">Dashboard</Link>
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10"
                        }
                      }}
                    />
                  </SignedIn>
                </div>
              </div>
            </nav>
          </header>
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
