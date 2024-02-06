import { FaBuilding, FaTruck, FaUndo, FaShieldVirus, FaUserCircle} from "react-icons/fa"
import RelProd1 from '../images/Products/Product201.png'
import RelProd2 from '../images/Products/Product1001.png'
import RelProd3 from '../images/Products/Product701.png'

function ProdSideBar() {
  return (
    <aside className='flex flex-col gap-10 w-full min-h-screen'>
        <div className='flex flex-col w-full min-h-96 bg-white rounded-md p-4'>
            <h4 className='text-black font-bold text-xl font-roboto uppercase'>DELIVERY & RETURNS</h4>
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
            <div className="mt-4 w-full flex justify-start items-start gap-4">
                <FaBuilding size={30} color="#00a8e8" />
                <div className="w-full flex flex-col">
                    <strong className="text-sm font-bold font-poppins">Reliable Pick Up</strong>
                    <p className="text-sm text-black font-normal font-poppins">Pick up your product in <span>30</span> minutes at your nearest Pick Up station.</p>
                </div>
            </div>
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
                    <p className="text-sm text-black font-normal font-poppins">Easily return the product incase of issues within 7 days.</p>
                </div>
            </div>
            <div className="mt-4 w-full flex justify-start items-center gap-4">
                <FaShieldVirus size={30} color="#00a8e8" />
                <div className="w-full flex flex-col">
                    <strong className="text-sm font-bold font-poppins"><span>12 </span> months warranty</strong></div>
            </div>
        </div>
        <div className='flex flex-col w-full min-h-96 bg-white rounded-md p-4'>
            <h4 className='text-black font-bold text-xl font-roboto uppercase'>Other Products</h4>
            <hr  className='border border-mpBlue'/>
            <div className="flex gap-2 mt-6 justify-between items-center">
                <img src={RelProd1} alt="" className="w-[80px] h-[80px] shadow-md rounded-md"/>
                <div className="flex w-full flex-col gap-1">
                    <strong className="font-medium text-base cursor-pointer font-poppins">Wireless Headphones</strong>
                    <small className="font-medium text-mpBlue text-sm cursor-pointer font-poppins">Ksh 9,299</small>
                </div>
            </div>
            <div className="flex gap-2 mt-6 justify-between items-center">
                <img src={RelProd2} alt="" className="w-[80px] h-[80px] shadow-md rounded-md"/>
                <div className="flex w-full flex-col gap-1">
                    <strong className="font-medium text-base cursor-pointer font-poppins">Play Station 5 Slim</strong>
                    <small className="font-medium text-mpBlue text-sm cursor-pointer font-poppins">Ksh 89,499</small>
                </div>
            </div>
            <div className="flex gap-2 mt-6 justify-between items-center">
                <img src={RelProd3} alt="" className="w-[80px] h-[80px] shadow-md rounded-md"/>
                <div className="flex w-full flex-col gap-1">
                    <strong className="font-medium text-base cursor-pointer font-poppins">Wireless Earpods Pro</strong>
                    <small className="font-medium text-mpBlue text-sm cursor-pointer font-poppins">Ksh 4,999</small>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-full min-h-96 bg-white rounded-md p-4'>
            <h4 className='text-black font-bold text-xl font-roboto uppercase'>Customer Feedback</h4>
            <hr  className='border border-mpBlue'/>
            <div className="flex gap-2 mt-6 justify-between items-start">
                <div className=" flex justify-center items-center w-[25px] h-[25px] rounded-full border-none">
                    <FaUserCircle color="#00a8e8" size={50} />   
                </div>
                <div className="flex w-full flex-col gap-0">
                    <strong className="font-medium text-mpBlue text-sm cursor-pointer font-roboto">John Doe</strong>
                    <small className="font-medium text-sm cursor-pointer font-roboto">Amazing gadget</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="flex gap-2 mt-3 justify-between items-start">
                <div className=" flex justify-center items-center w-[25px] h-[25px] rounded-full border-none">
                    <FaUserCircle color="#00a8e8" size={50} />   
                </div>
                <div className="flex w-full flex-col gap-0">
                    <strong className="font-medium text-mpBlue text-sm cursor-pointer font-roboto">John Doe</strong>
                    <small className="font-medium text-sm cursor-pointer font-roboto">Amazing gadget</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur alias earum ad debitis dolor.</p>
                </div>
            </div>
            <div className="flex gap-2 mt-3 justify-between items-start">
                <div className=" flex justify-center items-center w-[25px] h-[25px] rounded-full border-none">
                    <FaUserCircle color="#00a8e8" size={50} />   
                </div>
                <div className="flex w-full flex-col gap-0">
                    <strong className="font-medium text-mpBlue text-sm cursor-pointer font-roboto">John Doe</strong>
                    <small className="font-medium text-sm cursor-pointer font-roboto">Amazing gadget</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="flex gap-2 mt-3 justify-between items-start">
                <div className=" flex justify-center items-center w-[25px] h-[25px] rounded-full border-none">
                    <FaUserCircle color="#00a8e8" size={50} />   
                </div>
                <div className="flex w-full flex-col gap-0">
                    <strong className="font-medium text-mpBlue text-sm cursor-pointer font-roboto">John Doe</strong>
                    <small className="font-medium text-sm cursor-pointer font-roboto">Amazing gadget</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <button className="w-full bg-transparent text-mpBlue font-medium font-poppins cursor-pointer text-sm mt-4"><span>33 </span> more feedback</button>
        </div>
    </aside>
  )
}

export default ProdSideBar