import React from 'react'
// import images from '../../assets//shopping.jpg'
// import sale from '../../assets/special_sale.jpg'
import sale from '../../assets/anushka.jpg'
import pay from '../../assets/sbi.jpg'
import Mbquick from '../../assets/mobiquick.jpg'
import mobiquick from '../../assets/mobiquick.jpg'
import off from '../../assets/200 off.webp'

function Banner() {
  return (
    <div >
     <div>
     <img src={sale} 
        className="object-cover mb-2 h-auto w-full" alt="" />
     </div>

     <div className="flex  mt-20 md:py-2 justify-center ">
            <img src={off} className="object-cover  w-[80%]" alt="" />
          </div>
     {/* <div className='flex  md:py-2 justify-center'>
     <img src={mobiquick} 
        className="object-cover  py-6 px-2 md:py-2 " alt="" />
     </div> */}
    </div>
  )
}

export default Banner