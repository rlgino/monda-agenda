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

                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="control is-flex is-flex-direction-row is-justify-content-space-between">
                        <button class="button is-success" type="submit">{isRegister ? "Registrarse" : "Login"}</button>
                        <button class="button is-primary" onClick={() => changeAction()}>{!isRegister ? "Registrarse" : "Logguearse"}</button>
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

                .control {
                    width:100%;
                }

                .error-msg {
                    color: red;
                    font-size: 0.9em;
                }

                `}
            </style>
        </div>
    )
}

export default index
