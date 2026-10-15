import icon14 from "../../assets/icons/icon14.svg";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";
import icon27 from "../../assets/icons/icon27.png";
import icon28 from "../../assets/icons/icon28.png";
import image153 from "../../assets/images/image153.png";
import image154 from "../../assets/images/image154.png";
import image155 from "../../assets/images/image155.png";
import image156 from "../../assets/images/image156.png";
import image157 from "../../assets/images/image157.png";
import image158 from "../../assets/images/image158.png";
import image159 from "../../assets/images/image159.png";
import image160 from "../../assets/images/image160.png";
import image161 from "../../assets/images/image161.png";
import image162 from "../../assets/images/image162.png";
import image163 from "../../assets/images/image163.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Sendbyaddress = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const products = [
    {
      image: image154,
      alt: "kapsul manyazium plus",
      title: "کپسول منیزیم پلاس د3 و کا2 یوروویتال بسته 60 عددی",
      discount: "۶۰٪",
      oldPrice: "۱,۴۳۰,۰۰۰",
      price: "۵۶۷,۰۰۰",
    },
    {
      image: image155,
      alt: "daftar zaban",
      title: "دفتر زبان 50 برگ خندالو مدل دو خط طرح ماه و پروانه کد N4482",
      discount: "۱۵٪",
      oldPrice: "۴۰۰,۰۰۰",
      price: "۳۳۹,۰۰۰",
    },
    {
      image: image156,
      alt: "headphone bluetoothy",
      title: "هدفون بلوتوثی انکر مدل R60i NC",
      discount: "۲۸٪",
      oldPrice: "۶,۹۸۸,۴۰۰",
      price: "۵,۰۵۳,۸۰۰",
    },
    {
      image: image157,
      alt: "kapsule zinc plus",
      title:
        "کپسول ژلاتینی نرم زینک پلاس فیشر فلکسان مدل Zinc Plus حاوی زینک 10 میلی‌گرم، ویتامین C 500 میلی‌گرم و ویتامین D3 400 واحد، تقویت سیستم ایمنی، بهبود عملکرد مغز و حفظ سلامت پوست و استخوان، بسته 60 عددی",
      discount: "۴۴٪",
      oldPrice: "۸۷۰,۰۰۰",
      price: "۱۲۰,۰۰۰",
    },
    {
      image: image158,
      alt: "hair dryer",
      title:
        "کرم مرطوب کننده صورت و گردن کلامین مدل Collagen Bank با حجم 125 میلی‌لیتر، آبرسانی عمیق، ضد پیری و ضد چروک، حاوی کلاژن هیدرولیزشده، ویتامین C و امگا 3، مناسب انواع پوست، فاقد پارابن و بدون تست حیوانی",
      discount: "۸۹٪",
      oldPrice: "۱,۰۵۶,۰۰۰",
      price: "۴۸۷,۹۶۰",
    },
    {
      image: image159,
      alt: "kerem schon",
      title:
        "کرم نرم‌کننده دست و صورت شون مدل عصاره بادام حجم 150 میلی‌لیتر، حاوی پروتئین و پپتید، گلیسیرین، ویتامین E، مناسب پوست خشک و معمولی",
      discount: "۲۱٪",
      oldPrice: "۴۰۶,۹۸۰",
      price: "۳۱۹,۹۰۰",
    },
    {
      image: image160,
      alt: "kapsul multi vital eurovital",
      title:
        "کپسول مولتی ویتال یوروویتال مدل For Her 50+ بسته 30 عددی با ویتامین‌های گروه B برای افزایش انرژی، کلسیم و ویتامین D جهت حفظ تراکم استخوان، تقویت سیستم ایمنی و پیشگیری از پیری پوست و ریزش مو",
      discount: "۸۱٪",
      oldPrice: "۷۱۵,۰۰۰",
      price: "۱۳۹,۰۰۰",
    },
    {
      image: image161,
      alt: "sharbat zinc va vitamin",
      title: "شربت زینک و ویتامین دکتر کیدز - 300 میلی لیتر",
      discount: "۳۳٪",
      oldPrice: "۵۹۴,۰۰۰",
      price: "۳۹۹,۰۰۰",
    },
    {
      image: image162,
      alt: "poodr nooshidani",
      title:
        "پودر نوشیدنی شیر شکلاتی با طعم توت فرنگی ونز کید ونزکافه - 360 گرم",
      discount: "۵۰٪",
      oldPrice: "۸۴۰,۰۰۰",
      price: "۴۲۰,۰۰۰",
    },
    {
      image: image163,
      alt: "serom poost prime",
      title:
        "سرم پوست پرایم مدل C_Prime حجم 30 میلی‌لیتر، روشن‌کننده و سفت‌کننده پوست، حاوی ویتامین C، عصاره کاکادو، مرکبات، چای سبز، رز وحشی، گل عینکی و روغن آرگان، مناسب انواع پوست",
      discount: "۳۳٪",
      oldPrice: "۱,۵۵۰,۰۰۰",
      price: "۱,۰۳۱,۳۰۰",
    },
  ];

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

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

  return (
    <>
      <div className="w-326 h-111.5 mx-auto mt-10 rounded-2xl bg-[#fff8e7] p-5 max-xl:w-full max-xl:h-auto max-xl:px-3 max-xl:py-4 max-xl:overflow-hidden">
        <div className="flex justify-start items-center h-14 max-xl:h-auto max-xl:min-h-14 max-xl:flex-wrap max-xl:gap-2">
          <div className="flex items-center gap-2 max-xl:flex-wrap">
            <img src={image153} alt="3 hour" className="w-21.5 h-7" />
            <h2 className="text-[20px] font-bold">تحویل بگیر!</h2>
          </div>
        </div>
        <div className="w-full h-12 bg-[#fff0d5] rounded-xl px-4 flex items-center justify-between mb-3 cursor-pointer max-xl:h-auto max-xl:min-h-12 max-xl:flex-wrap max-xl:gap-3 max-xl:py-3 max-xl:px-3">
          <div className="flex items-center gap-2 max-xl:flex-1 max-xl:min-w-0">
            <img src={icon27} alt="info" className="w-5 h-5 shrink-0" />
            <p className="text-[14px] font-medium max-xl:text-[12px]">
              برای بررسی امکان ارسال، آدرس را انتخاب کنید.
            </p>
          </div>
          <div className="flex items-center shrink-0">
            <p className="text-[14px] text-[#f57c00] font-medium max-xl:text-[12px]">
              انتخاب آدرس
            </p>
            <img src={icon28} alt="left arrow" className="w-4 h-4" />
          </div>
        </div>
        <div className="relative w-full max-xl:mt-1">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigation(swiper);
            }}
            onSlideChange={updateNavigation}
            spaceBetween={3}
            slidesPerView={7.5}
            breakpoints={{
              0: {
                slidesPerView: 1.7,
              },
              360: {
                slidesPerView: 1.9,
              },
              480: {
                slidesPerView: 2.6,
              },
              640: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 4.3,
              },
              1024: {
                slidesPerView: 5.8,
              },
              1280: {
                slidesPerView: 7.5,
              },
            }}
            className="w-full h-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="w-43 pt-2">
                <div className="w-43 h-70 bg-white cursor-pointer overflow-hidden max-xl:w-full">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-45 object-contain"
                  />
                  <p className="text-[#626865] text-[14px] line-clamp-2 p-2 h-13">
                    {product.title}
                  </p>
                  <div className="flex items-center justify-end mt-1 ml-2">
                    <p className="bg-[#d32f2e] w-10 h-5 text-center text-white text-[12px] p-1 rounded-2xl ml-1 shrink-0">
                      {product.discount}
                    </p>
                    <p className="line-through text-[14px] text-[#626865] whitespace-nowrap">
                      {product.oldPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-end ml-2">
                    <h1 className="font-extrabold whitespace-nowrap">
                      {product.price}
                    </h1>
                    <img
                      src={icon14}
                      alt="toomaan"
                      className="w-5 h-5 shrink-0"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 z-10 bg-[#fff8e7]/65 pointer-events-none"></div>
          {!isEnd && (
            <button
              onClick={handleNext}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer max-xl:w-10 max-xl:h-10 max-sm:w-8 max-sm:h-8"
            >
              <img
                src={icon15}
                alt="left arrow"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
              />
            </button>
          )}
          {!isBeginning && (
            <button
              onClick={handlePrev}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex w-12 h-12 bg-white justify-center items-center rounded-full border border-[#bdbdbd] cursor-pointer max-xl:w-10 max-xl:h-10 max-sm:w-8 max-sm:h-8"
            >
              <img
                src={icon16}
                alt="right arrow"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sendbyaddress;
