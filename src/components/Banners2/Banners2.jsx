import image15 from "../../assets/images/image15.jpg";
import image16 from "../../assets/images/image16.jpg";
import image17 from "../../assets/images/image17.jpg";
import image18 from "../../assets/images/image18.jpg";
const Banners2 = () => {
  return (
    <>
      <div className="w-326 h-59 flex mx-auto gap-4 mt-10 max-xl:w-full! max-xl:h-auto! max-xl:grid! max-xl:grid-cols-2 max-xl:gap-3 max-xl:px-3">
        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image15}
            alt="Mashhad Leather"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image16}
            alt="golrang shampoo"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image17}
            alt="Bingo detergent"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>

        <div className="w-78.25 h-58.75 max-xl:w-full! max-xl:h-auto! min-w-0">
          <img
            src={image18}
            alt="nourita"
            className="rounded-2xl cursor-pointer max-xl:w-full max-xl:h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Banners2;
