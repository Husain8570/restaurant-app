import React from 'react'

function Card({image,title,desc}) {
  return (
    <div className='backdrop-blur-lg shadow-md p-4 m-6 mt-32'>
        <img src={image} alt="" className='fill-white'/>
        <div className='text-white'>
        <h1>{title}</h1>
        <p>
          {desc}  
        </p>
        </div>
    </div>
  )
}

export default Card