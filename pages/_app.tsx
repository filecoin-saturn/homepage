import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WindowContextWrapper } from '../context/windowContext'
import { FeatureContextWrapper } from '../context/featureContext'
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {
  return (
<>
    <Script 
    async
    strategy='afterInteractive' 
    src='https://www.googletagmanager.com/gtag/js?id=G-DFGH1FW5NT' 
    />
    <Script strategy="afterInteractive" id='google-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFGH1FW5NT', {
            page_path: window.location.pathname,
            });
        `}
    </Script> 
    <FeatureContextWrapper>
      <WindowContextWrapper debounceMs={60} setVh>
        <Component {...pageProps} />
      </WindowContextWrapper>
    </FeatureContextWrapper>
    </>
  )
}

export default MyApp
