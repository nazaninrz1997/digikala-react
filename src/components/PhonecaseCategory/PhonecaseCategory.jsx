import icon14 from "../../assets/icons/icon14.svg";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon18 from "../../assets/icons/icon18.png";
import image64 from "../../assets/images/image64.png";
import image65 from "../../assets/images/image65.png";
import image66 from "../../assets/images/image66.png";
import image67 from "../../assets/images/image67.png";
import image68 from "../../assets/images/image68.png";
import image69 from "../../assets/images/image69.png";
import image70 from "../../assets/images/image70.png";
import image71 from "../../assets/images/image71.png";
import image72 from "../../assets/images/image72.png";
import image73 from "../../assets/images/image73.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PhonecaseCategory = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="w-326 h-96.25 mx-auto border border-[#E2E2E4] rounded-2xl max-xl:w-full! max-xl:h-auto! max-xl:px-3 max-xl:pb-4 max-xl:overflow-hidden">
        <div className="flex items-center justify-between p-5 max-xl:flex-wrap max-xl:gap-3 max-xl:p-3">
          <div>
            <h1 className="text-[20px] font-bold">کیف و کاور گوشی</h1>
            <p className="text-[15px] text-[#7e868c]">بر اساس سلیقه شما</p>
          </div>
          <div>
            <button className="bg-[#f0f0f0] rounded-md w-27.5 h-9.5 flex items-center justify-center cursor-pointer">
              <h1 className="text-[12px]">مشاهده همه</h1>

              <img src={icon15} alt="left arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mr-5 overflow-hidden relative max-xl:mr-0 max-xl:w-full max-xl:min-w-0">
          {!isEnd && (
            <button
              onClick={handleNext}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer max-xl:w-10 max-xl:h-10 max-sm:w-8 max-sm:h-8"
            >
              <img
                src={icon15}
                alt="left arrow"
                className="text-[12px] font-bold text-black max-sm:w-4 max-sm:h-4"
              />
            </button>
          )}

          <Swiper
            modules={[Navigation]}
            className="max-xl:w-full max-xl:min-w-0"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            spaceBetween={2}
            slidesPerView={7.5}
            breakpoints={{
              0: {
                slidesPerView: "auto",
              },
              1280: {
                slidesPerView: 7.5,
              },
            }}
          >
            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image64} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور مدل سولید solid مناسب برای گوشی موبایل سامسونگ Galaxy A52
                  / A52S
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۹۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image65} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور مدل A12-SILIC مناسب برای گوشی موبایل سامسونگ Galaxy A12
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۱۳۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image66} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور سامورایی مدل PURE مناسب برای گوشی موبایل اپل iPhone 13
                  Pro Max
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۹۳٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-bold">۷۸۵,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image67} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone 13 pro max
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۱۰۵,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image68} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور موفی مدل MGSS مناسب برای گوشی موبایل اپل iPhone 17
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۴۲۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image69} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور مدل سیلیکونی پاک کنی مناسب برای گوشی موبایل اپل IPHONE
                  12/12 PRO
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۵۵,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image70} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور جی کی کی مدل Viny مناسب برای گوشی موبایل سامسونگ Galaxy
                  S24 Ultra
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۱۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image71} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور گاردتک اساک فضانورد مدل astronaut مناسب برای گوشی موبایل
                  سامسونگ Galaxy S20 FE
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۴۵۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image72} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور قاب شهر مدل MGSAFE مناسب برای گوشی موبایل اپل iPhone 17
                  Pro Max
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۹۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image73} alt="phonecase" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاور مدل سیلیکونی پاک کنی مناسب برای گوشی موبایل اپل IPHONE 17
                  PRO MAX
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۳۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 cursor-pointer border-0 mx-auto flex flex-col items-center justify-center">
                <img
                  src={icon18}
                  alt="left arrow"
                  className="border-2 rounded-full p-2 mb-2.5"
                />

                <h1 className="text-black text-[14px] text-center">
                  مشاهده همه
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>

          {!isBeginning && (
            <button
              onClick={handlePrev}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer max-xl:w-10 max-xl:h-10 max-sm:w-8 max-sm:h-8"
            >
              <img
                src={icon16}
                alt="right arrow"
                className="text-[12px] font-bold text-black max-sm:w-4 max-sm:h-4"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PhonecaseCategory;
