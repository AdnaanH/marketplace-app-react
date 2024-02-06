import { Carousel } from 'flowbite-react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import laptops from '../images/2.png'
import computing from '../images/1.png'
import smartphones from '../images/3.png'
import entertainment from '../images/4.png'
import gaming from '../images/5.png'

function ShopCategory() {  

  return (
    <section className='h-screen w-full flex flex-col px-10 justify-center items-center bg-mpGrey py-16'>
        <h1 className='text-center font-extrabold sm:text-4xl text-2xl sm:px-1 px-2 sm:mb-6 mb-4'>
            <span className="bg-clip-text font-poppins text-transparent bg-gradient-to-t from-cyan-400 to-blue-500">
                SHOP BY CATEGORY
            </span>
        </h1>
        <div className="w-8/12  pt-4">
          <div className="h-96">
            <Carousel slideInterval={3500}>
              <div className="w-full h-full flex justify-center bg-center bg-no-repeat bg-contain items-center bg-mpYellow" style={{ backgroundImage: `url(${laptops})` }}>
                  <button className=' p-2'><BsFillArrowRightCircleFill color="#ffffff" size={30} /></button>
              </div>
              <div className="w-full h-full flex justify-center bg-center bg-no-repeat bg-contain items-center bg-mpYellow" style={{ backgroundImage: `url(${computing})` }}>
                  <button className=' p-2'><BsFillArrowRightCircleFill color="#ffffff" size={30} /></button>
              </div>
              <div className="w-full h-full flex justify-center bg-center bg-no-repeat bg-contain items-center bg-mpYellow" style={{ backgroundImage: `url(${smartphones})` }}>
                  <button className='p-2'><BsFillArrowRightCircleFill color="#ffffff" size={30} /></button>
              </div>
              <div className="w-full h-full flex justify-center bg-center bg-no-repeat bg-contain items-center bg-mpYellow" style={{ backgroundImage: `url(${entertainment})` }}>
                  <button className='p-2'><BsFillArrowRightCircleFill color="#ffffff" size={30} /></button>
              </div>
              <div className="w-full h-full flex justify-center bg-center bg-contain bg-no-repeat items-center bg-mpYellow" style={{ backgroundImage: `url(${gaming})` }}>
                  <button className='p-2'><BsFillArrowRightCircleFill color="#ffffff" size={30} /></button>
              </div>
            </Carousel>
          </div>
        </div>
    </section>
  )
}

export default ShopCategory