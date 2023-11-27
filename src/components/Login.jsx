import React from 'react';
import { Link } from 'react-router-dom'
import googleIcon from '../assets/flat-color-icons_google.png'
import group848Icon from '../assets/Group 845.png';
import './Login.css'

function Login() {


    return(
        <section className="login__container">
            <section className='login__sidebar'>
                <img className='weblogo__login' src={group848Icon} alt="" />
            </section>

            <section className="login__content">
                <h1>Welcome back</h1>
                <p>Login below</p>

                <form className="form">
                    <label htmlFor="email" className="email__labels">Email</label>
                    <input type="email" className="login__inputs" placeholder='Email'/>

                    <label htmlFor="password" className="password__labels">Password</label>
                    <input type="password" className="login__inputs" placeholder='Password...'/>
                </form>
            <section className='login__links'>
                <Link className="login__link">LOG IN</Link>
                <Link className="google__login"><img src={googleIcon} alt="" /> Login with Google</Link>
                </section>           
            </section>

        </section>
    )
}

export default Login