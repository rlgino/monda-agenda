import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../context/usercontext'

function Navbar() {
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

    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-end p-2">
                    <div onClick={e => logout()}>Salir...</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
