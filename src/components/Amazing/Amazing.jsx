import image19 from "../../assets/images/image19.png";
import image20 from "../../assets/images/image20.png";
import icon13 from "../../assets/icons/icon13.png";
import image21 from "../../assets/images/image21.png";
import icon14 from "../../assets/icons/icon14.svg";
import image22 from "../../assets/images/image22.png";
import image23 from "../../assets/images/image23.png";
import image24 from "../../assets/images/image24.png";
import image25 from "../../assets/images/image25.png";
import image26 from "../../assets/images/image26.png";
import image27 from "../../assets/images/image27.png";
import image28 from "../../assets/images/image28.png";
import image29 from "../../assets/images/image29.png";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const Amazing = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigate = useNavigate();

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
      <div className="w-326 h-78.25 bg-[#d42c4f] mx-auto rounded-2xl mt-10 flex items-center max-xl:w-full max-xl:h-auto max-xl:flex-col max-xl:items-stretch max-xl:px-3 max-xl:py-4 max-xl:overflow-hidden">
        <div className="w-41.75 max-xl:w-full max-xl:flex max-xl:flex-row max-xl:flex-wrap max-xl:items-center max-xl:justify-center max-xl:gap-x-4 max-xl:gap-y-3 max-xl:mb-4 max-xl:shrink-0">
          <img
            src={image19}
            alt="amazing"
            className="w-18 h-15 mx-auto mb-8 mr-10 max-xl:mx-0 max-xl:mb-0 max-xl:mr-0"
          />
          <img
            src={image20}
            alt="amazing"
            className="w-32 h-6 mb-6 mr-5 max-xl:mb-0 max-xl:mr-0"
          />
          <div className="flex items-center gap-1 mr-8 mb-6 max-xl:mr-0 max-xl:mb-0">
            <div className="w-6 h-6 bg-white rounded-[3px] flex items-baseline justify-center font-bold">
              00
            </div>
            <span className="text-white">:</span>
            <div className="w-6 h-6 bg-white rounded-[3px] flex items-baseline justify-center font-bold">
              13
            </div>
            <span className="text-white">:</span>
            <div className="w-6 h-6 bg-white rounded-[3px] flex items-baseline justify-center font-bold">
              09
            </div>
          </div>
          <button type="button" onClick={() => navigate("/Incredible")} className="bg-[#f2f3f5] w-30.5 h-8 mr-4.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer max-xl:mr-0">
            <h1 className="text-[#626865] text-[14px]">مشاهده همه</h1>
            <img src={icon13} alt="left arrow" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 mr-5 overflow-hidden relative max-xl:w-full max-xl:mr-0 max-xl:shrink-0">
          {!isEnd && (
            <button
              onClick={handleNext}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer"
            >
              <img
                src={icon15}
                alt="left arrow"
                className="text-[12px] font-bold text-black"
              />
            </button>
          )}

          <Swiper
            className="max-xl:w-full max-xl:min-w-0"
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            spaceBetween={1}
            slidesPerView="auto"
            breakpoints={{
              640: {
                slidesPerView: 3.6,
              },
              768: {
                slidesPerView: 4.3,
              },
              1024: {
                slidesPerView: 5.7,
              },
              1280: {
                slidesPerView: 6.5,
              },
            }}
          >
            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white rounded-r-lg cursor-pointer overflow-hidden">
                <img src={image21} alt="history of iran book" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کتاب تاریخ مصور ایران باستان اثر احسان رضایی و فاطمه
                  شفیعی‌سروستانی نشر سایان 4 جلدی - جلد 1 تا 4
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۵۳٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۸,۹۰۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image22} alt="Electric toothbrush" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  مسواک برقی رومئو مدل RM-1112 با 8 سری یدک
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۱۶٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۴,۸۰۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image23} alt="L-Carnitin" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  قرص ال کارنیتین یوروویتال 500 میلی‌گرم بسته 60 عددی مناسب
                  بدنسازی و افزایش سوخت‌وساز چربی
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۱۸٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۸,۹۰۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image24} alt="power bank" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  پاوربانک 22.5 وات ویکام مدل WP-24 ظرفیت 20000 میلی‌آمپرساعت
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۳۳٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۳,۴۲۳,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image25} alt="hair dryer" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  سشوار رومئو مدل RM-5080 با توان 2400 وات به همراه دیفیوزر
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۴۱٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۴,۷۷۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image26} alt="wireless mouse" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  ماوس بی سیم گیمینگ مدل X-36، قابلیت اتصال با دانگل USB و
                  بلوتوث
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۳۰٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۱,۵۸۵,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image27} alt="Digital scale" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  ترازوی آشپزخانه دیجیتال هیسکا مدل HS-5000
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۱۹٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۳,۵۹۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image28} alt="wireless mouse" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  ماوس بی سیم مخصوص بازی مدل Optical Sensor
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۲۸٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۱,۲۸۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image29} alt="tablet" />
                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  تبلت 12.1 اینچ شیائومی مدل Redmi Pad 2 Pro
                </p>
                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۶۲٪
                  </p>
                  <p className="line-through text-[14px] text-[#626865]">
                    ۱۸,۹۶۱,۱۰۰
                  </p>
                </div>
                <div className="flex items-center justify-end ml-2">
                  <h1 className="font-extrabold">۶۲,۸۹۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-41 max-sm:w-41!">
              <button
                type="button"
                onClick={() => navigate("/incredible")}
                className="w-41 h-68.5 bg-white rounded-l-lg cursor-pointer"
              >
                <img src={icon13} alt="left arrow" className="mx-auto" />

                <h1 className="text-[#626865] text-[14px] text-center">
                  مشاهده همه
                </h1>
              </button>
            </SwiperSlide>
          </Swiper>

          {!isBeginning && (
            <button
              onClick={handlePrev}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer"
            >
              <img
                src={icon16}
                alt="right arrow"
                className="text-[12px] font-bold text-black"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Amazing;
