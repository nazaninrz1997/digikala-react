import logo from "../../assets/images/logo.png";
import icon21 from "../../assets/icons/icon21.png";
import image121 from "../../assets/images/image121.png";
import image122 from "../../assets/images/image122.png";
import image123 from "../../assets/images/image123.png";
import image124 from "../../assets/images/image124.png";
import image125 from "../../assets/images/image125.png";
import icon22 from "../../assets/icons/icon22.png";
import icon23 from "../../assets/icons/icon23.png";
import icon24 from "../../assets/icons/icon24.png";
import icon25 from "../../assets/icons/icon25.png";
import icon26 from "../../assets/icons/icon26.png";
import image126 from "../../assets/images/image126.png";
import image127 from "../../assets/images/image127.png";
import image128 from "../../assets/images/image128.png";
import image129 from "../../assets/images/image129.png";
import image130 from "../../assets/images/image130.png";
import image131 from "../../assets/images/image131.png";
import image132 from "../../assets/images/image132.png";
import image133 from "../../assets/images/image133.png";
import image134 from "../../assets/images/image134.png";
import image135 from "../../assets/images/image135.png";
import image136 from "../../assets/images/image136.png";
import image137 from "../../assets/images/image137.png";
import image138 from "../../assets/images/image138.png";
import image139 from "../../assets/images/image139.png";
import image140 from "../../assets/images/image140.png";
import image141 from "../../assets/images/image141.png";
import image142 from "../../assets/images/image142.png";
import image143 from "../../assets/images/image143.png";
import image144 from "../../assets/images/image144.png";
import image145 from "../../assets/images/image145.png";
import image146 from "../../assets/images/image146.png";
import image147 from "../../assets/images/image147.png";
import image148 from "../../assets/images/image148.png";
import image149 from "../../assets/images/image149.png";
import image150 from "../../assets/images/image150.png";
import image151 from "../../assets/images/image151.png";
import image152 from "../../assets/images/image152.png";

import { useState } from "react";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="w-full border-t border-t-[#f4f4f4] mt-10">
        <div className="h-32.5 flex items-center justify-between p-4 max-xl:h-auto! max-xl:items-start max-xl:gap-3 max-xl:py-5">
          <div className="max-xl:flex-1 max-xl:min-w-0">
            <img
              src={logo}
              alt="digikala"
              className="w-50 h-7.5 mb-4 cursor-pointer max-xl:mb-3 max-sm:w-32! max-sm:h-auto!"
            />
            <div className="flex max-xl:flex-wrap max-xl:gap-x-2 max-xl:gap-y-2">
              <h1 className="text-[#707788] text-[12px] ml-4 max-xl:ml-0">
                تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
              </h1>

              <div className="w-px h-3 bg-[#707788] max-sm:hidden"></div>

              <h1 className="text-[#707788] text-[12px] ml-4 mr-4 max-xl:mx-0">
                ۰۲۱-۹۱۰۰۰۱۰۰
              </h1>

              <div className="w-px h-3 bg-[#707788] max-sm:hidden"></div>

              <h1 className="text-[#707788] text-[12px] mr-4 max-xl:mr-0 max-xl:w-full">
                ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
              </h1>
            </div>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border border-[#b5b6b9] p-3 rounded-md w-34.25 h-10 flex items-center justify-center gap-2 cursor-pointer max-sm:w-auto! max-sm:px-2 max-sm:gap-1"
            >
              <h1 className="text-[#b5b6b9] text-[12px] font-bold whitespace-nowrap">
                بازگشت به بالا
              </h1>

              <img src={icon21} alt="top arrow" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between p-15 max-xl:p-4 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-2 max-xl:gap-x-3 max-xl:gap-y-7 sm:max-xl:grid-cols-3">
          <div className="flex flex-col items-center justify-center cursor-pointer text-center max-xl:gap-2">
            <img
              src={image121}
              alt="tahvil express"
              className="max-xl:max-w-full max-xl:object-contain"
            />
            <h1 className="text-[#707788] text-[12px]">امکان تحویل اکسپرس</h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer text-center max-xl:gap-2">
            <img
              src={image122}
              alt="pardakht dar mahal"
              className="max-xl:max-w-full max-xl:object-contain"
            />
            <h1 className="text-[#707788] text-[12px]">امکان پرداخت در محل</h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer text-center max-xl:gap-2">
            <img
              src={image123}
              alt="24 saate"
              className="max-xl:max-w-full max-xl:object-contain"
            />
            <h1 className="text-[#707788] text-[12px]">7 روز هفته، 24 ساعته</h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer text-center max-xl:gap-2">
            <img
              src={image124}
              alt="zemanat bazgashte kala"
              className="max-xl:max-w-full max-xl:object-contain"
            />
            <h1 className="text-[#707788] text-[12px]">
              هفت روز ضمانت بازگشت کالا
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer text-center max-xl:gap-2">
            <img
              src={image125}
              alt="zemanate asl boodane kala"
              className="max-xl:max-w-full max-xl:object-contain"
            />
            <h1 className="text-[#707788] text-[12px]">ضمانت اصل بودن کالا</h1>
          </div>
        </div>
        <div className="p-4 flex justify-between max-xl:grid max-xl:grid-cols-2 max-xl:gap-x-5 max-xl:gap-y-8 max-xl:py-6 sm:max-xl:grid-cols-3">
          <div className="max-xl:min-w-0">
            <h1 className="text-[18px] mb-2 cursor-pointer">با دیجی‌کالا</h1>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              اتاق خبر دیجی‌کالا
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              فروش در دیجی‌کالا
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              فرصت‌های شغلی
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              گزارش تخلف در دیجی‌کالا
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              تماس با دیجی‌کالا
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              درباره دیجی‌کالا
            </h2>
          </div>
          <div className="max-xl:min-w-0">
            <h1 className="text-[18px] mb-2 cursor-pointer">خدمات مشتریان</h1>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              پاسخ به پرسش‌های متداول
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              رویه‌های بازگرداندن کالا
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              شرایط استفاده
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              حریم خصوصی
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              گزارش باگ
            </h2>
          </div>
          <div className="max-xl:min-w-0">
            <h1 className="text-[18px] mb-2 cursor-pointer">
              راهنمای خرید از دیجی‌کالا
            </h1>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              نحوه ثبت سفارش
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              رویه ارسال سفارش
            </h2>
            <h2 className="text-[#707788] text-[14px] mb-3 cursor-pointer">
              شیوه‌های پرداخت
            </h2>
          </div>
          <div className="max-xl:col-span-2 sm:max-xl:col-span-3 max-xl:min-w-0">
            <h1 className="mb-2">همراه ما باشید!</h1>
            <div className="flex gap-8 mb-8 max-xl:flex-wrap max-xl:gap-4 max-xl:mb-6">
              <img
                src={icon22}
                alt="instagram"
                className="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-8"
              />
              <img
                src={icon23}
                alt="twitter"
                className="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-8"
              />
              <img
                src={icon24}
                alt="linkedin"
                className="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-8"
              />
              <img
                src={icon25}
                alt="aparat"
                className="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-8"
              />
              <img
                src={icon26}
                alt="telegram"
                className="w-10 h-10 cursor-pointer max-xl:w-8 max-xl:h-8"
              />
            </div>
            <p className="mb-2 text-sm">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>
            <div className="flex gap-2 max-sm:w-full">
              <input
                type="text"
                placeholder="ایمیل شما"
                className="bg-[#f0f0f0] p-3 rounded-md w-66.25 focus:outline-none max-xl:flex-1 max-xl:min-w-0"
              />
              <button className="bg-[#e0e0e2] p-2 rounded-md w-13.5 text-white cursor-pointer shrink-0">
                ثبت
              </button>
            </div>
          </div>
        </div>
        <div className="w-372 h-19 bg-[#3c4a6d] rounded-md mx-auto flex items-center justify-between max-xl:w-full! max-xl:h-auto! max-xl:flex-col max-xl:items-stretch max-xl:gap-4 max-xl:p-4">
          <div className="flex items-center gap-2 max-xl:p-0 mr-3">
            <img
              src={image126}
              alt="application digikala"
              className="w-11.5 h-11.5 shrink-0 max-sm:w-9 max-sm:h-9"
            />
            <h1 className="text-white font-bold text-[20px] max-sm:text-[15px]">
              دانلود اپلیکیشن دیجی‌کالا
            </h1>
          </div>
          <div className="flex items-center gap-3 max-xl:flex-wrap max-xl:gap-2">
            <img
              src={image127}
              alt="daryaft az bazar"
              className="w-36.5 h-11 rounded-md cursor-pointer max-xl:w-32 max-xl:max-w-full max-sm:w-[calc(50%-4px)] max-sm:object-contain"
            />
            <img
              src={image128}
              alt="daryaft az myket"
              className="w-36.5 h-11 rounded-md cursor-pointer max-xl:w-32 max-xl:max-w-full max-sm:w-[calc(50%-4px)] max-sm:object-contain"
            />
            <img
              src={image129}
              alt="daryaft az sibapp"
              className="w-36.5 h-11 cursor-pointer max-xl:w-32 max-xl:max-w-full max-sm:w-[calc(50%-4px)] max-sm:object-contain"
            />
            <img
              src={image130}
              alt="bishtar"
              className="w-11.5 h-11.5 bg-white rounded-md cursor-pointer max-xl:hidden ml-3"
            />
          </div>
        </div>
        <div className="w-372 h-px bg-[#f3f3f3] mt-5 mx-auto max-xl:w-full!"></div>
        <div className="flex justify-between p-4 max-xl:flex-col max-xl:gap-6 max-xl:p-4">
          <div className="w-192.5 max-xl:w-full! max-xl:min-w-0">
            <h1 className="text-[20px] mb-3 max-sm:text-[17px]">
              دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران
            </h1>
            <p className="text-[12px] leading-6 text-[#626865]">
              دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی
              تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه
              آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این
              فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های
              مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل
              بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی
              ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد
              مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب
              می‌شود. این روزها بازار دیجی کالا حتی فرصت
              {showMore && (
                <>
                  {" "}
                  خرید آسان از فروشگاه های اینستاگرامی را در اختیار شما قرار
                  داده است و اگر هم خرید حضوری را ترجیح می‌دهید فروشگاه حضوری
                  دیجی کالا هر روز بر تعداد شعب خود می‌افزاید.
                  <h1 className="text-[16px] font-bold">
                    ویژگی های مهم دیجی کالا
                  </h1>
                  <p className="text-[12px] leading-6 text-[#626865]">
                    یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر
                    محصولات است. این فروشگاه اینترنتی طیف وسیعی از کالاها را در
                    دسته‌های مختلف از جمله لوازم دیجیتال، لوازم خانگی، مد و
                    پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و زیبایی، و
                    بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال، اگر به
                    دنبال خرید یا بررسی قیمت گوشی باشید، دیجی کالا مجموعه‌ای از
                    بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند آیفون
                    ۱۷، گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی
                    نوت ۱۴ و بسیاری از برندهای دیگر را در اختیار شما قرار
                    می‌دهد. همچنین برای علاقه‌مندان به لوازم دیجیتال، این
                    فروشگاه اینترنتی انواع لپ تاپ، تلویزیون، اسپیکر، و هندزفری
                    بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد. دیجی
                    کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی
                    که هر آنچه نیاز دارید از قیمت لپ تاپ تا یک ایرپاد مطمئن را
                    در اختیار شما قرار می‌دهد.
                  </p>
                  <h1 className="text-[16px] font-bold">
                    ارسال سریع و مطمئن کالا
                  </h1>
                  <p className="text-[12px] leading-6 text-[#626865]">
                    یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل
                    کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال
                    را در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش
                    ارسال مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به
                    صورت تحویل امروز با ارسال سریع دیجی‌کالا، از جمله روش‌های
                    خرید سریع از این فروشگاه اینترنتی است. این امکانات باعث
                    می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان
                    ممکن دریافت کنند. علاوه بر این، در صورتی که کالای خریداری
                    شده از لحاظ کیفیت یا هر دلیل دیگری رضایت مشتری را جلب نکرده
                    باشد، دیجی کالا ضمانت بازگشت کالا را ارائه می‌دهد. این ویژگی
                    موجب اعتماد بیشتر مشتریان به خرید آنلاین از فروشگاه اینترنتی
                    دیجی کالا شده است.
                  </p>
                </>
              )}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 text-[#3c6fb4] text-[12px] font-bold cursor-pointer"
            >
              {showMore ? "بستن" : "مشاهده بیشتر"}
            </button>
          </div>
          <div className="flex gap-2 max-xl:flex-wrap max-xl:justify-center max-xl:items-start">
            <img
              src={image131}
              alt="sapra"
              className="w-20 h-20 border border-[#e1e1e3] rounded-md p-1.5 cursor-pointer max-sm:w-16 max-sm:h-16"
            />
            <img
              src={image132}
              alt="samandehi"
              className="w-20 h-20 border border-[#e1e1e3] rounded-md p-1.5 cursor-pointer max-sm:w-16 max-sm:h-16"
            />
            <img
              src={image133}
              alt="kasbokarhaye majazi"
              className="w-20 h-20 border border-[#e1e1e3] rounded-md p-1.5 cursor-pointer max-sm:w-16 max-sm:h-16"
            />
            <img
              src={image134}
              alt="enamad"
              className="w-20 h-20 border border-[#e1e1e3] rounded-md p-1.5 cursor-pointer max-sm:w-16 max-sm:h-16"
            />
          </div>
        </div>
        <div className="w-372 h-px bg-[#f3f3f3] mt-5 mx-auto max-xl:w-full!"></div>
        <p className="p-6 text-center text-[#8c8a88] text-[11px] max-xl:px-4 max-xl:py-5 max-xl:leading-6">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
        <div className="w-full grid grid-cols-9 grid-rows-2 bg-[#F0F0F1] max-xl:grid-cols-3 max-xl:grid-rows-none sm:max-xl:grid-cols-4">
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image135}
              alt="mag"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image136}
              alt="digipay"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image137}
              alt="digistyle"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 pb-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image138}
              alt="plus"
              className="object-contain mx-auto w-20 h-16 max-xl:w-full max-xl:h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image139}
              alt="digiclub"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image140}
              alt="digikalajet"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image141}
              alt="digikalaads"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image142}
              alt="digikalamehr"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-b-2 border-b-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image143}
              alt="diginext"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image144}
              alt="digiexpress"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image145}
              alt="genje"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image146}
              alt="digify"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image147}
              alt="smartech"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image148}
              alt="digikala business"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image149}
              alt="digikala service"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image150}
              alt="miare"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 border-l-2 border-l-[#e2e2e2] cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image151}
              alt="vidomart"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
          <div className="w-full h-15 p-5 cursor-pointer max-xl:p-3 max-sm:p-2 max-xl:flex max-xl:items-center max-xl:justify-center">
            <img
              src={image152}
              alt="gold"
              className="object-contain mx-auto max-xl:max-w-full max-xl:max-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
