import NProductOne from '../images/Products/Product402.png'
import NProductTwo from '../images/Products/Product401.png'
import NProductThree from '../images/Products/Product701.png'
import NProductFour from '../images/Products/Product2101.png'
import NProductFive from '../images/Products/Product2401.png'
import { FaStar, FaCartPlus, FaHeart } from 'react-icons/fa'

function NewProducts() {
  return (
    <section className='h-screen w-full flex flex-col bg-mpGrey py-16'>
        <h1 className='text-start cursor-pointer hover:bg-black hover:text-white text-black font-poppins uppercase rounded-tr-2xl rounded-br-md font-extrabold sm:text-3xl text-2xl px-4 py-2 sm:mb-6 mb-4 bg-mpYellow w-max p-2'>
           New Products
        </h1>
        <div className="w-full flex gap-4 items-center justify-between pt-6 px-10">
            <div className="relative w-3/12 flex flex-col justify-start items-start rounded-md border-2 shadow-md border-mpBlue h-[400px]">
                <div className="relative p-1 h-3/4 w-full">
                    <small className='absolute top-2 right-2 py-1 px-2 text-sm bg-mpYellow rounded-md text-black font-extrabold font-inter'>-40%</small>
                    <img src={NProductOne} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='cursor-pointer text-black font-bold text-base font-roboto'>Wireless Mouse</h4>
                    <h5 className='font-bold text-sm'>Ksh 1,299 <span className='font-normal line-through'>Ksh 2,999</span></h5>
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
                    <img src={NProductTwo} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Wireless Keyboard</h4>
                    <h5 className='font-bold text-sm'>Ksh 6,999 <span className='font-normal line-through'>Ksh 8,999</span></h5>
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
                    <img src={NProductThree} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Wireless Earpods</h4>
                    <h5 className='font-bold text-sm'>Ksh 12,999 <span className='font-normal line-through'>Ksh 18,999</span></h5>
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
                    <img src={NProductFour} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Core i5 x360 Laptop</h4>
                    <h5 className='font-bold text-sm'>Ksh 59,499 <span className='font-normal line-through'>Ksh 63,999</span></h5>
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
                    <img src={NProductFive} alt="" className="w-full h-[97%] rounded-md" />                    
                </div>
                <div className='px-2 mt-2'>
                    <h4 className='text-black cursor-pointer font-bold text-base font-roboto'>Android 12V USB Adapter</h4>
                    <h5 className='font-bold text-sm'>Ksh 999 <span className='font-normal line-through'>Ksh 1,499</span></h5>
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

export default NewProducts