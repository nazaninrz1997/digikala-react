import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon20 from "../../assets/icons/icon20.png";
import image106 from "../../assets/images/image106.png";
import image107 from "../../assets/images/image107.png";
import image108 from "../../assets/images/image108.png";
import image109 from "../../assets/images/image109.png";
import image110 from "../../assets/images/image110.png";
import image111 from "../../assets/images/image111.png";
import image112 from "../../assets/images/image112.png";
import image113 from "../../assets/images/image113.png";
import image114 from "../../assets/images/image114.png";
import image115 from "../../assets/images/image115.png";
import image116 from "../../assets/images/image116.png";
import image117 from "../../assets/images/image117.png";
import image118 from "../../assets/images/image118.png";
import image119 from "../../assets/images/image119.png";
import image120 from "../../assets/images/image120.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Bestsales = () => {
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
      <div className="w-326 h-101 border border-[#E2E2E4] rounded-2xl mx-auto mt-5 p-5 max-xl:w-full! max-xl:h-auto! max-xl:p-1! max-xl:overflow-hidden">
        <div className="flex items-center gap-1">
          <img src={icon20} alt="porforooshtarin ha" />
          <h1 className="text-[20px] font-bold">پرفروش‌ترین ها</h1>
        </div>
        <div className="flex items-center mt-4 relative w-full min-w-0">
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
            className="w-full min-w-0"
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            spaceBetween={1}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: "auto",
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image106} alt="ghab tablet" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      1
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کاور KA-043 مناسب برای تبلت سامسونگ Galaxy Note 8 / N5100
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image107} alt="majik" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      2
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      ماژیک علامت گذار مدل موشی بسته ۶ عددی
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image108} alt="ghab mobile" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      3
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کاور قاب گارد مدل فانتزی مناسب برای گوشی موبایل سامسونگ
                      Galaxy A04
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image109}
                  alt="kafsh mardaneh"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      4
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کفش ورزشی پیاده‌روی مردانه مدل S با زیره پلی‌اورتان مقاوم
                      در برابر سایش و لغزش، کفی ساده و قابل تعویض، رویه چرم
                      مصنوعی با منفذ هوا و طراحی بندی مناسب ورزش و فعالیت‌های
                      روزمره
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image110} alt="ketab alva" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      5
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کتاب آلوا اثر رنه روزن ترجمه سمیرا شوندی نشر هاترا چاپ اول
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image111} alt="koosan" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      6
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کوسن مدل برگ های رنگی کد 9488
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image112} alt="koosan" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      7
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کوسن مدل فانتزی کد C2889213
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image113} alt="ghab mobile" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      8
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کاور قاب گارد مدل پسرانه مناسب برای گوشی موبایل سامسونگ
                      galaxy A04 4g
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image114} alt="magnet" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      9
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      مگنت خندالو طرح دختر کد 5500
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image115}
                  alt="mohafez safhe namayesh"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      10
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      محافظ صفحه نمایش گلس استار مدل AIRGA مناسب برای گوشی
                      موبایل شیائومی Poco M3
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image116}
                  alt="khat cheshm callista"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      11
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      خط چشم کالیستا مدل Liner and Sharper با رنگ مشکی مات، قلم
                      طراحی حرفه‌ای، ماندگاری بالا، حجم 9 میلی‌لیتر
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image117}
                  alt="espersosaz khanegi"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      12
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      اسپرسوساز خانگی 1200 میلی‌لیتری نوا مدل NCM-149EXPF، با
                      مصرف پودر قهوه، مناسب تهیه اسپرسو، کافه لاته، موکا و
                      کاپوچینو، دارای 1 عدد نازل قهوه، سینی چکه گیر، حالت آماده
                      به کار
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image118} alt="hard external" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      13
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      هارد اکسترنال 2 ترابایت توشیبا مدل Canvio Basics،
                      استاندارد ارتباطی USB 3.2، رابط کابل USB Type-A، سرعت چرخش
                      5400 دور در دقیقه، مقاوم در برابر خط و خش
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image119} alt="nakh dandaan" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      14
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      نخ دندان آل وایت مدل micro mint با طعم نعناع و اسانس، طول
                      20 میلی‌متر، بسته 70 عددی
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image120} alt="ghab mobile" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      15
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کاور قاب گارد مدل فانتزی مناسب برای گوشی موبایل سامسونگ
                      Galaxy A03s
                    </h1>
                  </div>
                </div>
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

export default Bestsales;
