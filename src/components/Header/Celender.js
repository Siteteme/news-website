import CelenderImg from "../../assets/img/calendar.png";
const Celender = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-col justify-start items-start ml-2">
        <span className=" text-sm">شنبه ۲۲ اردیبهشت ۱۴۰۲</span>
        <span className="text-gray-300 text-[13px]">Wednesday 12 May 2023</span>
      </div>
      <div>
        <img src={CelenderImg} alt="Celender" className="mt-1" />
      </div>
    </div>
  );
};

export default Celender;
