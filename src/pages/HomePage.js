import ManagerNews from "../components/HomePageComponents/Intro/ManagerNews";
import Slider from "../components/HomePageComponents/Intro/Slider";
import TitleSection from "../components/TitleSection";

const HomePage = () => {
  return (
    <>
      <TitleSection title=" اخبار دسته اول" />
      <section className="container m-auto flex justify-between mt-16 gap-6">
        <div className="w-2/3  flex-1">
          <Slider />
        </div>
        <div className="w-1/3">
          <ManagerNews />
        </div>
        <div className="w-1/3 ">به روز ترین قیمت</div>
      </section>
    </>
  );
};

export default HomePage;
