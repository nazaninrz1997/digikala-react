import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon19 from "../../assets/icons/icon19.png";
import image86 from "../../assets/images/image86.png";
import image87 from "../../assets/images/image87.png";
import image88 from "../../assets/images/image88.png";
import image89 from "../../assets/images/image89.png";
import image90 from "../../assets/images/image90.png";
import image91 from "../../assets/images/image91.png";
import image92 from "../../assets/images/image92.png";
import image93 from "../../assets/images/image93.png";
import image94 from "../../assets/images/image94.png";
import image95 from "../../assets/images/image95.png";
import image96 from "../../assets/images/image96.png";
import image97 from "../../assets/images/image97.png";
import image98 from "../../assets/images/image98.png";
import image99 from "../../assets/images/image99.png";
import image100 from "../../assets/images/image100.png";
import image101 from "../../assets/images/image101.png";
import image102 from "../../assets/images/image102.png";
import image103 from "../../assets/images/image103.png";
import image104 from "../../assets/images/image104.png";
import image105 from "../../assets/images/image105.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PopularBrands = () => {
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
      <div className="w-326 h-54.5 border border-[#E2E2E4] rounded-2xl mx-auto mt-5 p-5 max-xl:w-full! max-xl:h-auto! max-xl:px-3 max-xl:py-5 max-xl:overflow-hidden">
        <div className="flex items-center gap-1">
          <img src={icon19} alt="brandhaye mahboob" />
          <h1 className="text-[20px] font-bold">محبوب‌ترین برندها</h1>
        </div>
        <div className="flex items-center mt-4 relative max-xl:w-full max-xl:min-w-0">
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
            className="w-full max-xl:min-w-0"
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            spaceBetween={1}
            slidesPerView={12.5}
            breakpoints={{
              0: {
                slidesPerView: "auto",
              },
              1280: {
                slidesPerView: 12.5,
              },
            }}
          >
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image86}
                  alt="rani"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">رانی</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image87}
                  alt="torabika"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">ترابیکا</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image88}
                  alt="charm mashhad"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">چرم مشهد</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image89}
                  alt="ADATA"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">ای دیتا</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image90}
                  alt="chini zarin iran"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">چینی زرین ایران</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image91}
                  alt="ModoPod"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">مدوپد</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image92}
                  alt="x vision"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">ایکس ویژن</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image93}
                  alt="maya mahak"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">مایا ماهک</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image94}
                  alt="neterbit"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">نتربیت</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image95}
                  alt="huawei"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">هوآوی</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image96}
                  alt="eurhovital"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">یوروویتال</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image97}
                  alt="La farrerr"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">لافارر</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image98}
                  alt="xiaomi"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">شیائومی</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image99}
                  alt="My"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">مای</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image100}
                  alt="samsung"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">سامسونگ</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image101}
                  alt="Active"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">اکتیو</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image102}
                  alt="saei"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">ساعی</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image103}
                  alt="kaleh"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">کاله</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={image104}
                  alt="Vitalayer"
                  className="mb-2 w-21.5 h-21.5 object-contain"
                />
                <h1 className="text-[11px] text-center">ویتالیر</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-22.75!">
              <div className="w-22.75 h-31 border border-[#f2f2f2] rounded-2xl overflow-hidden cursor-pointer">
                <img src={image105} alt="Fulica" className="mb-2" />
                <h1 className="text-[11px] text-center">فولیکا</h1>
              </div>
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

export default PopularBrands;
