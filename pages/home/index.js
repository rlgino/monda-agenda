import { useRouter } from 'next/router'
import { useUser } from '../../context/usercontext'
import { useEffect } from 'react'

const Home = ({ ctx }) => {
    const { user, signOut } = useUser()
    const router = useRouter()
    const logout = () => {
        signOut()
    }

    useEffect(() => {
        if (!user) {
            router.push("/login")
        }
        return () => { }
    }, [user])

    return (<>
        <main>
            <input type="button" value="Salir" onClick={e => logout()} />
            <div className="login-container">
                <h1>Bienvenido!</h1>
            </div>
        </main>

        <style jsx>
            {`
            main {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .login-container {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 30%;
                height: 20em;
                width: 20em;
                border: 1px solid black;
                padding: 1em;
                box-shadow: 0 10px 25px rgba(0,0,0, .3);
            }
            `}
        </style>
    </>
    )
}

export default Home
