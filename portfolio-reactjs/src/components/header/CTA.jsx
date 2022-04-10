import React from 'react'
import CV from '../../assets/LT-CV.png'

// CTA = call to action
const CTA = ({cvText, contactText}) => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>{cvText}</a> 
        <a href="#contact" className= 'btn btn-primary'>{contactText}</a>
    </div>
  )
}

export default CTA