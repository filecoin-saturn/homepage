import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WindowContextWrapper } from '../context/windowContext'
import { FeatureContextWrapper } from '../context/featureContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FeatureContextWrapper>
      <WindowContextWrapper debounceMs={300} setVh>
        <Component {...pageProps} />
      </WindowContextWrapper>
    </FeatureContextWrapper>
  )
}

export default MyApp
