import ProdOne from '../images/Products/Product101.png'
import ProdTwo from '../images/Products/Product102.png'
import ProdThree from '../images/Products/Product103.png'
import ProdFour from '../images/Products/Product104.png'
import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaHeart, FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa'


function ProductGrid() {
  return (
    <section className='bg-white rounded-md min-h-96 p-4 gap-8 flex justify-between items-start'>
        <div className="w-5/12 flex flex-col gap-6">
            <img src={ProdOne} alt="" className='w-full h-[300px]' />
            <div className="w-full flex justify-start gap-4 items-center">
                <img src={ProdOne} alt="" className='w-3/12 h-16 rounded-md border p-2 border-mpYellow' />
                <img src={ProdTwo} alt="" className='w-3/12 h-16 rounded-md border p-2 border-mpBlue' />
                <img src={ProdThree} alt="" className='w-3/12 h-16 rounded-md border p-2 border-mpBlue' />
                <img src={ProdFour} alt="" className='w-3/12 h-16 rounded-md border p-2 border-mpBlue' />
            </div>
        </div>
        <div className="w-7/12 h-full flex flex-col items-start justify-center">
            <h1 className='text-3xl font-bold font-poppins mb-2'>Samsung Galaxy S24</h1>
            <h3 className='font-semibold font-poppins text-2xl'>Ksh 189,999 <span className='font-normal line-through text-xl'>Ksh 204,999</span></h3>    
            <div className="flex justify-between items-center w-full mt-2">
                <h2 className='text-base font-semibold'>Brand: <span className='font-normal text-mpBlue'>Samsung</span></h2>
                <strong className='text-mpYellow'>In stock</strong>
            </div>
            <hr  className='border-3 border-mpGrey w-full mt-2'/>
            <p className='mt-4 w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis explicabo pariatur quo eos repudiandae neque tempore corporis ipsa rerum ullam adipisci molestias, earum dignissimos? Consectetur error blanditiis labore velit.</p>
            <div className="flex mt-8 justify-between items-center w-full">
                <div className="w-5/12 flex justify-start gap-1 items-center">
                    <FaStar size={25} color='#fca311' className='cursor-pointer' />
                    <FaStar size={25} color='#fca311' className='cursor-pointer' />
                    <FaStar size={25} color='#fca311' className='cursor-pointer' />
                    <FaStar size={25} color='#fca311' className='cursor-pointer' />
                    <FaStar size={25} color='#fca311' className='cursor-pointer' />
                </div>
                <div className="flex gap-3 justify-end w-7/12">
                    <small className='text-sm font-bold'>SHARE PRODUCT</small>
                    <div className="flex gap-2 justify-between itecms-enter">
                        <FaFacebook size={20} color='#fca311' className='cursor-pointer' />
                        <FaInstagram size={20} color='#fca311' className='cursor-pointer' />
                        <FaTwitter size={20} color='#fca311' className='cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center mt-6">
                <div className="w-2/12 p-2 bg-mpBlue rounded-md flex items-center justify-center">
                    <FaHeart size={30} color='#ffffff' className='cursor-pointer' />
                </div>
                <div className="w-3/12 py-3 px-2 bg-mpBlue rounded-md flex justify-between items-center">
                    <FaMinus size={20} color='#ffffff' className='cursor-pointer' />
                    <strong className='text-mpYellow font-bold font-poppins'>1</strong> 
                    <FaPlus size={20} color='#ffffff' className='cursor-pointer' /> 
                </div>
                <div className="w-6/12 p-2 bg-mpBlue rounded-md flex items-center gap-4 justify-center cursor-pointer">
                    <FaCartPlus size={30} color='#ffffff' className='cursor-pointer' />
                    <strong className='font-poppins font-bold text-white text-xl'>ADD TO CART</strong>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductGrid