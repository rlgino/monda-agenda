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
        <main className="is-flex-direction-column">
            <header className="is-flex is-flex-direction-row is-justify-content-space-between is-align-content-center">
                <h1 className="title is-1 p-4">Bienvenido!</h1>
                <input type="button" value="Crear" className="button is-primary" />
            </header>
            <div className="is-flex is-flex-direction-row is-justify-content-flex-space-around is-flex-wrap-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
        <style jsx>{`
            header {
                width: 100%;
            }

            .button {
                margin: 1.4em;
            }
            `}</style>
    </>
    )
}

export default Home
