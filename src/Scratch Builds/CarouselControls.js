import React from 'react'

const CarouselControls = ({prev, next}) => {
  return (
    <div>
        <button className='carousel_control left' onClick={prev}>Prev</button>
        <button className='carousel_control right' onClick={next}>Next</button>
    </div>
  )
}

export default CarouselControls