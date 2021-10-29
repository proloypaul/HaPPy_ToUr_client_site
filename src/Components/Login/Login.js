import React from 'react';
import UseFirebase from '../Hooks/UseFirebase';

const Login = () => {
    const {signInWithGoogle, error} = UseFirebase()
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