import React from 'react';
import useAuth from '../Context/useAuth';

const Login = () => {
    const {signInWithGoogle, error} = useAuth()
    return (
        <div>
            <h1>Login section</h1>
            <div>
                {<p>{error}</p>}
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;