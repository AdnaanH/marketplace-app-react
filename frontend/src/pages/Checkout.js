import Prod1 from '../images/Products/Product301.png'
import Prod2 from '../images/Products/Product503.png'
import Prod3 from '../images/Products/Product2301.png'
import { FaUndo } from "react-icons/fa"

function Checkout() {
  return (
    <section className='flex flex-col justify-start items-start sm:px-12 px-4 py-10 bg-mpGrey min-h-screen w-full'>          
        <h1 className='text-mpBlue font-poppins font-bold text-2xl'>Complete your order</h1>
        <div className='flex justify-between items-start gap-10 py-10 bg-mpGrey min-h-screen w-full'>
            <div className="w-8/12 min-h-96 bg-white rounded-md mt-6 p-6">
              <h2 className='text-xl font-bold font-poppins '>Product details</h2>
              <div className="flex w-full flex-col p-4 mt-4">
                <div className="flex mt-2 border-b border-mpYellow justify-start p-4 gap-4 items-start">
                    <div className="w-4/12 flex items-center justify-center">
                        <img src={Prod1} alt="" className='w-[200px] h-[200px]'/>
                    </div>
                    <div className="w-full flex flex-col justify-start gap-2">
                        <h3 className='text-mpBlue font-bold font-poppins text-xl w-full text-end'>Wireless Dualshock PS 4 Controllers</h3>
                        <div className="w-full flex justify-end items-center gap-10">
                            <p className='text-black text-sm font-poppins font-bold'>Units: <span className='font-semibold'>3</span></p>
                            <p className='text-black text-sm font-poppins font-bold'>Price: <span className='font-semibold'>100,000</span></p>
                        </div>
                        <h4 className='font-bold text-black text-base w-full text-end'>Total: <span className='font-semibold'>Ksh 300,000</span></h4>
                    </div>                  
                </div>
                <div className="flex mt-2 border-b border-mpYellow justify-start p-4 gap-4 items-start">
                    <div className="w-4/12 flex items-center justify-center">
                        <img src={Prod2} alt="" className='w-[200px] h-[200px]'/>
                    </div>
                    <div className="w-full flex flex-col justify-start gap-2">
                        <h3 className='text-mpBlue font-poppins font-bold text-xl w-full text-end'>Wireless Vlogging Microphone 2.0</h3>
                        <div className="w-full flex justify-end items-center gap-10">
                            <p className='text-black text-sm font-poppins font-bold'>Units: <span className='font-semibold'>3</span></p>
                            <p className='text-black text-sm font-poppins font-bold'>Price: <span className='font-semibold'>100,000</span></p>
                        </div>
                        <h4 className='font-bold text-black text-base w-full text-end'>Total: <span className='font-semibold'>Ksh 300,000</span></h4>
                    </div>                  
                </div>
                <div className="flex mt-2 justify-start p-4 gap-4 items-start">
                    <div className="w-4/12 flex items-center justify-center">
                        <img src={Prod3} alt="" className='w-[200px] h-[200px]'/>
                    </div>
                    <div className="w-full flex flex-col justify-start gap-2">
                        <h3 className='text-mpBlue font-bold font-poppins text-xl w-full text-end'>Wireless Smartwatch 2023</h3>
                        <div className="w-full flex justify-end items-center gap-10">
                            <p className='text-black text-sm font-poppins font-bold'>Units: <span className='font-semibold'>3</span></p>
                            <p className='text-black text-sm font-poppins font-bold'>Price: <span className='font-semibold'>100,000</span></p>
                        </div>
                        <h4 className='font-bold text-black text-base w-full text-end'>Total: <span className='font-semibold'>Ksh 300,000</span></h4>
                    </div>                  
                </div>
              </div>
            </div>
            <div className="w-4/12 min-h-96 bg-white rounded-md mt-6 p-6">
                <div className='flex flex-col w-full min-h-96 bg-white rounded-md p-4'>
                    <h4 className='uppercase text-mpBlue font-poppins text-xl'>CHOOSE DELIVERY OPTION</h4>
                    <hr  className='border border-mpBlue'/>
                    <h6 className='text-black text-base font-semibold mt-3'>Choose location and Pick up point</h6>
                    <select name="" id="" className='border-2 outline-none rounded-md border-mpBlue mt-2 text-base font-inter font-semibold cursor-pointer'>
                        <option value="">Nairobi</option>
                        <option value="">Kakamega</option>
                        <option value="">Kisumu</option>
                        <option value="">Nakuru</option>
                        <option value="">Mombasa</option>
                    </select>
                    <select name="" id="" className='border-2 outline-none focus:border-mpBlue rounded-md border-mpBlue mt-3 text-base font-inter font-semibold cursor-pointer'>
                        <option value="">CBD</option>
                        <option value="">Ngara</option>
                        <option value="">Eastleaigh</option>
                        <option value="">Westlands</option>
                        <option value="">Hurlingham</option>
                    </select>     
                    <small className='text-mpYellow text-xs font-poppins'>Leave blank for door-deliveries</small>       
                    <h6 className='text-black text-base font-semibold mt-5'>Enter Address details for door-delivery</h6>
                    <textarea type="text" className='border-2 outline-none focus:border-mpBlue rounded-md border-mpBlue mt-3 text-base font-inter font-semibold cursor-pointer'>
                    </textarea>
                    <div className="w-full flex justify-between items-center mt-4">
                      <p className='text-black font-2xl font-bold font-poppins'>Subtotal:</p>
                      <span className='text-black font-2xl font-semibold font-poppins'>Ksh 900,000</span>
                    </div>
                    <div className="w-full flex justify-between items-center mt-1">
                      <p className='text-black font-2xl font-bold font-poppins'>Shipping Fees:</p>
                      <span className='text-black font-2xl font-semibold font-poppins'>Ksh 3,000</span>
                    </div>
                    <div className="w-full flex justify-between items-center mt-1">
                      <p className='text-mpBlue font-3xl font-bold font-poppins'>Total:</p>
                      <span className='text-mpBlue font-3xl font-semibold font-poppins'>Ksh 903,000</span>
                    </div>
                    <button className='bg-mpBlue w-full text-white font-poppins font-bold uppercase mt-4 py-2 rounded-md'>submit order</button>
                    <div className="mt-8 w-full flex justify-start items-start gap-4">
                        <FaUndo size={30} color="#00a8e8" />
                        <div className="w-full flex flex-col">
                            <strong className="text-sm font-bold font-poppins">Easy returns</strong>
                            <p className="text-sm text-black font-normal font-poppins">Easily make returns for products incase of defects or acceptable issues within 7 days.</p>
                        </div>
                    </div>
                    <small className='text-mpYellow font-poppins font-bold text-sm text-center mt-8'>Terms & Conditions apply</small>
                </div>
            </div>
        </div>
          
    </section>
  )
}

export default Checkout