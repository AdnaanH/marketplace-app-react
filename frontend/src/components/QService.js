import { FaTruck, FaCoins, FaPhone, FaWallet } from 'react-icons/fa'

function QService() {
  return (
    <section className='flex flex-col justify-center items-center px-10 bg-mpYellow h-60'>
        <h1 className='text-center font-extrabold sm:text-4xl text-2xl sm:px-1 px-2 sm:mb-6 mb-4'>
            <span className="bg-clip-text font-poppins text-transparent bg-gradient-to-t from-cyan-400 to-blue-500">
                WHY SHOP FROM US
            </span>
        </h1>
        <div className="flex gap-6 w-full justify-between overflow-visible">
            <div className='w-3/12 flex flex-col gap-4 justify-center items-center h-28 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaTruck size={40} />
                <h1 className='font-semibold font-poppins text-base text-mpGrey'>Fast and Reliable Shipping</h1>
            </div>
            <div className='w-3/12 flex flex-col gap-4 justify-center items-center h-28 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaCoins size={40} />
                <h1 className='font-semibold font-poppins text-base text-mpGrey'>Discounts and Promotions</h1>
            </div>
            <div className='w-3/12 flex flex-col gap-4 justify-center items-center h-28 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaPhone size={36} />
                <h1 className='font-semibold font-poppins text-base text-mpGrey'>Efficient Customer Support</h1>
            </div>
            <div className='w-3/12 flex flex-col gap-4 justify-center items-center h-28 border-2 border-mpGrey p-3 rounded-md shadow-md'>
                <FaWallet size={36} />
                <h1 className='font-semibold font-poppins text-base text-mpGrey'>Secure Transactions</h1>
            </div>
        </div>

    </section>
  )
}

export default QService