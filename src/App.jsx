import  React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Verification from './components/Verification';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import './App.css'

function App() {

  return (
    <section className='app__container'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </section>
  )
}

export default App
