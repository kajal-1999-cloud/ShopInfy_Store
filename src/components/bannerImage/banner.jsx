import React from 'react'
// import images from '../../assets//shopping.jpg'
// import sale from '../../assets/special_sale.jpg'
import sale from '../../assets/anushka.jpg'

function Banner() {
  return (
    <div >
        <img src={sale} 
        className="object-cover h-[350px] w-full" alt="" />
    </div>
  )
}

export default Banner