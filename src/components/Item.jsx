import React from 'react'

function Item({title,desc,image,amt}) {
  return (
    <div className='grid grid-cols-3'>
        <img src={image} className='rounded-full h-20 m-auto' alt="" />
        <div>
        <h1 className='text-amber-700 text-center'>{title}</h1>
        <p className='text-gray-500 text-center'>{desc}</p>
        </div>
        <div className='text-gray-500'>{amt}</div>
    </div>
  )
}

export default Item