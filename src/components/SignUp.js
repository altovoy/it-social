import React, {useState} from 'react'

function SignUp() {

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

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    return (
        <div className='big-container cols-1-2'>
            <div className='container flex-col-center bg-primary text-center'>
                <h1 className='white' >Wellcome Back!</h1>
                <p>To keep connect with us please login with your personal info</p>
                <button className="button outlined white">Sign In</button>
            </div>

            <div className='container flex-col-center text-center'>
                <div className='vert-dist'>
                    <h1 className='text-primary'>Create Account</h1>
                    <div >

                    </div>

                    <form  >
                        <div className='form-cols'>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='firstName' placeholder='First Name' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='lastName' placeholder='Last Name' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='email' id='email' placeholder='Email' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='tel' id='phone' placeholder='Phone number' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='city' placeholder='City' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='text' id='country' placeholder='Country' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='password' id='password1' placeholder='Password' ></input>
                            </div>
                            <div>
                                <input className='text-field' onChange={onChange} type='password' id='password2' placeholder='Confirm password' ></input>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <input className='button primary white' type='submit' />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default SignUp