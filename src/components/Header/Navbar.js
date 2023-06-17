import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <ul className=" items-center justify-start hidden md:flex ">
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-thin hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent">
          <Link to="/">صفحه نخست</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent">
          <Link>جامعه</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>اقتصاد</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>سیاست</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>علم و پیشرفت </Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>فرهنگ</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>هنر و رسانه</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>استانها</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>ورزش</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>عکس</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link>فیلم</Link>
        </li>
        <li className="ml-4 h-full text-[#CBCBCB] md:text-[10px] lg:text-sm 2xl:text-lg hover:border-b-2 hover:border-[#FEA000] font-light hover:text-[#FEA000] transition-all py-4 border-b-2 border-transparent hover:">
          <Link to="/about-us">درباره ما</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
