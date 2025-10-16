import '../styles/globals.css'
import { StyleSheetManager } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <StyleSheetManager>
      <Component {...pageProps} />
    </StyleSheetManager>
  )
}

export default MyApp