import { FaTruck, FaUndo } from 'react-icons/fa'

function CartSideBar() {
  return (
    <section className='w-full min-h-96 bg-white p-6 flex flex-col'>
        <h1 className='uppercase text-mpBlue font-poppins text-2xl'>Cart Summarry</h1>
        <hr className='w-full bg-mpYellow'/>
        <div className="flex justify-between items-center w-full  mt-4">
            <h2 className='w-full text-xl text-black font-bold'>Subtotal</h2>
            <h3 className='text-end text-base font-normal w-full'>Ksh 300,000</h3>
        </div>
        <h3 className='text-base font-normal w-full mt-2'>This does not include delivery charges. Confirm delivery charges on checkout.</h3>
        <button className='bg-mpBlue uppercase w-full mt-4 py-2 rounded-md font-bold text-base font-poppins'>CHECKOUT</button>
        <div className="mt-4 w-full flex justify-start items-start gap-4">
                <FaTruck size={30} color="#00a8e8" />
                <div className="w-full flex flex-col">
                    <strong className="text-sm font-bold font-poppins">Fast Door Delivery</strong>
                    <p className="text-sm text-black font-normal font-poppins">Get your product in <span>3</span> hours at your door-step without a hassle.</p>
                </div>
            </div>
            <div className="mt-4 w-full flex justify-start items-start gap-4">
                <FaUndo size={30} color="#00a8e8" />
                <div className="w-full flex flex-col">
                    <strong className="text-sm font-bold font-poppins">Easy returns</strong>
                    <p className="text-sm text-black font-normal font-poppins">Easily return the product incase of defects or reasonable problems within 7 days.</p>
                </div>
            </div>
    </section>
  )
}

export default CartSideBar