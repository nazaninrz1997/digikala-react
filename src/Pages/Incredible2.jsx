import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Incredible2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/amazingmobile")
      .then((response) => {
        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h1 className="text-lg md:text-2xl font-bold">
            شگفت‌انگیزهای سوپرمارکتی
          </h1>

          <Link to="/" className="text-sm text-[#d32f2f] whitespace-nowrap">
            بازگشت به صفحه اصلی
          </Link>
        </div>

        {loading ? (
          <p className="text-center py-10">در حال دریافت محصولات...</p>
        ) : error ? (
          <p className="text-center py-10 text-red-600">
            دریافت محصولات ناموفق بود. سرور را بررسی کنید.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {products.map((product) => (
              <div
                key={product.img}
                className="bg-white rounded-xl overflow-hidden p-3 cursor-pointer"
              >
                <img
                  src={
                    product.img?.startsWith("./")
                      ? product.img.replace("./", "/")
                      : product.img
                  }
                  alt={product.title}
                  className="w-full h-36 md:h-48 object-contain"
                />

                <p className="text-sm text-[#626865] line-clamp-2 min-h-10 mt-3">
                  {product.title}
                </p>

                <div className="flex items-center justify-between gap-1 mt-4">
                  <span className="bg-[#d32f2e] text-white text-xs rounded-xl px-2 py-1">
                    {product.discount}
                  </span>

                  <span className="text-xs text-[#626865] line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <div className="flex justify-end items-center gap-1 mt-3">
                  <span className="font-extrabold text-sm">
                    {product.newPrice}
                  </span>

                  <span className="text-xs text-[#626865]">تومان</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Incredible2;
