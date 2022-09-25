import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Swipers = () => {

  return (
    <>
      <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-info">
            <img src="img/S1_.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-info">
            <img src="img/S2_.jpg" alt="" />
        </div>
        </SwiperSlide>
    </Swiper>
  </>

  )
}

export default Swipers