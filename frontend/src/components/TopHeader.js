import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'


function TopHeader() {
  return (
    <header className='sm:flex hidden w-full justify-between items-center bg-mpYellow px-8 h-10'>
      <ul className='flex justify-start w-8/12 gap-4'>
        <li className='text-mpGrey font-medium font-poppins cursor-pointer text-sm'>Help & Contact</li>
        <li className='text-mpGrey font-medium font-poppins cursor-pointer text-sm'>Shipping</li>
        <li className='text-mpGrey font-medium font-poppins cursor-pointer text-sm'>Returns & Refunds</li>
        <li className='text-mpGrey font-medium font-poppins cursor-pointer text-sm'>Blog</li>
      </ul>
      <div className='flex w-4/12 items-center justify-end gap-3'>
          <FaFacebook size={20} color="#f1faee" className='cursor-pointer' />
          <FaInstagram size={20} color="#f1faee" className='cursor-pointer' />
          <FaTiktok size={20} color="#f1faee" className='cursor-pointer' />
          <strong className='text-mpGrey cursor-pointer ml-4 text-sm'>KSH <span>1000</span></strong>
      </div>
    </header>
  )
}

export default TopHeader