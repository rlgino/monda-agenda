import '../styles/globals.css'
import { onAuthChange } from '../firebase/client'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthChange(setUser)
    return () => { }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
