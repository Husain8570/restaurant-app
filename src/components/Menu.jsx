import React from 'react'
import Item from './Item'

function Menu() {
    const items=[
        {
            title:"Meatloaf",
            desc:"with roasted potatoes, spinach, and fried egg",
            image:"/i1.png",
            amt:"€ 8.80"
        },
        {
            title:"Salmon sticks",
            desc:"with potato salad",
            image:"/i2.png",
            amt:"€ 8.10"
        },
        {
            title:"Beef goulash",
            desc:"with a roll",
            image:"/i3.png",
            amt:"€ 8.70"
        },
        {
            title:"Tagliatelle",
            desc:"with mushroom sauce",
            image:"/i4.png",
            amt:"€ 8.60"
        },
        {
            title:"Seafood salad",
            desc:"with fried egg",
            image:"/i5.png",
            amt:"€ 8.12"
        }
    ]
  return (
    <div className='h-screen bg-custom-pink'>


        <div className='pt-14'>
        <h1 className='text-center text-amber-700 text-xl'>MONDAY - FRIDAY 11:00 AM - 3:00 PM</h1>
        <h2 className='font-serif font-bold text-3xl text-center mt-10'>Our lunch this week</h2>    
        </div>

        {
            items.map((item)=>{
                return <Item title={item.title} image={item.image} desc={item.desc} amt={item.amt}/>
            })
        }
    </div>
  )
}

export default Menu