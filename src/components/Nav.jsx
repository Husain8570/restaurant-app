import React from 'react'

function Nav() {
  return (
    <div className='flex justify-around mt-4 h-10 '>
        <img src="/logo.png" className='w-20' alt="" />
        <div className='flex justify-evenly flex-col lg:flex-row w-1/2 h-full items-center'>
            <div>Menu</div>
            <div>Ice cream</div>
            <div>Beverage</div>
            <div>Lunch</div>
            <div>Celebrations</div>
        </div>
        <button className='bg-red-600 text-white px-2 rounded-xl w-30'>Reserve Table</button>
    </div>
  )
}

export default Nav