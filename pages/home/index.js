import { useRouter } from 'next/router'
import { useUser } from '../../context/usercontext'
import { useEffect } from 'react'
import Card from '../../components/card/card'
import Navbar from '../../components/navbar/navbar'

const Home = ({ ctx }) => {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/login")
        }
        return () => { }
    }, [user])

    return (<>
        <Navbar />
        <main className="is-flex-direction-column">
            <h1>Bienvenido!</h1>
            <div class="is-flex-direction-row is-flex-wrap-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    </>
    )
}

export default Home
