import React from 'react'
import { Link } from 'react-router-dom'
import group848Icon from '../assets/Group 845.png';
import './Verification.css'

function Verification() {
  return (
    <section className="verification__container">

        <section className="verification__sidebar">
          <img className='sidebar__icon' src={group848Icon} alt="" />
        </section>

        <section className="verification__content">
        <h1>Verification code</h1>
        <p>We sent a confirmation mail code to your email</p>
        
        <section className="enter__code">
          <input type="text" className='enter__code__input' placeholder='Enter code here'/>
          <Link className="verification__signup">SIGN UP</Link>
        </section>
        </section>
      
    </section>
  )
}

export default Verification
