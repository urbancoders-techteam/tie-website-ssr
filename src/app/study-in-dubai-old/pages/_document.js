import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="https://www.taksheela.com/favicon.ico"/>
        <link rel="icon" href="https://www.taksheela.com/favicon.ico" type="image/x-icon" sizes="17x17"/>
        <link rel="apple-touch-icon" href="https://www.taksheela.com/favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}