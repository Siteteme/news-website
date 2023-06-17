// import iconNewsLeft from "../../../assets/img/arrow-left-news.png";

import manegerImg from "../../../assets/img/Manager-img.png";
const ManagerNews = () => {
  return (
    <section className="border border-gray-300 rounded-[10px] overflow-hidden flex flex-col  justify-center flex-wrap">
      <div className="bg-[#C6DBFF] text-center">
        <h3 className="text-[#0049C6] py-3 ">پیشنهاد سر دبیر</h3>
      </div>
      <div className="text-center rounded my-2 w-full">
        <img
          src={manegerImg}
          alt="Manager-news-img"
          className="text-center rounded mx-auto  w-[95%] object-cover  "
        />
      </div>
      <div className="self-right  ">
        <ul className="flex flex-col items-start justify-center my-2 mx-2">
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">
              راهبردهایی برای رفع ناترازی گاز در ایران
            </a>
          </li>
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">هوشمندسازی مصرف گاز و چند نکته</a>
          </li>
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">پالایشگاه در مسیر پتروپالایشی شدن</a>
          </li>
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">
              «عمل به وعده»، سرلوحه عملکرد وزیر نفت
            </a>
          </li>
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">چرا ایران واردکننده بنزین شد؟</a>
          </li>
          <li className="before:content-['->'] relative before:absolute before:right-0 px-5 text-[12px] odd:bg-[#F9F9F9] w-full py-2 font-medium hover:shadow-md hover:shadow-[#C6DBFF] rounded  hover:text-[#0049C6]  hover:bg-[#C6DBFF] line leading-7">
            <a href="https://googel.com">
              راهبردهایی برای رفع ناترازی گاز در ایران
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ManagerNews;
