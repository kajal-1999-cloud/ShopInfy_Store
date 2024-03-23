import React from 'react'
import images from '../../assets//shopping.jpg'

function Banner() {
  return (
    <div >
        <img src={images} 
        className="object-cover w-full" alt="" />
    </div>
  )
}

export default Banner