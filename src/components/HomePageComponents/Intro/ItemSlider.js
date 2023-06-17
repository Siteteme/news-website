import banner from "../../../assets/img/banner.png";
import arrowSlider from "../../../assets/img/arrow-slider.png";
const ItemSlider = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-[88px] before:transition-all h-fit relative before:bg-black before:overflow-hidden overflow-hidden before:absolute before:w-full before:h-full before:rounded-[10px] before:bg-opacity-60">
          <img
            src={banner}
            alt="banner"
            className="h-[220px] object-cover  rounded-[10px]  "
          />
        </div>
        <div className="relative bottom-[50px] flex flex-col items-center">
          <img
            src={arrowSlider}
            alt="arrow-slider"
            className="w-full max-w-fit"
          />
          <hr className="w-[85%] bg-white h-[1px] mt-2 mx-2" />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-[88px] before:transition-all h-fit relative before:bg-black before:overflow-hidden overflow-hidden before:absolute before:w-full before:h-full before:rounded-[10px] before:bg-opacity-60">
          <img
            src={banner}
            alt="banner"
            className="h-[220px] object-cover  rounded-[10px]  "
          />
        </div>
        <div className="relative bottom-[50px] flex flex-col items-center">
          <img
            src={arrowSlider}
            alt="arrow-slider"
            className="w-full max-w-fit"
          />
          <hr className="w-[85%] bg-white h-[1px] mt-2 mx-2" />
        </div>
      </div>

      <div className="w-full md:w-[450px] relative ">
        <img
          src={banner}
          alt="banner"
          className="h-[220px] object-cover rounded-[10px] w-full "
        />
        <div className="flex justify-between items-center w-auto m-auto bg-[rgba(0,0,0,0.5)] p-2 rounded  backdrop-blur-[6px] relative bottom-[50px] mx-4 border text-sm cursor-pointer">
          <span className="text-white text-xs md:text-base">
            زیــبا ترین مناطق تاریخی ایــران را بــشناســید
          </span>
          <img
            src={arrowSlider}
            alt="arrow-slider"
            className="w-full max-w-fit"
          />
        </div>
      </div>
    </>
  );
};

export default ItemSlider;
