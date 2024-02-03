import CarouselCat from './CarouselCat'
import CarOne from '../images/Products/Product101.png'
import CarTwo from '../images/Products/Product2101.png'
import CarThree from '../images/Products/Product301.png'
import CarFour from '../images/Products/Product1101.png'
import CarFive from'../images/Products/Product802.png'

function ShopCategory() {

  const slides = [
    {
      image: CarOne,  // Remove the curly braces around CarOne
      urlGroup: 'Smartphones'  
    },
    {
      image: CarTwo,
      urlGroup: 'Laptops'
    },
    {
      image: CarThree,
      urlGroup: 'Gaming'
    },
    {
      image: CarFour,
      urlGroup: 'Entertainment'
    },
    {
      image: CarFive,
      urlGroup: 'Computing'
    },
    {
      image: CarFour,
      urlGroup: 'Entertainment'
    },
    {
      image: CarFive,
      urlGroup: 'Computing'
    },
  ];
  

  return (
    <section className='h-screen w-full flex flex-col px-10 bg-mpGrey py-16'>
        <h1 className='text-center font-extrabold sm:text-4xl text-2xl sm:px-1 px-2 sm:mb-6 mb-4'>
            <span className="bg-clip-text font-poppins text-transparent bg-gradient-to-t from-cyan-400 to-blue-500">
                SHOP BY CATEGORY
            </span>
        </h1>
        <div className="w-full  pt-11">
            <CarouselCat slides={slides} />
        </div>
    </section>
  )
}

export default ShopCategory