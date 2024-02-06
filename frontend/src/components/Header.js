import logo from '../images/logo.png'
import { FaSearch, FaUser, FaInbox, FaCartArrowDown } from 'react-icons/fa'
import { Modal, Button, TextInput, Label, Checkbox, } from 'flowbite-react';
import { useState } from 'react';


function Header() {

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }
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
                    <Button className='bg-transparent border-none outline-none hover:border-none hover:bg-' onClick={() => setOpenModal(true)}><FaUser color='#00a8e8' size={30} className='cursor-pointer' /></Button>
                    <FaInbox color='#00a8e8' size={30} className='cursor-pointer' /> 
                    <FaCartArrowDown color='#00a8e8' size={30} className='cursor-pointer' />
                </div>
            </div>
        </nav>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  )
}

export default Header