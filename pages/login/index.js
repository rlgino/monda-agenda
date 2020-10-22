import { loginWithMailAndPassowrd, logEvent, registerWithMailAndPassword } from './../../firebase/client'
import { useState, useEffect } from 'react';
import { useUser } from '../../context/usercontext';
import { useRouter } from 'next/router';

const index = () => {

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [errorMsg, setErrorMsg] = useState()
    const [isRegister, setIsRegister] = useState(false)
    const router = useRouter()
    const { user, login } = useUser()

    useEffect(() => {
        logEvent("login", {
            usuario: "usuarioN"
        })

        if (user) {
            router.push('/home')
        }
        return () => { }
    }, [user])

    const changeAction = () => {
        setIsRegister(isRegister ? false : true)
    }

    const loginClick = (e) => {
        e.preventDefault()
        login(mail, pass)
    }

    const register = (e) => {
        e.preventDefault()

    }

    return (
        <div className="container">
            <div className="main">
                <form onSubmit={e => { isRegister ? register(e) : loginClick(e) }}>
                    <img src="/logo.jpeg" alt="Monda Logo" />
                    <h1>Bienvenido</h1>
                    <input type="email" placeholder="Email" onChange={e => setMail(e.target.value)} required />
                    <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} required />
                    <input type="submit" value={isRegister ? "Registrarse" : "Login"} />
                    <div onClick={() => changeAction()} className="action">
                        {!isRegister ? "Registrarse" : "Logguearse"}
                    </div>
                    {errorMsg ? <div className="error-msg">{errorMsg}</div> : null}
                </form>
            </div>

            <style jsx>
                {`
                .container {
                    height: 500px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .main {
                    border: 1px solid black;
                    width: 300px;
                    padding: 1em;
                    border-radius: 25px;
                }

                img {
                    width: 10em;
                    height: 10em;
                    align-self: center;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }

                input[type="email"],input[type="password"] {
                    margin-bottom: 1em;
                    background-color: red;
                    border: none;
                    color: black;
                    padding: 1em;
                    border-radius: 25px;
                    width: 95%;
                }

                input[type="submit"] {
                    margin-bottom: 1em;
                    background-color: black;
                    border: none;
                    color: white;
                    padding: 0.5em;
                    border-radius: 25px;
                    width: 95%;
                }

                .error-msg {
                    color: red;
                    font-size: 0.9em;
                }

                .action {
                    margin: auto;
                }

                `}
            </style>
        </div>
    )
}

export default index
