/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import MemojiComp from '../../assets/tishmoji-comp.png'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LTreasure</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <img src={MemojiComp} alt="" className='footer__image' />
        <small> LTreasure Portfolio. </small>
      </div>
    </footer>
  )
}

export default Footer