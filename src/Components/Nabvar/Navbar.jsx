import React from 'react'
import './Navbar.css'
import logo from '../img/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className='navbar_container' id='Navbar'>
        <div className='navbar_left'>
                <div className='navbar_logo'>
                <img src={logo} alt="" />
                </div>
            </div>
        <div className='navbar_rigth'>
            <div className='navbar_list'>
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeCLass'>
                        <li>Inicio</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                        <li>Acerca de mi</li>
                    </Link>
                    
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Habilidades</li>
                    </Link>
                    
                    <Link spy={true} to='MyCarousel' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    
                </ul>
            </div>
            <Link spy={true} to='Footer' smooth={true}>
                <button className='btn contactame'>
                Contactame
            </button>
            </Link>
            
        </div>
    
    </div>
    
  )
}

export default Navbar