import React from 'react'

function ProductReview() {
  return (
    <section className='flex bg-white p-4 flex-col justify-start mt-8 items-start w-full mb-6'>
        <h1 className='text-mpBlue font-bold font-roboto text-2xl'>Provide feedback</h1>
        <label className='text-base font-bold font-roboto mt-4'>Title</label>
        <input type="text" className='mt-2 outline-none border-black bg-transparent rounded-md w-6/12' />
        <label className='text-base font-bold font-roboto mt-4'></label>
        <textarea name="" id="" className='mt-2 outline-none border-black bg-transparent rounded-md w-10/12 h-40'></textarea>
        <button className='bg-mpBlue w-3/12 mt-4 py-2 border-none rounded-md text-white text-base font-bold'>submit</button>
    </section>
  )
}

export default ProductReview