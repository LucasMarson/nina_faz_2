import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Londrina_Solid } from '@next/font/google'

const londrinaSolid = Londrina_Solid ({
  weight: ['400', '900'],
  subsets: ['latin'],
  variable: '--font-londrina',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${londrinaSolid.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
