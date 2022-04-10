import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel='noreferrer'><BsGithub/></a>
        <a href="https://dev.to/theme_selection/ultimate-reactjs-resources-for-web-developers-2021-424c" target='_blank' rel='noreferrer'><FaDev/></a>
    </div>
  )
}

export default HeaderSocials