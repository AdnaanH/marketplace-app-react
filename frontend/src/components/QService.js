import React from 'react'
import { FaFacebook } from 'react-icons/fa'

function QService() {
  return (
    <section className='flex flex-col justify-center items-center px-10 bg-mpYellow h-60'>
        <h1 className='text-center font-extrabold sm:text-4xl text-2xl sm:px-1 px-2 sm:mb-6 mb-4'>
            <span className="bg-clip-text font-poppins text-transparent bg-gradient-to-t from-cyan-400 to-blue-500">
                WHY SHOP FROM US
            </span>
        </h1>
        <div className="flex gap-6 w-full justify-between overflow-visible">
            <div className='w-3/12 flex flex-col justify-center items-center h-24 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaFacebook size={36} />
                <h1>3 hour Delivery within Nairobi.</h1>
            </div>
            <div className='w-3/12 flex flex-col justify-center items-center h-24 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaFacebook size={36} />
                <h1>3 hour Delivery within Nairobi.</h1>
            </div>
            <div className='w-3/12 flex flex-col justify-center items-center h-24 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaFacebook size={36} />
                <h1>3 hour Delivery within Nairobi.</h1>
            </div>
            <div className='w-3/12 flex flex-col justify-center items-center h-24 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaFacebook size={36} />
                <h1>3 hour Delivery within Nairobi.</h1>
            </div>
        </div>

    </section>
  )
}

export default QService