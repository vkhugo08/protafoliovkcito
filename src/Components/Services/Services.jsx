import React from 'react'
import Cards from '../Cards/Cards'
import {motion} from 'framer-motion'
import './Services.css'
import 'animate.css';
const Services = () => {

    const transition ={duration : 2, type: 'spring'}

  return (
    <div className='services'>
        {/* left side */}
        <div className='services_text'>
            <span>Mis</span>
            <span>Habilidades</span>
            <span><p>-Habilidades aprendidas inicialmente en la academia "bootcamp Academlo",<br/> que me permiten hacer realidad cualquier producto que tengas en mente!</p>
            </span>

        </div>
         {/* rigt side */}
        <div className='services_cards' style={{left: '14rem', top: '-5rem'}}>
            <Cards className="fa-node" 
            image={<i class="fa-brands fa-node" id='Services'></i>}
            />
            <div style={{top: '10rem', left: '-11rem'}}>
            <Cards className="fa-react" 
            image={<i class="fa-brands fa-react"></i>}
            />
            </div>
            <div style={{top: '19rem', left: '12rem', top:'8rem'}}>
            <Cards className="fa-js" 
            image={<i class="fa-brands fa-js"></i>}
            />
            </div>
            <div style={{top: '22rem', left: '8rem'}}>
            <Cards className="fa-html5" 
            image={<i class="fa-brands fa-html5"></i>}
            />
            </div>
            <div style={{top: '23rem', left: '-6rem'}}>
            <Cards className="fa-css3-alt" 
            image={<i class="fa-brands fa-css3-alt"></i>}
            />
            </div>
    
            
        </div>
    </div>
  )
}

export default Services