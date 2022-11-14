import Image from "next/image";
import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Service({ children, reverseLayout, slides, bg }) {
  const paginationRef = useRef(null);

  return (
    <section className={`section ${bg}`}>
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div
            className={`service-content ${reverseLayout ? "order-2" : null}`}
          >
            {children}
          </div>
          <div
            className={`service-carousel ${reverseLayout ? "order-1" : null}`}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ el: paginationRef.current, clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              init={slides.length > 1 ? false : true}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide}>
                  <Image src={slide} alt="" width={600} height={500} />
                </SwiperSlide>
              ))}
              <div className="pagination" ref={paginationRef}></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
