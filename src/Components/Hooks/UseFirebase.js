import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {useEffect, useState} from 'react';
import initializetion from '../Firebase/Firebase.init';

initializetion()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading , setIsLoading] = useState(true)
    const auth = getAuth()

    // sign in with google 
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
                setError('')
            })
            .finally(() => setIsLoading(false))
            // .catch(error => {
            //     // console.log(error.message)
            //     setError(error.message)
            // })
    }

    // sign in and sign up state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            };
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    // signOut process 
    const signOutProcess = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
            
            // .catch(error => {
            //     setError(error.message)
            // })

    }


    return{
        user,
        error,
        isLoading,
        signInWithGoogle,
        signOutProcess
    }
};

export default UseFirebase;