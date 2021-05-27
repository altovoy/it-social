import React, {useState} from 'react'

import {Link, useHistory} from "react-router-dom";

function SignUp() {
    const history = useHistory()
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
        }
    )

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const onSubmit = (e)=> {
        history.push("/profile");
        e.preventDefault();
    }

    return (
        <div className='big-container cols-1-2'>
            <div className='container flex-col-center bg-primary text-center'>
                <h1 className='white' >Hello, friend!</h1>
                <p className='white'>Enter your personal details and start journey with us</p>
                <Link to='sign-up'>
                <button className="button outlined white">Sign Up</button>
                </Link>
                
            </div>

            <div className='container flex-col-center text-center'>
                <div className='vert-dist'>
                    <h1 className='text-primary'>Sign in to IT-social</h1>
                    <div >

                    </div>

                    <form onSubmit={onSubmit} >
                        <div className='vert-dist'>
                            <div>
                                <input className='text-field' onChange={onChange} type='email' id='email' placeholder='Email' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='password' id='password1' placeholder='Password' ></input>
                            </div>
                        </div>
                        <br/>
                        
                        

                        <div>
                            <input className='button primary white' type='submit' value="Sign In" />
                        </div>

                    </form>

                    <a href="#">Forgot your password?</a>

                </div>

            </div>
        </div>
    )
}

export default SignUp