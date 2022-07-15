import React from 'react'
import './FrontPage.css'
import Vector1 from '../../Components/img/vector1.png'
import Vector2 from '../../Components/img/vector2.png'
import yoimagen from '../../Components/img/yoimagen.png'
import pdf from '../pdf/cv victor hugo.pdf'
const FrontPage = () => {
  return (
    <div className='intro_container'>
        <div className='intro_left'>
            <div className='intro_name'>
                <span>Hola! Soy..</span>
                <span>Víctor Hugo Medrano</span>
                <span><p>Desarrollador Back-end con sólidos conocimientos de React-js, Html, Css y JavaScript.</p></span>
            </div>
          <a target="blank_" href={pdf} ><button className='btn btn_intro'>Descargar C.V</button></a> 
        </div>
        <div className='intro_right'>
                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
                <img className='img_intro' src={yoimagen} alt="" />
        </div>
    
    </div>
  )
}

export default FrontPage