import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WindowContextWrapper } from '../context/windowContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowContextWrapper debounceMs={300} setVh>
      <Component {...pageProps} />
    </WindowContextWrapper>
  )
}

export default MyApp
