import logo from '../images/logo.png'
import { FaSearch, FaUser, FaInbox, FaCartArrowDown } from 'react-icons/fa'

function Header() {
  return (
    <header>
        <nav className='flex w-full justify-between items-center px-8 h-28 bg-black'>
            <img src={logo} alt="" className='w-2/12' />
            <ul className='w-6/12 flex justify-center gap-4 items-center'>
                <li className='text-mpGrey font-bold text-base cursor-pointer font-poppins hover:border-b hover:border-mpBlue transition duration-300'>Laptops</li>
                <li className='text-mpGrey font-bold text-base cursor-pointer font-poppins hover:border-b hover:border-mpBlue transition duration-300'>Smartphones</li>
                <li className='text-mpGrey font-bold text-base cursor-pointer font-poppins hover:border-b hover:border-mpBlue transition duration-300'>Computing</li>
                <li className='text-mpGrey font-bold text-base cursor-pointer font-poppins hover:border-b hover:border-mpBlue transition duration-300'>Gaming</li>
                <li className='text-mpGrey font-bold text-base cursor-pointer font-poppins hover:border-b hover:border-mpBlue transition duration-300'>Entertainment</li>
                            </ul>
            <div className='flex gap-10 justify-end w-4/12'>
                <div className='flex items-center'>
                    <input type="text" placeholder='Search' className='text-base border-none outline-none rounded-lg p-2' />
                    <FaSearch color="#000000" className='-ml-8' />
                </div>
                <div className=' flex gap-4 items-center'>
                    <FaUser color='#00a8e8' size={30} />
                    <FaInbox color='#00a8e8' size={30} /> 
                    <FaCartArrowDown color='#00a8e8' size={30} />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header