import React from 'react'
import './about.css'
import Protagonist1 from '../../assets/tishmoji-wave.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Protagonist1} alt="protagonist waving" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className= 'about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className= 'about__icon'/>
              <h5>Connections</h5>
              <small>500+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className= 'about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Animi harum dolorum quis? Consectetur adipisci tenetur exercitationem, 
            id perferendis nesciunt odio tempore neque unde reiciendis consequuntur non, 
            deserunt laudantium assumenda quod.</p>
            <a href="#contact" className="btn btn-primary">Get in Touch!</a>
        </div>
      </div>


    </section>
  )
}

export default About