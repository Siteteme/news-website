import sun from "../../assets/img/sun-fog.png";
const Sun = () => {
  return (
    <div className="hidden md:flex ml-4 ">
      <div className="flex flex-col justify-start items-start ml-2">
        <span className="text-sm">۴۶°C شهر اهواز </span>
        <span className="text-gray-300  text-sm">هــوا خیلی گـرمه</span>
      </div>
      <div>
        <img src={sun} alt="" className="mt-1" />
      </div>
    </div>
  );
};

export default Sun;
