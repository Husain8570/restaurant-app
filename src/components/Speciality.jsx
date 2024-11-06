import React from 'react'
import Card from './Card'

function Speciality() {
    const cards=[
        {
            image:"/i1.png",
            title:"calamari",
            desc:"One of our favorite dishes that we are known for. Baked, grilled or stuffed calamari. Maybe a combination of all three, which we call Tris Calamari."
        },
        {
            image:"/i2.png",
            title:"grilled meat",
            desc:"Discover our delicious grilled specialties such as cevapcici or pljeskavica. Enjoy the variety of flavors and the traditional preparation of our grilled dishes with us.."
        },
        {
            image:"/i3.png",
            title:"Enjoy our selection of delicious desserts, including Bled cream cake, apple strudel, chocolate soufflé and pancakes. Each dessert is prepared with love and care."
        },
        {
            image:"/i4.png",
            title:"Homemade ice cream",
            desc:"During the summer months, enjoy our delicious homemade ice cream prepared in the traditional way. Each spoonful is a refreshing treat and offers you the authentic taste."
        }
    ]
    return (
        <div className="bg-[url('/bgd.jpg')] min-h-screen bg-cover bg-no-repeat bg-center">

            <div className='pt-10'>
                <h1 className='text-white font-semibold text-3xl text-center pb-10'>QUALITY AND TRADITION
                </h1>
                <div className='text-white font-semibold text-5xl'>

                <h2 className='text-center'>
                    Our specialties - fresh calamari
                </h2>
                <h2 className='text-center'>
                and grilled meat
                </h2>
                </div>


            </div>

            <div className='flex flex-col lg:flex-row'>
            {
                cards.map((card)=>{
                    return <Card image={card.image} title={card.title} desc={card.desc}/>
                })
            }
            </div>
        </div>
    )
}

export default Speciality