import Prod1 from '../images/Products/Product301.png'
import Prod2 from '../images/Products/Product503.png'
import Prod3 from '../images/Products/Product2301.png'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa' 
import CartSideBar from '../components/CartSideBar'



function Cart() {
  return (
    <section className='flex justify-between items-start px-16 py-10 bg-mpGrey min-h-screen w-full'>
        <div className='w-7/12 flex flex-col'>
          <h1 className='text-mpBlue font-poppins font-bold text-2xl'>Cart (<span>3</span>)</h1>
          <div className="flex w-full flex-col p-4 mt-4">
            <div className="flex bg-white rounded-md mt-2 min- justify-start p-4 gap-4 items-start">
                <div className="w-2/12 flex items-center justify-center">
                    <img src={Prod1} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className="w-8/12 flex flex-col justify-start gap-6">
                    <h3 className='text-black font-bold text-xl w-full text-end'>Wireless Dualshock PS 4 Controllers</h3>
                   <div className="w-full flex justify-end items-center gap-8">
                      <button className='bg-mpYellow text-base font-bold uppercase flex items-center justify-center  gap-2 w-4/12 py-2 rounded-md'><FaTrash /> REMOVE</button>
                      <div className="bg-mpYellow text-base font-bold uppercase flex items-center justify-between  gap-2 w-4/12 py-2 px-4 rounded-md">
                          <FaMinus className='cursor-pointer' />
                          <strong className='text-white font-bold font-poppins'>1</strong> 
                          <FaPlus className='cursor-pointer' /> 
                      </div>
                   </div>
                </div>
                <div className="flex flex-col w-2/12 justify-end items-center">
                    <h4 className='text-black font-semibold text-base w-full text-end'>Ksh 100,000</h4>
                    <h4 className='text-mpBlue font-medium text-base w-full line-through text-end'>Ksh 100,000</h4>
                </div>
            </div>
            <div className="flex bg-white rounded-md mt-2 min- justify-start p-4 gap-4 items-start">
                <div className="w-2/12 flex items-center justify-center">
                    <img src={Prod2} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className="w-8/12 flex flex-col justify-start gap-6">
                    <h3 className='text-black font-bold text-xl w-full text-end'>Wireless Vlogging Microphone 2.0</h3>
                   <div className="w-full flex justify-end items-center gap-8">
                      <button className='bg-mpYellow text-base font-bold uppercase flex items-center justify-center  gap-2 w-4/12 py-2 rounded-md'><FaTrash /> REMOVE</button>
                      <div className="bg-mpYellow text-base font-bold uppercase flex items-center justify-between  gap-2 w-4/12 py-2 px-4 rounded-md">
                          <FaMinus className='cursor-pointer' />
                          <strong className='text-white font-bold font-poppins'>1</strong> 
                          <FaPlus className='cursor-pointer' /> 
                      </div>
                   </div>
                </div>
                <div className="flex flex-col w-2/12 justify-end items-center">
                    <h4 className='text-black font-semibold text-base w-full text-end'>Ksh 100,000</h4>
                    <h4 className='text-mpBlue font-medium text-base w-full line-through text-end'>Ksh 100,000</h4>
                </div>
            </div>
            <div className="flex bg-white rounded-md mt-2 min- justify-start p-4 gap-4 items-start">
                <div className="w-2/12 flex items-center justify-center">
                    <img src={Prod3} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className="w-8/12 flex flex-col justify-start gap-6">
                    <h3 className='text-black font-bold text-xl w-full text-end'>Wireless Smartwatch 2023</h3>
                   <div className="w-full flex justify-end items-center gap-8">
                      <button className='bg-mpYellow text-base font-bold uppercase flex items-center justify-center  gap-2 w-4/12 py-2 rounded-md'><FaTrash /> REMOVE</button>
                      <div className="bg-mpYellow text-base font-bold uppercase flex items-center justify-between  gap-2 w-4/12 py-2 px-4 rounded-md">
                          <FaMinus className='cursor-pointer' />
                          <strong className='text-white font-bold font-poppins'>1</strong> 
                          <FaPlus className='cursor-pointer' /> 
                      </div>
                   </div>
                </div>
                <div className="flex flex-col w-2/12 justify-end items-center">
                    <h4 className='text-black font-semibold text-base w-full text-end'>Ksh 100,000</h4>
                    <h4 className='text-mpBlue font-medium text-base w-full line-through text-end'>Ksh 100,000</h4>
                </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <CartSideBar />
        </div>
    </section>
  )
}

export default Cart