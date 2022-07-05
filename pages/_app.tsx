import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WindowContextWrapper } from '../context/windowContext'
import { FeatureContextWrapper } from '../context/featureContext'
import { usePostHog } from '../utils/usePostHog'


function MyApp({ Component, pageProps }: AppProps) {
  usePostHog('phc_RJEgcm0ciIXv09UhIYgC3pZcufMIIhPEHCAUmO5E1YI', { api_host: 'https://app.posthog.com' })
  return (
    <FeatureContextWrapper>
      <WindowContextWrapper debounceMs={300} setVh>
        <Component {...pageProps} />
      </WindowContextWrapper>
    </FeatureContextWrapper>
  )
}

export default MyApp
