/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import ProtagonistShrug from '../../assets/tishmoji-shrug.png'
import portfolioImage1 from '../../assets/portfolio1.png'
import portfolioImage2 from '../../assets/portfolio2.png'
import portfolioImage3 from '../../assets/portfolio3.png'
import portfolioImage4 from '../../assets/portfolio4.png'
import portfolioImage5 from '../../assets/portfolio5.png'
import portfolioImage6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: portfolioImage1,
    title: 'CyberHub',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },
  {
    id: 2,
    image: portfolioImage2,
    title: 'Device Compliancy Assurance Tool (DOAT)',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },
  {
    id: 3,
    image: portfolioImage3,
    title: 'Digital Front Door (DFD)',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },
  {
    id: 4,
    image: portfolioImage4,
    title: 'Static Compliancy Test Kit (SCTK)',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },
  {
    id: 5,
    image: portfolioImage5,
    title: 'Student Robotics Kit UI Interface',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },
  {
    id: 6,
    image: portfolioImage6,
    title: 'Python Rock Paper Scissors',
    github: 'https://github.com',
    demo: ProtagonistShrug
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>GitHub</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio