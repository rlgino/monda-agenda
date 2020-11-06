import { logEvent } from './../../firebase/client'
import { useState, useEffect } from 'react';
import { useUser } from '../../context/usercontext';
import { useRouter } from 'next/router';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        login(mail, pass).catch(e => {
            setErrorMsg(e.message)
        })
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

                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" values={mail} onChange={e => setMail(e.target.value)} />
                            <span className="local-icon">
                                <FontAwesomeIcon icon={faEnvelope} className="icon is-small is-left" />
                            </span>

                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
                            <FontAwesomeIcon icon={faLock} className="icon is-small is-left local-icon" />
                        </p>
                    </div>
                    <div className="control is-flex is-flex-direction-row is-justify-content-space-between">
                        <button className="button is-success" type="submit">{isRegister ? "Registrarse" : "Login"}</button>
                        <button className="button is-primary" onClick={() => changeAction()}>{!isRegister ? "Registrarse" : "Logguearse"}</button>
                    </div>
                    {errorMsg ? <div className="has-text-danger">{errorMsg}</div> : null}
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

                .local-icon {
                    width: 2em;
                    padding: .2em;
                    margin-left: 0.3em;
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
