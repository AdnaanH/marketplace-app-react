import blogOne from '../images/blog-one.jpg'
import blogTwo from '../images/blog-two.jpg'
import blogThree from '../images/blog-three.jpg'

function FeaturedBlogs() {
  return (
    <section className='min-h-96 w-full flex flex-col bg-mpGrey py-16'>
        <h1 className='text-start cursor-pointer hover:bg-black hover:text-white text-black font-poppins uppercase rounded-tr-2xl rounded-br-md font-extrabold sm:text-3xl text-2xl px-4 py-2 sm:mb-6 mb-4 bg-mpYellow w-max p-2'>
           FEATURED BLOGS
        </h1>
        <div className="w-full flex gap-4 items-center justify-between pt-6 px-10">
            <div className="w-4/12 flex flex-col justify-start items-start rounded-md border-2 bg-gradient-to-t from-cyan-400 to-blue-500 shadow-md border-mpBlue h-[380px]">
                <div className="h-2/4 mb-4 w-full">  
                    <img src={blogOne} alt="" className='h-full w-full' />
                </div>
                <div className=' h-2/4 px-2'>
                    <h4 className='text-black cursor-pointer font-bold text-xl uppercase font-poppins'>Why You should pick the New Galaxy S24 Ultra</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam repellendus ad assumenda consectetur? Nostrum, reiciendis.</p>
                    <h5 className='font-bold text-mpGrey text-base'>By A. Hamisi - <span>Gadgets</span></h5>
                </div>
           </div> 
            <div className="w-4/12 flex flex-col justify-start items-start rounded-md border-2 bg-gradient-to-t from-cyan-400 to-blue-500 shadow-md border-mpBlue h-[380px]">
                <div className="h-2/4 mb-4 w-full">  
                    <img src={blogTwo} alt="" className='h-full w-full'/>
                </div>
                <div className=' h-2/4 px-2'>
                    <h4 className='text-black cursor-pointer font-bold text-xl uppercase font-poppins'>Why You should use a microphone for your vlogs</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam repellendus ad assumenda consectetur? Nostrum, reiciendis.</p>
                    <h5 className='font-bold text-mpGrey text-base'>By A. Hamisi - <span>Technology</span></h5>
                </div>
           </div> 
            <div className="w-4/12 flex flex-col justify-start items-start rounded-md border-2 bg-gradient-to-t from-cyan-400 to-blue-500 shadow-md border-mpBlue h-[380px]">
                <div className="h-2/4 mb-4 w-full">  
                    <img src={blogThree} alt="" className='h-full w-full' />
                </div>
                <div className=' h-2/4 px-2'>
                    <h4 className='text-black cursor-pointer font-bold text-xl uppercase font-poppins'>Why You should pick the New x360 laptops in the market</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam repellendus ad assumenda consectetur? Nostrum, reiciendis.</p>
                    <h5 className='font-bold text-mpGrey text-base'>By A. Hamisi - <span>Laptops</span></h5>
                </div>
           </div>            
        </div>        
    </section>
  )
}

export default FeaturedBlogs