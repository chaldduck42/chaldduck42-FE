import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TanstackProvider from '@/components/providers/TanstackProvider'
import RecoilRootProvider from '@/components/providers/RecoilRootProvider'
import MSWComponent from '@/components/msw/MSWComponent'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const pretendard = localFont({
  src: '../../public/static/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${pretendard.variable} flex justify-center`}
      >
        <MSWComponent />
        <TanstackProvider>
          <RecoilRootProvider>{children}</RecoilRootProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
