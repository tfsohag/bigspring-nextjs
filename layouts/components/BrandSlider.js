import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const brands = ["facebook", "airbnb", "toshiba", "microsoft"];

function BrandCarousel() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {brands.map((brand) => (
        <SwiperSlide key={brand}>
          <Image
            src={`/images/${brand}.webp`}
            width={100}
            height={40}
            object-fit="contain"
            alt={brand}
          />
        </SwiperSlide>
      ))}
      {brands.map((brand) => (
        <SwiperSlide key={brand}>
          <Image
            src={`/images/${brand}.webp`}
            width={100}
            height={40}
            object-fit="contain"
            alt={brand}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BrandCarousel;
