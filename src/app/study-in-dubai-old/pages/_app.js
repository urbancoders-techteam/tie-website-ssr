import '@/styles/globals.css'
import { useEffect } from 'react'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS
    document.body.classList.add('app-mounted')
  }, [])

  return (
    <>
      <Component {...pageProps} />
      
      {/* Font Awesome */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        strategy="lazyOnload"
      />
    </>
  )
}