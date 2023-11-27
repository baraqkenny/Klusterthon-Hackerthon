import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Wireframe13 from '../assets/Wireframe13.png'
import pexelsandreapiacquadio from '../assets/pexels-andrea-piacquadio.png'
import Wireframe12 from '../assets/Wireframe12.png'
import Ellipse21 from '../assets/Ellipse21.png'
import './Homepage.css'

function HomePage() {
    return(
        <section className='homepage__container'>
            <Nav />
            <section className="homepage__content__one">
                <h1>Unlocking Better Health Together</h1>
                <p>we believe in empowering patients and transforming healthcare through improved medication
                    adherence. Our Cutting-edge Medication adherence Dashboard ensures you stay on top of your health
                    journey with ease. 
                </p>

                <Link to="/signup" className='content__one__signup__link'>Get started</Link>
                <img className='wireframe' src={Wireframe13} alt="wireframe 13" />
                
                <section className="homepage__content__two">
                    <h3>WE OFFER</h3>
                    <h1>Smart reminders</h1>
                    <p>Never miss a dose again with our intelligent reminder system. Set personalized reminders to suit your schedule,
                         and let technology work for your well-being.
                    </p>
                    <img className='pixelsandria__image' src={pexelsandreapiacquadio} alt="pexels-andrea-piacquadio.png" />
               
               <section className="homepage__content__three">
                <h1>Accountability partners</h1>
                <p>Connect with dedicated volunteers who serve as your accountability partners. Share your progress, victories, and 
                    challenges, fostering a supportive community dedicated to your health 
                </p>
                <img className='wireframe12' src={Wireframe12} alt="" />
                </section>

                <section className="homepage__content__four">
                    <h1>Healthcare Provider Adherence UI</h1>
                    <p>Streamlined, intuitive UI for healthcare providers to monitor and support patients in real time.
                        Strengthen the patient-provider relationship with actionable insights
                    </p>
                    <img className='pixelsandria__image2' src={pexelsandreapiacquadio} alt="pexels-andrea-piacquadio.png" />
                </section>

                <section className="homepage__content__five">
                    <section className="homepage__content__five__wrapper">
                    <img className='ellipse21' src={Ellipse21} alt="Ellipse21.png" />
                    <p>“Before using Dose prompt software, I missed alot of drugs because I’m always busy . But with Dose prompt easy features like the reminders, I take my medications regularly, I learn a lot on healthy lifestyles through articles they recommend to me without leaving the website .I also get notified by my accountability partner when am defaulting. Your health can only get better with Dose prompt”</p>
                </section>
                </section>

                <footer className="homepage__content__six">
                    <hr />
                <section className="homepage__content__six__wrapper">
                <Link to="/home" className='footer__link'>Home</Link>
                <Link to="/about" className='footer__link'>About</Link>
                <Link to="/contact" className='footer__link'>Contact</Link>
                <h3>Terms and Privacy</h3>
                <h4>&copy;2023</h4>
                </section>
                </footer>
                </section>
            </section>
        </section>
    )
}

export default HomePage