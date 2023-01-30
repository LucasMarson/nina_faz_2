import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Footer } from '../components/Footer'

const LexendDeca = localFont ({
  src: '../../public/fonts/LexendDeca.woff2',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={LexendDeca.className}>
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
