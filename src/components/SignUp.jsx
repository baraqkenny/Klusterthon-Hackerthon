import react from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/flat-color-icons_google.png';
import group848Icon from '../assets/Group 845.png';
import './SignUp.css'

function SignUp() {

    return(
        <section className='signup__container'>
            <section className='signup__sidebar'>
                <img className="web__logo__icon" src={group848Icon} alt="" />
            </section>

            <section className="signup__content">
            <h1>Welcome to</h1>
            <p>Sign up below</p>

            <form className='signup__form'>
                <label htmlFor="full name">Full Name</label>
                <input type="text" />

                <label htmlFor="email">Email</label>
                <input type="text" />

                <label htmlFor="Phone number">Phone number</label>
                <input type="tel" />

                <label htmlFor="designation">Designation</label>
                <select>
                    <option value="patient">Patient</option>
                    <option value="health practioner">Health practioner</option>
                    <option value="volunteer">Volunteer</option>
                </select>
                
                <label htmlFor="password">Password</label>
                <input type="password" />

                <label htmlFor="Confirm Password">Confirm Password</label>
                <input type="password" />
            </form>

            <section className="check">
                <input type="checkbox"  className='checkbox'/> <p>I agree to the <Link>Terms of use</Link> and <Link>Privacy Policy</Link></p>
               
            </section>

            <section className="signup__links">
            <Link className="signup_link">SIGN UP</Link>
            <Link className="google__signup"><img src={googleIcon} alt="" /> Login with Google</Link>
            <h4 className="have__an__account">Already have an account? <Link className='signin'>SIGN IN</Link> </h4>
            </section>
            </section>
        </section>
    )

}

export default SignUp