import React from 'react';
import useAuth from '../Context/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle, error} = useAuth()
    return (
        <div className="Login-container">
            <div className="">
                <h1>Login section</h1>
                <div>
                    {<p>{error}</p>}
                    <button onClick={signInWithGoogle}><i class="fab fa-google"></i>sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;