import React from 'react'
import './header.css'
import CTA from './CTA'
import Protagonist from '../../assets/tishmoji.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is </h5>
        <h1>Letitia Treasure </h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA cvText="Download CV" contactText="Get in Touch!"></CTA>
        <HeaderSocial />

        <div className="protagonist">
          <img src={Protagonist} alt="Portfolio protagonist headshot"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header