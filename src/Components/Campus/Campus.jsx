import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/photos/gallery_1.png'
import gallery_2 from '../../assets/photos/gallery_2.png'
import gallery_3 from '../../assets/photos/gallery_3.png'
import gallery_4 from '../../assets/photos/gallery_4.png'
import { FaArrowRight } from "react-icons/fa";




const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
<button className='btn dark-btn'>See more here <FaArrowRight className='next_arrow'/></button>
    </div>
  )
}

export default Campus