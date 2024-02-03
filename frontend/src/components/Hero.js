import React from 'react'
import hero from '../images/hero.png'

function Hero() {
  return (
    <section className='min-h-screen bg-gradient-to-t from-cyan-400 to-blue-500 flex w-full px-24 items-center justify-between'>
        <div className="w-6/12">
            <h1 className='text-5xl w-11/12 font-poppins font-medium uppercase'>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-[#fca311]">Upgrade your tech arsenal today</span>
            </h1>
            <p className='mt-4 w-10/12 font-roboto text-base'>Shop now for high-quality products and enjoy convenient shopping from the comfort of your home. Experience the best in technology and entertainment with us.</p>
            <button className='mt-6 border-none bg-mpDBlue text-white p-2 text-base font-poppins font-semibold rounded-lg hover:text-mpBlue'>Make a purchase</button>
        </div>
        <div className="w-6/12">
            <img src={hero} alt="" />
        </div>
    </section>
  )
}

export default Hero