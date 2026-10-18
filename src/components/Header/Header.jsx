import image1 from "../../assets/images/image1.jpg";
import logo from "../../assets/images/logo.png";
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import icon6 from "../../assets/icons/icon6.svg";
import icon7 from "../../assets/icons/icon7.svg";
import icon8 from "../../assets/icons/icon8.svg";
import icon9 from "../../assets/icons/icon9.png";
import icon10 from "../../assets/icons/icon10.svg";
import icon11 from "../../assets/icons/icon11.svg";

import { useEffect, useState } from "react";

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("خطا در دریافت اطلاعات منو");
        }

        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data.megaMenu)) {
          throw new Error("آرایه megaMenu در db.json پیدا نشد");
        }

        setMenuItems(data.megaMenu);

        if (data.megaMenu.length > 0) {
          setActiveMenu(data.megaMenu[0].id);
        }
      })
      .catch((error) => {
        console.error("Menu API Error:", error);
      });
  }, []);
  return (
    <div dir="rtl" className="w-full bg-white sticky z-100 top-0">
      <div className="w-full h-auto md:h-15">
        <img
          src={image1}
          alt="discount"
          className="w-full h-auto md:h-full object-cover cursor-pointer"
        />
      </div>
      <div className="w-full min-h-17.5 flex flex-wrap items-center justify-between gap-3 p-3 lg:flex-nowrap lg:justify-start">
        <img
          src={logo}
          alt="digikala"
          className="w-30 h-auto sm:w-36 lg:w-50.5 lg:h-8.5 cursor-pointer lg:ml-7 shrink-0"
        />
        <div className="flex items-center gap-3 w-full h-10 bg-[#f0f0f0] rounded-full order-3 lg:order-0 lg:w-124.5 lg:h-11.5 lg:ml-130">
          <img
            src={icon3}
            alt="search"
            className="mr-4 cursor-pointer shrink-0"
          />
          <input
            type="text"
            className="outline-none bg-transparent w-full min-w-0 text-sm"
            placeholder="جستجو"
          />
        </div>
        <div className="flex items-center gap-3 mr-auto lg:mr-0 lg:gap-0">
          <img
            src={icon1}
            alt="bell"
            className="w-5.5 h-6.75 cursor-pointer lg:ml-4 shrink-0"
          />
          <div className="border border-[#ebebec] flex items-center p-2 lg:p-3 rounded-md gap-2 lg:ml-3 cursor-pointer whitespace-nowrap">
            <img src={icon2} alt="login" className="shrink-0" />
            <h1 className="text-xs sm:text-sm">ورود | ثبت نام</h1>
          </div>
          <div className="hidden lg:block w-px h-6 bg-[#e0e0e2] ml-4"></div>
          <img src={icon4} alt="cart" className="cursor-pointer shrink-0" />
        </div>
      </div>
      <div className="hidden lg:flex w-full min-h-10 items-center justify-between p-3">
        <div className="flex items-center min-w-0">
          <div
            className="relative ml-3 z-100 shrink-0"
            onMouseEnter={() => {
              setMenuOpen(true);

              if (menuItems.length > 0) {
                setActiveMenu(menuItems[0].id);
              }
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
          >
            <div className="flex items-center cursor-pointer whitespace-nowrap">
              <img src={icon5} alt="category" />
              <h1 className="text-[14px]">دسته‌بندی کالا‌ها</h1>
            </div>
            {menuOpen && menuItems.length > 0 && (
              <div
                className="absolute top-full right-0 pt-3 w-[min(1000px,90vw)] xl:w-250 h-125 bg-white border border-[#e5e5e5] rounded-b-xl shadow-lg z-100 overflow-hidden"
                onMouseEnter={() => setMenuOpen(true)}
              >
                <div className="flex h-full">
                  <div className="w-55 shrink-0 h-full border-l border-[#e5e5e5] bg-white overflow-y-scroll [direction:ltr]">
                    <div dir="rtl" className="py-3">
                      {menuItems.map((item) => (
                        <div
                          key={item.id}
                          onMouseEnter={() => {
                            setActiveMenu(item.id);
                          }}
                          className={`px-5 py-3 text-[13px] cursor-pointer transition ${
                            activeMenu === item.id
                              ? "bg-[#f5f5f5] text-red-600"
                              : "text-[#424750] hover:bg-[#f5f5f5]"
                          }`}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 h-full overflow-y-scroll [direction:ltr]">
                    <div dir="rtl" className="p-6">
                      {menuItems
                        .filter((item) => item.id === activeMenu)
                        .map((item) => (
                          <div key={item.id}>
                            <a
                              href={item.topLink.url}
                              className="inline-block mb-6 text-[13px] font-bold text-blue-900"
                            >
                              {item.topLink.title} ←
                            </a>
                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8">
                              {item.columns.map((column, index) => (
                                <div key={index} className="min-w-0">
                                  <h3 className="mb-4 border-r-2 border-red-500 pr-2 text-[13px] font-bold text-[#232933]">
                                    {column.title}
                                  </h3>
                                  {column.sections?.map(
                                    (section, sectionIndex) => (
                                      <div key={sectionIndex} className="mb-5">
                                        {section.title !== column.title && (
                                          <h4 className="mb-2 text-[12px] font-semibold text-[#424750]">
                                            {section.title}
                                          </h4>
                                        )}

                                        <div className="flex flex-col gap-2">
                                          {section.items?.map((product) => (
                                            <a
                                              key={product.url}
                                              href={product.url}
                                              className="text-[12px] text-[#81858b] hover:text-red-500 transition"
                                            >
                                              {product.title}
                                            </a>
                                          ))}
                                        </div>
                                      </div>
                                    ),
                                  )}
                                  {column.items?.map((product) => (
                                    <a
                                      key={product.url}
                                      href={product.url}
                                      className="block mb-2 text-[12px] text-[#81858b] hover:text-red-500 transition"
                                    >
                                      {product.title}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-px h-5 bg-[#e0e0e2] ml-3 shrink-0"></div>
          <div className="flex items-center gap-1 ml-3 cursor-pointer whitespace-nowrap shrink-0">
            <img src={icon6} alt="amazings" className="w-5 h-5" />
            <h1 className="text-[12px]">شگفت انگیز‌ها</h1>
          </div>
          <div className="flex items-center gap-1 ml-3 cursor-pointer whitespace-nowrap shrink-0">
            <img src={icon7} alt="supermarket" className="w-5 h-5" />
            <h1 className="text-[12px]">سوپرمارکت</h1>
          </div>
          <div className="hidden xl:flex items-center gap-1 ml-3 cursor-pointer whitespace-nowrap shrink-0">
            <img
              src={icon8}
              alt="Digital gold and silver"
              className="w-5 h-5"
            />
            <h1 className="text-[12px]">طلا و نقره دیجیتال</h1>
          </div>
          <div className="hidden xl:flex items-center gap-1 ml-3 cursor-pointer whitespace-nowrap shrink-0">
            <img src={icon11} alt="Best-sellers" className="w-5 h-5" />
            <h1 className="text-[12px]">پرفروش‌ترین‌ها</h1>
          </div>
          <div className="hidden 2xl:flex items-center gap-1 ml-3 cursor-pointer whitespace-nowrap shrink-0">
            <img src={icon9} alt="digi-style" className="w-5 h-5" />
            <h1 className="text-[12px]">دیجی‌استایل</h1>
          </div>
          <div className="hidden 2xl:block w-px h-5 bg-[#e0e0e2] ml-3 shrink-0"></div>
          <div className="hidden 2xl:flex cursor-pointer whitespace-nowrap shrink-0">
            <h1 className="text-[12px]">در دیجی‌کالا بفروشید!</h1>
          </div>
        </div>
        <div className="hidden xl:flex w-35 h-10 bg-[#fff6ec] rounded-full p-2 items-center justify-center gap-2 cursor-pointer shrink-0">
          <img src={icon10} alt="location" />
          <h1 className="text-[#f58141] whitespace-nowrap">انتخاب آدرس</h1>
        </div>
      </div>
      <div className="lg:hidden w-full border-t border-[#e0e0e2] px-3 py-2">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 py-2 cursor-pointer"
          >
            <span className="text-xl leading-none">
              {mobileMenuOpen ? "✕" : "☰"}
            </span>
            <span className="text-sm font-medium">دسته‌بندی کالا‌ها</span>
          </button>
          <div className="flex items-center gap-1 bg-[#fff6ec] rounded-full px-3 py-2 cursor-pointer">
            <img src={icon10} alt="location" className="w-4 h-4" />
            <span className="text-xs text-[#f58141] whitespace-nowrap">
              انتخاب آدرس
            </span>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mt-2 border border-[#e5e5e5] rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="max-h-80 overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMenu(activeMenu === item.id ? null : item.id)
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm text-right border-b border-[#f0f0f0] ${
                      activeMenu === item.id
                        ? "bg-[#f5f5f5] text-red-600"
                        : "text-[#424750]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <span>{activeMenu === item.id ? "−" : "+"}</span>
                  </button>
                  {activeMenu === item.id && (
                    <div className="p-4 bg-white">
                      <a
                        href={item.topLink.url}
                        className="block mb-4 text-sm font-bold text-red-600"
                      >
                        {item.topLink.title} ←
                      </a>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {item.columns.map((column, index) => (
                          <div key={index} className="min-w-0">
                            <h3 className="mb-3 border-r-2 border-red-500 pr-2 text-sm font-bold text-[#232933]">
                              {column.title}
                            </h3>
                            {column.sections?.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-4">
                                {section.title !== column.title && (
                                  <h4 className="mb-2 text-xs font-semibold text-[#424750]">
                                    {section.title}
                                  </h4>
                                )}
                                <div className="flex flex-col gap-3">
                                  {section.items?.map((product) => (
                                    <a
                                      key={product.url}
                                      href={product.url}
                                      className="text-xs text-[#81858b] hover:text-red-500"
                                    >
                                      {product.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {column.items?.map((product) => (
                              <a
                                key={product.url}
                                href={product.url}
                                className="block mb-3 text-xs text-[#81858b] hover:text-red-500"
                              >
                                {product.title}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-25 gap-y-4 py-4 border-t border-[#f0f0f0]">
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <img src={icon6} alt="amazings" className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              شگفت انگیز‌ها
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <img src={icon7} alt="supermarket" className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              سوپرمارکت
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <img src={icon8} alt="gold" className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              طلا و نقره دیجیتال
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <img src={icon11} alt="Best-sellers" className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              پرفروش‌ترین‌ها
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <img src={icon9} alt="digi-style" className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm whitespace-nowrap">
              دیجی‌استایل
            </span>
          </div>
          <div className="flex items-center gap-2 min-w-0 cursor-pointer">
            <span className="text-xs sm:text-sm text-[#424750] whitespace-nowrap">
              در دیجی‌کالا بفروشید!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
