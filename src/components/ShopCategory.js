import { Swiper, SwiperSlide } from 'swiper/react';

function ShopCategory() {
  return (
    <section className='h-screen w-full flex flex-col px-24 bg-mpGrey py-16'>
        <h1 className='text-center font-extrabold sm:text-4xl text-2xl sm:px-1 px-2 sm:mb-12 mb-4'>
            <span className="bg-clip-text font-poppins text-transparent bg-gradient-to-t from-cyan-400 to-blue-500">
                SHOP BY CATEGORY
            </span>
        </h1>
        <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}

export default ShopCategory