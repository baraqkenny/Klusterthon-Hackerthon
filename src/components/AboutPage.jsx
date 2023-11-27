import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './AboutPage.css';

 function AboutPage() {
  return (
    <>
      <Nav />
      <section className="about__content__wrapper">
        <section className="about__content__one">
            <h1>Mission</h1>
            <p>we are on a mission to revolutionize healthcare by ensuring every patient gets the support they need to adhere to their medication regimen. We believe in the power of technology and human connection to transform lives and build healthier communities</p>
        </section>

        <section className="about__content__two">
            <h2>OUR VALUES</h2>
            <section className="our__values">
                <div className="empowerment">
                    <h3>Empowerment</h3>
                    <p> We empower individuals to take control of their health through user-friendly technology</p>
                </div>

                <div className="community">
                    <h3>Community</h3>
                    <p>We foster a supportive community where individuals and volunteers come together to achieve health and wellness goals</p>
                </div>

                <div className="innovation">
                    <h3>Innovation</h3>
                    <p>We are committed to staying at the forefront of healthcare technology to deliver cutting-edge solutions</p>
                </div>
            </section>
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

export default AboutPage

