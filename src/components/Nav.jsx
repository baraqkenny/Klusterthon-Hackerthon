import React from 'react';
import { Link } from 'react-router-dom';
import websiteLogo from '../assets/Group845(1).png';
import './Nav.css';


function Nav() {

    return(
        
            <nav className='nav__container'>
                <section className="nav__logo__wrapper">
               <Link to="/"><img src={websiteLogo} alt="website logo" /></Link>
                <Link to="/" className='web__name'>Dose Prompt</Link>
                </section>
                <section className="nav__content">
                
                    <Link to="/" className='home'>Home</Link>
                    <Link to="/about" className='about'>About</Link>
                    <Link to="/contact" className='contact'>Contact</Link>
                
                <section className='nav__links'>
                    <Link to="/login" className='homepage__login__btn'>Login</Link>
                    <Link to='/signup' className='homepage__signup__btn' >Get Started</Link>
                </section>
                </section>
            </nav>
        
    )
}

export default Nav