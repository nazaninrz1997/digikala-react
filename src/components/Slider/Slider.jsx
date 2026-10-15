import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import image59 from "../../assets/images/image59.jpg";
import image60 from "../../assets/images/image60.jpg";
import image61 from "../../assets/images/image61.jpg";
import image62 from "../../assets/images/image62.jpg";
import image63 from "../../assets/images/image63.jpg";
import icon17 from "../../assets/icons/icon17.png";
import icon18 from "../../assets/icons/icon18.png";

const Slider = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="group relative w-full">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={1}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <img
            src={image59}
            alt="slide 1"
            className="w-full h-[45vw] sm:h-[40vw] md:h-[30vw] lg:h-100 object-fill rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image60}
            alt="slide 2"
            className="w-full h-[45vw] sm:h-[40vw] md:h-[30vw] lg:h-100 object-fill rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image61}
            alt="slide 3"
            className="w-full h-[45vw] sm:h-[40vw] md:h-[30vw] lg:h-100 object-fill rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image62}
            alt="slide 4"
            className="w-full h-[45vw] sm:h-[40vw] md:h-[30vw] lg:h-100 object-fill rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={image63}
            alt="slide 5"
            className="w-full h-[45vw] sm:h-[40vw] md:h-[30vw] lg:h-100 object-fill rounded-lg"
          />
        </SwiperSlide>
      </Swiper>

      <button
        onClick={handlePrev}
        className="absolute right-2 sm:right-3 top-1/2 z-20 flex h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-100 lg:opacity-0 transition-opacity duration-200 lg:group-hover:opacity-100 cursor-pointer hover:bg-[#f0efed]"
      >
        <img src={icon17} alt="right arrow" className="w-3 sm:w-4" />
      </button>

      <button
        onClick={handleNext}
        className="absolute left-2 sm:left-3 top-1/2 z-20 flex h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-100 lg:opacity-0 transition-opacity duration-200 lg:group-hover:opacity-100 cursor-pointer hover:bg-[#f0efed]"
      >
        <img src={icon18} alt="left arrow" className="w-3 sm:w-4" />
      </button>
    </div>
  );
};

export default Slider;
