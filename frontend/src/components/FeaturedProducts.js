import FProductOne from '../images/Products/Product201.png'
import FProductTwo from '../images/Products/Product101.png'
import FProductThree from '../images/Products/Product301.png'
import FProductFour from '../images/Products/Product503.png'
import FProductFive from '../images/Products/Product802.png'
import { FaStar, FaCartPlus, FaHeart } from 'react-icons/fa'

function FeaturedProducts() {
  return (
    <section className='h-screen w-full flex flex-col bg-mpGrey py-16'>
        <h1 className='text-start cursor-pointer hover:bg-black hover:text-white text-black font-poppins uppercase rounded-tr-2xl rounded-br-md font-extrabold sm:text-3xl text-2xl px-4 py-2 sm:mb-6 mb-4 bg-mpYellow w-max p-2'>
           Featured Products
        </h1>
        <div className="w-full flex gap-4 items-center justify-between pt-6 px-10">
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-10%</small>
                    <img src={FProductOne} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='cursor-pointer text-black font-bold text-base font-roboto'>Wireless Headphones</h4>
                    <h5 className='font-bold text-sm'>Ksh 9,299 <span className='font-normal line-through'>Ksh 13,999</span></h5>
                </div>
                <div className='flex mt-4 px-2 w-full justify-between items-center'>
                    <div className="w-4/12 flex justify-between items-center">
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                    <div className="flex gap-4 justify-end items-center w-7/12">
                        <FaHeart size={25} color='#fca311' className='cursor-pointer' />
                        <FaCartPlus size={25} color='#fca311' className='cursor-pointer' /> 
                    </div>
                </div>

            </div>
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-15%</small>
                    <img src={FProductTwo} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Samsung Galaxy S24</h4>
                    <h5 className='font-bold text-sm'>Ksh 189,999 <span className='font-normal line-through'>Ksh 204,999</span></h5>
                </div>
                <div className='flex mt-4 px-2 w-full justify-between items-center'>
                    <div className="w-4/12 flex justify-between items-center">
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                    <div className="flex gap-4 justify-end items-center w-7/12">
                        <FaHeart size={25} color='#fca311' className='cursor-pointer' />
                        <FaCartPlus size={25} color='#fca311' className='cursor-pointer' /> 
                    </div>
                </div>

            </div>
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-23%</small>
                    <img src={FProductThree} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Wireless Game Controller</h4>
                    <h5 className='font-bold text-sm'>Ksh 19,999 <span className='font-normal line-through'>Ksh 24,999</span></h5>
                </div>
                <div className='flex mt-4 px-2 w-full justify-between items-center'>
                    <div className="w-4/12 flex justify-between items-center">
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                    <div className="flex gap-4 justify-end items-center w-7/12">
                        <FaHeart size={25} color='#fca311' className='cursor-pointer' />
                        <FaCartPlus size={25} color='#fca311' className='cursor-pointer' /> 
                    </div>
                </div>
            </div>
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-10%</small>
                    <img src={FProductFour} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Blogging Microphone</h4>
                    <h5 className='font-bold text-sm'>Ksh 29,499 <span className='font-normal line-through'>Ksh 23,999</span></h5>
                </div>
                <div className='flex mt-4 px-2 w-full justify-between items-center'>
                    <div className="w-4/12 flex justify-between items-center">
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                    <div className="flex gap-4 justify-end items-center w-7/12">
                        <FaHeart size={25} color='#fca311' className='cursor-pointer' />
                        <FaCartPlus size={25} color='#fca311' className='cursor-pointer' /> 
                    </div>
                </div>

            </div>
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-18%</small>
                    <img src={FProductFive} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Transcend 1TB Hard Disk</h4>
                    <h5 className='font-bold text-sm'>Ksh 5,499 <span className='font-normal line-through'>Ksh 6,499</span></h5>
                </div>
                <div className='flex mt-4 px-2 w-full justify-between items-center'>
                    <div className="w-4/12 flex justify-between items-center">
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                        <FaStar size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                    <div className="flex gap-4 justify-end items-center w-7/12">
                        <FaHeart size={25} color='#fca311' className='cursor-pointer' />
                        <FaCartPlus size={25} color='#fca311' className='cursor-pointer' /> 
                    </div>
                </div>

            </div>            
        </div>
    </section>
  )
}

export default FeaturedProducts