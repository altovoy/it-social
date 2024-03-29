import React, { useState } from 'react'

import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { signUp } from '../actions/authActions'

function SignUp({ error, signUp }) {

    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            country: '',
            password1: '',
            password2: ''
        }
    )

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })

    }
    const hist =  useHistory()
    const onSubmit = (e) => {
        e.preventDefault();
        signUp(formData,hist)

    }

    return (
        <div className='big-container cols-1-2'>
            <div className='container flex-col-center bg-primary text-center'>
                <h1 className='white' >Wellcome Back!</h1>
                <p className='white'>To keep connect with us please login with your personal info</p>
                <Link to='/'>
                    <button className="button outlined white">Sign In</button>
                </Link>
            </div>

            <div className='container flex-col-center text-center'>
                <div className='vert-dist'>
                    <h1 className='text-primary'>Create Account</h1>
                    <div >

                    </div>

                    <form onSubmit={onSubmit} >
                        <div className='form-cols'>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='firstName' placeholder='First Name' ></input>
                                <p className="error-text" >
                                    {error.firstName}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='lastName' placeholder='Last Name' ></input>
                                <p className="error-text" >
                                    {error.lastName}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='email' id='email' placeholder='Email' ></input>
                                <p className="error-text" >
                                    {error.email}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='tel' id='phone' placeholder='Phone number' ></input>
                                <p className="error-text" >
                                    {error.phone}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='city' placeholder='City' ></input>
                                <p className="error-text" >
                                    {error.city}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='country' placeholder='Country' />
                                <p className="error-text" >
                                    {error.country}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='password' id='password1' placeholder='Password' ></input>
                                <p className="error-text" >
                                    {error.password1}
                                </p>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='password' id='password2' placeholder='Confirm password' ></input>
                                <p className="error-text" >
                                    {error.password2}
                                </p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <input className='button primary white' type='submit' value="Sign up" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default connect(state =>({ error: state.error }), { signUp })(SignUp)