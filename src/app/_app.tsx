import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp

