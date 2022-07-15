import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import FrontPage from './Components/FrontPage/FrontPage'
import Navbar from './Components/Nabvar/Navbar'
import Services from './Components/Services/Services'
import MyCarousel from './Components/Slider/MyCarousel'
import Works from './Components/Works/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <FrontPage/>
      <Services />
      <About />
      <Works />
      <MyCarousel/>
      <Footer/>
      
    </div>
  )
}

export default App
