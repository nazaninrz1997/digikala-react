import image19 from "../../assets/images/image19.png";
import image20 from "../../assets/images/image20.png";
import icon13 from "../../assets/icons/icon13.png";
import icon14 from "../../assets/icons/icon14.svg";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import image30 from "../../assets/images/image30.png";
import image31 from "../../assets/images/image31.png";
import image32 from "../../assets/images/image32.png";
import image33 from "../../assets/images/image33.png";
import image34 from "../../assets/images/image34.png";
import image35 from "../../assets/images/image35.png";
import image36 from "../../assets/images/image36.png";
import image37 from "../../assets/images/image37.png";
import image38 from "../../assets/images/image38.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const Amazing2 = () => {
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
      <div className="w-326 h-78.25 bg-[#6eb928] mx-auto rounded-2xl mt-10 flex items-center max-xl:w-full! max-xl:h-auto! max-xl:flex-col max-xl:items-stretch max-xl:px-3 max-xl:py-4 max-xl:overflow-hidden">
        <div className="w-41.75 max-xl:w-full! max-xl:flex max-xl:flex-row max-xl:flex-wrap max-xl:items-center max-xl:justify-center max-xl:gap-x-4 max-xl:gap-y-3 max-xl:mb-4 max-xl:shrink-0">
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
            <div className="w-6 h-6 bg-white rounded-[3px] flex items-center justify-center font-bold">
              06
            </div>
            <span className="text-white">:</span>

            <div className="w-6 h-6 bg-white rounded-[3px] flex items-center justify-center font-bold">
              45
            </div>
            <span className="text-white">:</span>

            <div className="w-6 h-6 bg-white rounded-[3px] flex items-center justify-center font-bold">
              00
            </div>
          </div>
          <button onClick={() => navigate("/amazing2")} className="bg-[#f2f3f5] w-30.5 h-8 mr-4.5 rounded-lg flex items-center justify-center gap-1 cursor-pointer max-xl:mr-0">
            <h1 className="text-[#626865] text-[14px]">مشاهده همه</h1>

            <img src={icon13} alt="left arrow" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 mr-5 overflow-hidden relative max-xl:w-full max-xl:mr-0 max-xl:shrink-0">
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
                <img src={image30} alt="Maxton Liquid Chlorophyll" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کلروفیل مایع مکستون مدل Organic حجم 30 میلی‌لیتر
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۷۴٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۹۹۸,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image31} alt="Disposable tablecloth" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  سفره یکبارمصرف هپی هوم مدل اقتصادی رول 25 متری مجموعه 2 عددی
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۸۵٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۴,۸۰۰,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image32} alt="Sunflower seed kernels" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  مغز تخمه آفتابگردان خام دانه‌درشت روستاچی - 300 گرم بسته 2
                  عددی
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۴۹٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۴۹۲,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image33} alt="Premium Khansar Wildflower Honey" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  عسل چهل گیاه ممتاز خوانسار - 1000 گرم
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۵۰٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۷۹۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image34} alt="Sohan-Gazi with wheat germ" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  سوهان گزی با جوانه گندم حاج محمد قربانی - 1000 گرم
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۳۳٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۵۹۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image35} alt="Amophilia Anti-Hair Loss Shampoo" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  شامپو ضد ریزش مو اموفیلیا مخصوص انواع مو، حجم 300 میلی‌لیتر
                  مدل Trichogen
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۷۴٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۷۸۹,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image36} alt="Diet cappuccino" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  کاپوچینو رژیمی ونزکافه بسته 20 عددی
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۷۸٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۶۷۲,۵۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image37} alt="Toothpaste" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  خمیر دندان مخصوص دندان‌های لمینت و کامپوزیت میسویک حجم 75
                  میلی‌لیتر، جلوگیری از پوسیدگی، تیرگی و ایجاد جرم
                </p>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1">
                    ۶۷٪
                  </p>

                  <p className="line-through text-[14px] text-[#626865]">
                    ۳,۸۵۰,۰۰۰
                  </p>
                </div>

                <div className="flex items-center justify-end mt-1 ml-2">
                  <h1 className="font-extrabold">۲۳۶,۰۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-43 max-sm:w-43!">
              <div className="w-43 h-68.5 bg-white cursor-pointer overflow-hidden">
                <img src={image38} alt="Venzcafe Macchiato Powder" />

                <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                  پودر ماکیاتو ونزکافه - 25 گرم بسته 20 عددی
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
                  <h1 className="font-extrabold">۶۹۳,۹۰۰</h1>
                  <img src={icon14} alt="toomaan" className="w-5 h-5" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="w-41 max-sm:w-41!">
              <button
                type="button"
                onClick={() => navigate("/amazing2")}
                className="w-41 h-68.5 bg-white rounded-l-lg cursor-pointer border-0"
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

export default Amazing2;
