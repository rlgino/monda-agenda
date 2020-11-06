// import '../styles/globals.css'
import { UserProvider } from '../context/usercontext'
import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {

  return <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
}

export default MyApp
