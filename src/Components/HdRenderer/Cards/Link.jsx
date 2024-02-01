import React from 'react'
import watch from '../assets/watch-icon.svg';
import button from '../assets/button.svg';
const Link = () => {
  return (
    
         <div className="row  justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <img src={button} className='mt-2' alt="" width='120px' height='45px' />
            </div>
            <div className="col-sm-12 col-md-6  d-flex justify-content-center">
              <img src={watch} alt="" width='120px' height='76px' />
            </div>
          </div>
    
  )
}

export default Link