import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializetion from '../Firebase/Firebase.init';

initializetion()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in with google 
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
            }).catch(error => {
                // console.log(error.message)
                setError(error.message)
            })
    }

    // sign in and sign up state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)

        })
    }, [])

    const signOutProcess = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message)
            })

    }


    return{
        user,
        error,
        signInWithGoogle,
        signOutProcess
    }
};

export default UseFirebase;