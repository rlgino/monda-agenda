import Head from 'next/head'
import { UserProvider } from '../context/usercontext'
import '../scss/styles.scss'
import Navbar from '../components/navbar/navbar'

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <title>Monda Agenda</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  </>
}

export default MyApp
