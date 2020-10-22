import React, { useState, useEffect } from 'react'
import { loginWithMailAndPassowrd, onAuthChange, firebaseSignOut } from '../firebase/client'

const UserContext = React.createContext()

export function UserProvider(props) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthChange(function (userResult) {
            if (userResult) {
                setUser({
                    name: userResult.displayName,
                    email: userResult.email,
                    uid: userResult.uid
                })
            } else {
                setUser(null)
            }
        })
        return () => { }
    }, [])

    const login = (mail, password) => {
        loginWithMailAndPassowrd(mail, password)
    }

    const signUp = (mail, password, displayName) => {
        registerWithMailAndPassword(mail, password).then(function (result) {
            return result.user.updateProfile({
                displayName: displayName
            })
        })
    }

    const updateUser = (displayName) => {
        var user = getCurrentUser();

        return user.updateProfile({
            displayName: displayName
        })
    }

    const signOut = () => {
        return firebaseSignOut()
    }

    const value = React.useMemo(() => {
        return ({
            user, login, signOut, updateUser, signUp
        })
    })

    return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
    const context = React.useContext(UserContext)
    if (!context)
        throw new Error("Content not exists!")
    return context
}