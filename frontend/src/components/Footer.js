import logo from '../images/logo-alt.png'
import { BsFacebook, BsInstagram, BsTwitterX, BsTiktok, BsYoutube, BsPinterest } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='min-h-60 flex gap-10 justify-between items-center bg-gradient-to-t from-cyan-400 to-blue-500 p-10'>
          <div className="flex flex-col gap-4 justify-center items-start w-3/12">
              <img src={logo} alt="" className='w-full' />
              <div className="flex justify-between items-center w-full">
                <BsFacebook size={22} color='#fca311' />
                <BsInstagram size={22} color='#fca311' />
                <BsTwitterX size={22} color='#fca311' />
                <BsYoutube size={22} color='#fca311' />
                <BsTiktok size={22} color='#fca311' />
                <BsPinterest size={22} color='#fca311' />
              </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start w-2/12 ">
              <ul className='w-full'>
                <li className='font-inter font-bold text-base text-white cursor-pointer'>Help and Contact</li>
                <li className='font-inter font-bold text-base text-white cursor-pointer'>Returns and Refunds</li>
                <li className='font-inter font-bold text-base text-white cursor-pointer'>Shipping</li>
                <li className='font-inter font-bold text-base text-white cursor-pointer'>Blog</li>
              </ul>
          </div>
          <div className="flex flex-col justify-center items-end gap-4 w-6/12">
            <div className="flex gap-4 w-full items-center justify-end">
              <input type="text" placeholder='Updates in your mail' className='p-2 w-8/12 border-2 placeholder:text-mpDBlue border-mpYellow text-white text-base font-medium bg-transparent rounded-2xl outline-none' />
              <button className='p-2 bg-mpYellow hover:bg-mpBlue cursor-pointer border-none outline-none text-white uppercase text-base font-extrabold rounded-2xl'>SUBSCRIBE</button>
            </div>
            <p className='font-inter font-bold text-sm text-white'>Copyright © 2024 Marketplaced.</p>
          </div>
    </footer>
  )
}

export default Footer