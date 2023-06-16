import HeaderBottomIcon from "./HeaderBottomIcon";
import Navbar from "./Navbar";

const HeaderBottom = () => {
  return (
    <section className="border-b-[1px] border-gray-100 ">
      <section className="  flex items-center justify-between container m-auto">
        <Navbar />
        <HeaderBottomIcon />
      </section>
    </section>
  );
};

export default HeaderBottom;
