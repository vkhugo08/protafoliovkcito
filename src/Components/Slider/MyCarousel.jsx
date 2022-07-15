import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import './MyCarousel.css'
import '@brainhubeu/react-carousel/lib/style.css';
import ecomerce1 from '../img/ecomerce1.png'
import pokeapi1 from '../img/pokeapi1.png'
import rickymorti1 from '../img/rickymorty1.png'
import weatherapi from '../img/weatherapi.png'

const MyCarousel = () => (
  <Carousel className='carousel_container' plugins={['arrows']}>
    <img className='image' src={ecomerce1} />
    <img className='image' src={pokeapi1} />
    <img className='image' src={rickymorti1}/>
    <img className='image' src={weatherapi}/>
  </Carousel>
);

export default MyCarousel;
