import image11 from "../../assets/images/image11.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image14 from "../../assets/images/image14.jpg";
const Banners = () => {
  return (
    <>
      <div className="w-326 h-59 flex mx-auto gap-4 mt-10 max-xl:w-full! max-xl:h-auto! max-xl:grid! max-xl:grid-cols-2 max-xl:gap-3 max-xl:px-3">
        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image11}
            alt="laptop"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image12}
            alt="gold"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image13}
            alt="parsis gold"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image14}
            alt="collagen gold"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Banners;
