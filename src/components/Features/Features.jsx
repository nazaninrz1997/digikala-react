import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";
import image8 from "../../assets/images/image8.png";
import image9 from "../../assets/images/image9.png";
import image10 from "../../assets/images/image10.png";
import icon12 from "../../assets/icons/icon12.svg";

const Features = () => {
  return (
    <>
      <div className="w-full lg:w-326 h-auto lg:h-30 mt-6 lg:mt-10 flex flex-wrap lg:flex-nowrap items-center justify-center mx-auto gap-x-4 gap-y-6 px-3 lg:gap-12 lg:px-0">
        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image2}
            alt="supermarket"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">سوپرمارکت</h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image3}
            alt="digital gold and silver"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">
            طلا و نقره دیجیتال
          </h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img src={image4} alt="school" className="w-13 h-13 mx-auto mb-2" />
          <h1 className="mx-auto text-[12px] text-[#706b76]">
            همه چیز برای مدرسه
          </h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image5}
            alt="digistyle"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">دیجی استایل</h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image6}
            alt="Car Service"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">
            سرویس ادواری خودرو
          </h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image7}
            alt="Summer Bestsellers"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">
            پرفروش‌های تابستون
          </h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image8}
            alt="Laptop Sale"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">
            حراج لپ‌تاپ و تبلت
          </h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image9}
            alt="Watch Discount"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">تخفیف ساعت</h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={image10}
            alt="Plus Subscription"
            className="w-13 h-13 mx-auto mb-2"
          />
          <h1 className="mx-auto text-[12px] text-[#706b76]">اشتراک پلاس</h1>
        </div>

        <div className="cursor-pointer shrink-0 text-center">
          <img
            src={icon12}
            alt="more"
            className="bg-[#f0f0f0] rounded-full w-13 h-13 pt-3 pl-2.5 mb-2 mx-auto"
          />
          <h1 className="text-center text-[12px] text-[#706b76]">بیشتر</h1>
        </div>
      </div>
    </>
  );
};

export default Features;
