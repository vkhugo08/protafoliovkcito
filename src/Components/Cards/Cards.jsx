import React from 'react'
import './Cards.css'

const Cards = ({image}) => {
  return (
    <div className='card'>
         <span>{image}</span> 
    </div>
  )
}

export default Cards