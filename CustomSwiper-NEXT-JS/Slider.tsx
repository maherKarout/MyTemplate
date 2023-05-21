import React from "react";
import styles from "./Slider.module.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

type Swiperprops = {
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  pagination?: boolean;
  scrollbar?: boolean;
  onSwiper?: Function;
  breakpoins?: any;
};
type props = {
  arraySlider: any[];
  propsSwiper: Swiperprops;
};

function Slider({ arraySlider, propsSwiper }: props) {
  return (
    <div className={styles["my-swiper"]}>
      <Swiper
        spaceBetween={propsSwiper.spaceBetween}
        pagination={{ enabled: propsSwiper.pagination, clickable: true }}
        slidesPerView={propsSwiper.slidesPerView}
        scrollbar={propsSwiper.scrollbar}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={propsSwiper.breakpoins}
        className="swiper"
      >
        {arraySlider?.map((swiper: any, index: number) => {
          return (
            <SwiperSlide className={styles["swiper-slide"]}>
              {swiper}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="swiper-button-next"></button>
      <button className="swiper-button-prev"></button>
    </div>
  );
}

export default Slider;
