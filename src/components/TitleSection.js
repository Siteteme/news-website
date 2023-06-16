import arrow from "../assets/img/Arrow.png";
const TitleSection = (props) => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between container m-auto">
        <h3 className="relative before:content-[''] before:absolute before:w-full before:h-3 before:bg-[#FFCA71] before:bottom-0  before:-z-50">
          {props.title}
        </h3>
        <div class="bg-gray-50 px-3 py-3 transition-all rounded-full hover:bg-gray-100">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
