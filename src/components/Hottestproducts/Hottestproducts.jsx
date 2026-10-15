import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon20 from "../../assets/icons/icon20.png";
import image164 from "../../assets/images/image164.png";
import image165 from "../../assets/images/image165.png";
import image166 from "../../assets/images/image166.png";
import image167 from "../../assets/images/image167.png";
import image168 from "../../assets/images/image168.png";
import image169 from "../../assets/images/image169.png";
import image170 from "../../assets/images/image170.png";
import image171 from "../../assets/images/image171.png";
import image172 from "../../assets/images/image172.png";
import image173 from "../../assets/images/image173.png";
import image174 from "../../assets/images/image174.png";
import image175 from "../../assets/images/image175.png";
import image176 from "../../assets/images/image176.png";
import image177 from "../../assets/images/image177.png";
import image120 from "../../assets/images/image120.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hottestproducts = () => {
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
          <img src={icon20} alt="daghtarin chand saate gozashte" />
          <h1 className="text-[20px] font-bold">داغ‌ترین چند ساعت گذشته</h1>
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
                <img src={image164} alt="asbab bazi" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      1
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      ست ابزار اسباب‌بازی مدل ABA2020 با ابعاد 280x130x10
                      میلی‌متر و وزن 98 گرم
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image165} alt="band dream" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      2
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      بند دریم مدل Ferrous مناسب برای ساعت هوشمند آمازفیت Peace
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image166}
                  alt="kerem martoob konande"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      3
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      کرم مرطوب کننده کنز مدل Avocado حجم 200 میلی لیتر
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image167}
                  alt="kerem martoob konande"
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
                      کرم مرطوب‌کننده ویتالیر مدل امونیوم لاکتات حجم 100
                      میلی‌لیتر، نرم‌کننده قوی پوست، موثر در درمان اگزما و
                      پسوریازیس، رفع زبری و تیرگی پوست، تسکین‌دهنده و
                      ترمیم‌کننده، حاوی آلوئه‌ورا، مناسب صورت و بدن
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image168}
                  alt="navar sedagir darb khodro"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      5
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      نوار صداگیر درب خودرو 5 لایه مناسب برای تمام خودروها، کاهش
                      صدا و جلوگیری از ورود گرد و خاک، طول 5 متر قابل برش و نصب
                      آسان روی لبه درب
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image169} alt="livan boloor" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      6
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      لیوان بلور کاوه مدل نیوزلند 310cc، بسته 6 عددی، ظرفیت 310
                      میلی‌لیتر، ابعاد 11×10×7 سانتی‌متر، وزن 200 گرم
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image170}
                  alt="saat hooshmand"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      7
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      ساعت هوشمند 46 میلی متری شیائومی مدل Redmi Watch 6 با بند
                      پلاستیکی
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image171}
                  alt="ghors manyazium plus"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      8
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      قرص منیزیم پلاس مگامگ 60 عددی مکمل تقویت استخوان و مفاصل،
                      رفع گرفتگی عضلانی، مناسب بزرگسالان و مصرف روزانه با غذا
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image172} alt="mobadel bargh" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      9
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      مبدل برق سه‌پین به دوشاخه چراغ‌دار ولتاژ ورودی 220 ولت و
                      ولتاژ خروجی 220 ولت
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image173}
                  alt="cheragh aviz chador"
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
                      چراغ آویز چادر دی پی مدل DP-7823B با توان 80 وات، باتری
                      لیتیومی 4000 میلی‌آمپر ساعت، دارای خروجی پاوربانک، شارژ با
                      کابل تایپ C و وزن 185 گرم
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image174}
                  alt="berenj khareji"
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
                      برنج خارجی خوشپخت باب منزل - 10 کیلوگرم
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image175} alt="zinc plus" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      12
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      قرص زینک پلاس یوروویتال 15 میلی گرم بسته 60 عددی تقویت
                      سیستم ایمنی، حفظ سلامت پوست، مو و ناخن، حاوی ویتامین C و
                      ویتامین‌های گروه B، ساخت آلمان
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-xl:w-77.5!">
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img
                  src={image176}
                  alt="soft gel omega 3"
                  className="w-25 h-25"
                />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      13
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      سافت ژل امگا 3 نکستایل 1000 میلی گرم بسته 60 عددی، کمک به
                      سلامت قلب و عروق، کاهش کلسترول و التهاب
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 cursor-pointer">
                <img src={image177} alt="khodkar" className="w-25 h-25" />
                <div className="w-51.5 h-18.75 flex items-center justify-center gap-2">
                  <div className="w-50% h-50%">
                    <h1 className="bg-[#f04055] text-white rounded-full w-7.5 h-7.5 flex items-center justify-center">
                      14
                    </h1>
                  </div>
                  <div className="w-50% h-50%">
                    <h1 className="text-[12px] line-clamp-2">
                      خودکار کریتورز کلاس مدل candid 0.5 بسته 6 عددی
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

export default Hottestproducts;
