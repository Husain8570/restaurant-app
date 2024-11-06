import React from 'react'

function Home() {
  return (
    <div className='min-h-screen dis flex  justify-evenly flex-col items-center mt-44 lg:flex-row'>
        <div className='w-1/3 flex flex-col gap-y-8'>
        <h1 className='font-bold text-5xl '>Daras - Restaurant of Mediterranean Delights</h1>
        <p>
        Welcome to Daras, the culinary highlight of St. Jakob. Enjoy freshly prepared calamari and delicious grilled meat specialties that reflect the authentic taste of Mediterranean cuisine. At our restaurant, you can expect an unforgettable dining experience in a unique atmosphere. Our passion for fresh, local ingredients makes every dish special.
        </p>
        </div>

        <div >
        <img src="/food.jpeg" alt=""  />
        <img src="/food2.jpeg" alt="" className='relative  bottom-10 left-28 '  />
        <img src="/food3.png" alt="" className='relative  bottom-20  '  />
        </div>
    </div>
  )
}

export default Home