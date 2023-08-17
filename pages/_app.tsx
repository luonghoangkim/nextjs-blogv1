import { AppProps } from 'next/app';
import '../styles/global.css' 
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return ( 
      <Component {...pageProps}/> 
  )
}


