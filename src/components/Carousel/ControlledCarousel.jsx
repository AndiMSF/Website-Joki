import { useState } from "react";
import "./carousel.css";
import valorant from "../../images/valorant.png";
import ml from "../../images/ml.png";
import genshin from "../../images/genshin.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const ControlledCarousel = () => {
  return (
    <div className="carousel__container">
      <Swiper
        style={{
          "--swiper-pagination-color": "#7749F8",
          "--swiper-pagination-bullet-inactive-color": "#FFFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
        }}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,  
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide>
          <img src={valorant} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ml} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={genshin} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={valorant} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ControlledCarousel;
