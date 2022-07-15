import React from 'react'
import './Footer.css'
import footer from '../img/footer.png'

const Footer = () => {
  return (
    <div className='footer'id='Footer'>
        <img src={footer} alt=""/>
        <div className='footer_content'>
            <span>¡Ponte en contacto conmigo!</span>
            <div className='footer_icons'>
                <a target="blank_" href='email to :vkmedrano@hotmail.com'><i class="fa-solid fa-envelope-open-text"></i></a>
                <a target="blank_" href="https://github.com/vkhugo08"><i class="fa-brands fa-github"></i></a>
                <a target="blank_" href="https://www.linkedin.com/in/victor-medrano-90b272192/"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer