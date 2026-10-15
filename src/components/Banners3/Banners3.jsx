import image57 from "../../assets/images/image57.jpg";
import image58 from "../../assets/images/image58.jpg";
const Banners3 = () => {
  return (
    <>
      <div className="w-326 h-78.25 mx-auto mt-12 flex gap-4 max-xl:w-full! max-xl:h-auto! max-xl:grid max-xl:grid-cols-1 sm:max-xl:grid-cols-2 max-xl:gap-3 max-xl:px-3">
        <img
          src={image57}
          alt="mesvak iClean"
          className="w-160.5 h-64.25 rounded-2xl cursor-pointer max-xl:w-full! max-xl:h-auto!"
        />

        <img
          src={image58}
          alt="Voche"
          className="w-160.5 h-64.25 rounded-2xl cursor-pointer max-xl:w-full! max-xl:h-auto!"
        />
      </div>
    </>
  );
};

export default Banners3;
