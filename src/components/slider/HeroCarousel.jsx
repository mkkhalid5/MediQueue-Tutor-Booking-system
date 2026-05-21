'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import BannerOne from '../banner/BannerOne';
import BannerTwo from '../banner/BannerTwo';
import BannerThree from '../banner/BannerThree';


const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-3xl "
      
    >
      <SwiperSlide>
        <BannerOne />
      </SwiperSlide>

      <SwiperSlide>
        <BannerTwo />
      </SwiperSlide>

      <SwiperSlide>
        <BannerThree />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;