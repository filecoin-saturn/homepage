import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WindowContextWrapper from '../context/windowContext'
import FeatureContextWrapper from '../context/featureContext'
import Script from 'next/script'



function MyApp({ Component, pageProps }: AppProps) {
  return (
<>
    {typeof window !== 'undefined' &&
      window.location.hostname.includes("strn.network") && (
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
          <Script strategy='afterInteractive' async data-domain="strn.network" src="https://plausible.io/js/script.outbound-links.js"/>
          <Script strategy='afterInteractive' async id='plausible-analytics'>
            {'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }'}
          </Script>
          {/* Send click events on data-analytics links to plausible*/}
          <Script async id='plausible-analytics-anchor-script'>
            {`
              let links = document.querySelectorAll("a[data-analytics]");
              for (var i = 0; i < links.length; i++) {
                  links[i].addEventListener('click', handleLinkEvent);
                  links[i].addEventListener('auxclick', handleLinkEvent);
              }

              function handleLinkEvent(event) {
                  console.log("handling event")
                  var link = event.target;
                  var middle = event.type == "auxclick" && event.which == 2;
                  var click = event.type == "click";
                  while (link && (typeof link.tagName == 'undefined' || link.tagName.toLowerCase() != 'a' || !link.href)) {
                      link = link.parentNode;
                  }
                  if (middle || click) {
                      let attributes = link.getAttribute('data-analytics').split(/,(.+)/);
                      let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];
                      plausible(...events);
                  }
                  if (!link.target) {
                      if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
                          setTimeout(function () {
                              location.href = link.href;
                          }, 150);
                          event.preventDefault();
                      }
                  }
              }
            `}
          </Script>
        </>
      )
    }
    <FeatureContextWrapper>
      <WindowContextWrapper debounceMs={60} setVh>
        <Component {...pageProps} />
      </WindowContextWrapper>
    </FeatureContextWrapper>
    </>
  )
}

export default MyApp
