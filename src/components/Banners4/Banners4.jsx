import image74 from "../../assets/images/image74.jpg";
import image75 from "../../assets/images/image75.jpg";
const Banners4 = () => {
  return (
    <>
      <div className="w-326 h-78.25 mx-auto mt-5 flex gap-4 max-xl:w-full! max-xl:h-auto! max-xl:grid max-xl:grid-cols-1 sm:max-xl:grid-cols-2 max-xl:gap-3 max-xl:px-3">
        <img
          src={image74}
          alt="shooyandeye Bingo"
          className="w-160.5 h-64.25 rounded-2xl cursor-pointer max-xl:w-full! max-xl:h-auto!"
        />

        <img
          src={image75}
          alt="zoroofe aroos"
          className="w-160.5 h-64.25 rounded-2xl cursor-pointer max-xl:w-full! max-xl:h-auto!"
        />
      </div>
    </>
  );
};

export default Banners4;
