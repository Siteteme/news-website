import banner from "../../../assets/img/banner.png";
import arrowSlider from "../../../assets/img/arrow-slider.png";
const Slider = () => {
  return (
    <section className="flex gap-2  ">
      <div className="w-[88px] ">
        <img
          src={banner}
          alt="banner"
          className="h-[220px] object-cover rounded-[10px] relative "
        />
      </div>
      <div className="w-[88px] ">
        <img
          src={banner}
          alt="banner"
          className="h-[220px] object-cover  rounded-[10px] opacity-10    "
        />
      </div>
      <div className="w-[450px] relative  ">
        <img
          src={banner}
          alt="banner"
          className="h-[220px] object-cover rounded-[10px] w-full "
        />
        <div className="flex justify-between items-center w-auto m-auto bg-[rgba(0,0,0,0.5)] p-2 rounded  backdrop-blur-[6px] relative bottom-14 mx-4 border text-sm cursor-pointer">
          <span className="text-white">
            زیــبا ترین مناطق تاریخی ایــران را بــشناســید
          </span>
          <img src={arrowSlider} alt="arrow-slider" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
