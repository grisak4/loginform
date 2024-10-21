import React from 'react';
import '../styles/Login.css'

const Login = () => {
    return(
        <div className='gradient'>
            <div className='container'>
                <div className='form-header'>
                    Sign In
                </div>
                <form>
                    <div className='username'>
                        <input type='text' placeholder='username or email'/>
                    </div>
                    <div className='password'>
                        <input type='password' placeholder='password'/>
                    </div>
                    <div>
                        <input type='submit' value='SIGN IN'/>
                    </div>
                </form>
                <div className='anotherlogin'>
                    <div className='anotherlogin-text'>
                        Or login with
                    </div>
                    <div className='anotherlogin-icons'>
                        <div className='anotherlogin-icon'>
                            <div className='icon-github'></div>
                        </div>
                        <div className='anotherlogin-icon'>
                            <div className='icon-google'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;