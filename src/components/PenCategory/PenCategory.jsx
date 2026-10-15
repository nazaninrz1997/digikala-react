import icon14 from "../../assets/icons/icon14.svg";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon18 from "../../assets/icons/icon18.png";
import image76 from "../../assets/images/image76.png";
import image77 from "../../assets/images/image77.png";
import image78 from "../../assets/images/image78.png";
import image79 from "../../assets/images/image79.png";
import image80 from "../../assets/images/image80.png";
import image81 from "../../assets/images/image81.png";
import image82 from "../../assets/images/image82.png";
import image83 from "../../assets/images/image83.png";
import image84 from "../../assets/images/image84.png";
import image85 from "../../assets/images/image85.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PenCategory = () => {
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
            <h1 className="text-[20px] font-bold">خودکار و روان نویس</h1>
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
                <img src={image76} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  خودکار کریتورز کلاس مدل candid 0.5 بسته 6 عددی
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۳۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image77} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 12 عددی خودکار ژویکسوا مدل هایلایتر نئونی با نوک گرد 1
                  میلی‌متری
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۵۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image78} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 6 عددی خودکار سی.کلاس مدل candid با نوک ساچمه‌ای 0.5
                  میلی‌متری
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۳۲۳,۸۱۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image79} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 8 عددی خودکار پنتر مدل فوق روان نانو باکتروپاد کد DP-105
                  با نوک 0.7 میلی‌متری و 8 رنگ
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۲۶۹,۸۵۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image80} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  روان‌نویس نوک نمدی 12 رنگ کورس مدل FINE LINER با نوک 0.4
                  میلی‌متری
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۴۵٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۹۰۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-bold">۴۹۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image81} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 3 عددی خودکار پرشیا مدل لیان کد D 0.7 با نوک ساچمه‌ای 0.7
                  میلی‌متری
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۱۰۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image82} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 2 عددی خودکار پنتر مدل Semi Gel با نوک ساچمه‌ای 0.7
                  میلی‌متری و گریپ نرم
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۲۹٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۲۵,۵۶۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-bold">۸۸,۹۵۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image83} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  خودکار سی.کلاس مدل کاندید 0.5 بسته 4 عددی
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۳۱۸,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image84} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 3 عددی خودکار کریتورز کلاس کد G-TFZO20 با نوک 0.5
                  میلی‌متری
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۱۸۴,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="max-xl:w-41.5!">
              <div className="w-41.5 h-68.75 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image85} alt="Ballpoint pen" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  بسته 4 عددی خودکار بیک مدل Cristal با نوک ساچمه‌ای
                </p>

                <div className="flex items-center justify-end mt-7 ml-2">
                  <h1 className="font-bold">۱۰۱,۶۹۰</h1>
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

export default PenCategory;
