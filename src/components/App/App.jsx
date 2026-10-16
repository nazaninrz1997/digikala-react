import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import Amazing from "../Amazing/Amazing";
import Banners from "../Banners/Banners";
import Sendbyaddress from "../Sendbyaddress/Sendbyaddress";
import Banners2 from "../Banners2/Banners2";
import Amazing2 from "../Amazing2/Amazing2";
import Categories from "../Categories/Categories";
import Banners3 from "../Banners3/Banners3";
import PhonecaseCategory from "../PhonecaseCategory/PhonecaseCategory";
import Banners4 from "../Banners4/Banners4";
import PenCategory from "../PenCategory/PenCategory";
import PopularBrands from "../PopularBrands/PopularBrands";
import Bestsales from "../Bestsales/Bestsales";
import Hottestproducts from "../Hottestproducts/Hottestproducts";
import Footer from "../Footer/Footer";
import Fixed from "../Fixed/Fixed";

import Incredible from "../../Pages/Incredible";
import Incredible2 from "../../Pages/Incredible2";

const Home = () => {
  return (
    <div className="bg-white w-full h-full box-border mx-auto">
      <Header />
      <Slider />
      <Features />
      <Amazing />
      <Banners />
      <Sendbyaddress />
      <Banners2 />
      <Amazing2 />
      <Categories />
      <Banners3 />
      <PhonecaseCategory />
      <Banners4 />
      <PenCategory />
      <PopularBrands />
      <Bestsales />
      <Hottestproducts />
      <Footer />
      <Fixed/>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incredible" element={<Incredible />} />
        <Route path="/amazing2" element={<Incredible2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;