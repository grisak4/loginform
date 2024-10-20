import React from 'react';
import '../styles/Login.css'

class LoginForm extends React.Component {
    render() {
        return(
            <div>
                <div className='container'>
                    <div className='form-header'>
                        Sign In
                    </div>
                    <form>
                        <div className='username'>
                            <input placeholder='Username' />
                        </div>
                        <div className='password'>
                            <input type='password' placeholder='Password'/>
                        </div>
                        <div>
                            <input type='submit' value='SIGN IN' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default LoginForm;