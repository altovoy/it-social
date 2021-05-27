import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from "react-router-dom";

import { loginUser } from '../actions/authActions'

function Login({ error, isAuthenticated, loginUser }) {
    const history = useHistory()

    isAuthenticated && history.push("/users");

    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
        }
    )

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        loginUser(formData)

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
                                <input className='text-field' error={error.email} onChange={onChange} type='email' id='email' placeholder='Email' ></input>
                                <p className="error-text" >
                                    {error.email}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' error={error.password} onChange={onChange} type='password' id='password' placeholder='Password' ></input>
                                <p className="error-text" >
                                    {error.password}
                                </p>
                            </div>
                        </div>
                        <br />


                        <div>
                            <input className='button primary white' type='submit' value="Sign In" />
                        </div>

                    </form>

                    <p>Forgot your password?</p>

                </div>

            </div>
        </div>
    )
}

const mapState = state => {
    const { error, auth } = state
    const { isAuthenticated } = auth
    return {
        error, isAuthenticated
    }
}

const mapDispatch = { loginUser }

export default connect(mapState, mapDispatch)(Login)