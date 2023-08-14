import React from 'react'
import "../footballers/Footballers.css"

import messiImg from "/messiImg.svg"

const Footballers = () => {
  return (
    <div className='footballers-div'>
      <div>
      <img src={messiImg} className='border-t border-white' />
      </div>
    </div>
  )
}

export default Footballers
