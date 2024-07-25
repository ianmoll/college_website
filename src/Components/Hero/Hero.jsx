import React from 'react'
import './Hero.css'

import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero container'>
<div className="hero-text">
  <h1>We Ensure better education for a better world </h1>

  <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel the dynamic field of education</p>
  <button className='btn'>Explore more <FaLongArrowAltRight className='forward'/>  </button>
</div>
    </div>
  )
}

export default Hero