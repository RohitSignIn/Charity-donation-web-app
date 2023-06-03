import React from 'react'
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
  return (
    <section id="contact">
        <Nav/>
        <h1 id='head'>Contact</h1>
        <div>
            <button onClick={() => window.location = 'tel:9999999999'}>+91-7424970024</button>
            <button onClick={() => window.location = 'mailto:rohitsinghsignin@gmail.com'}>rohitsinghsignin@gmail.com</button>
        </div>

        <Footer/>
    </section>
  )
}

export default Contact