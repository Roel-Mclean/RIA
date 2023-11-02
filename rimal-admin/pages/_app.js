import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

//Nextauth required code pasted here
export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
  )
}