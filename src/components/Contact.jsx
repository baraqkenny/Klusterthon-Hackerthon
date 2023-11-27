import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import fi_mail from '../assets/fi_mail.png'
import u_phone_alt from '../assets/u_phone_alt.png'
import './Contact.css'

function Contact() {
  return (
    <>
    <Nav />
      <section className="contact__page__container">
        <section className="contact__content__one">
            <h1>Contact us</h1>
            <p>Have questions or want to learn more about -----------------? We're here for you. Contact our team for personalized assistance, and let's embark on your journey to better health together.
           </p>
            <section className="web__contact">
            <section className="dose__mail">
                <img src={fi_mail} alt="" />
                <p>doseprompt@gmail.com</p>
            </section>

            </section>
            </section>
            
       

        <section className="contact__content__two">
         <form className='contact__form'>
            <label htmlFor="">First name</label>
            <input type="text" />

            <label htmlFor="">Last name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" />

            <label htmlFor="">Phone</label>
            <input type="tel" />

            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" className='send__message' value="send message"/>
            
         </form>
         
        </section>
        
      </section>
      <footer className="about__content__footer">
                    <hr />
                <section className="about__footer__wrapper">
                <Link to="/" className='about__footer__link'>Home</Link>
                <Link to="/about" className='about__footer__link'>About</Link>
                <Link to="/contact" className='about__footer__link'>Contact</Link>
                <h3>Terms and Privacy</h3>
                <h4>&copy;2023</h4>
                </section>
                </footer>
    </>
  )
}

export default Contact
