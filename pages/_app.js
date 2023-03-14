import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] }) 
export default function App({ Component, pageProps }) {
  return (
  <main className={inter.className}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </main>
  )
}
