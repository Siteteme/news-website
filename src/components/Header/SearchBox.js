const SearchBox = () => {
  return (
    <div className="search-ele mt-4 p-2  bg-slate-100 flex items-center justify-center w-4/12 mx-auto absolute left-0 rounded-full ">
      <form className="flex items-center bg-white w-full rounded-full  ">
        <input
          type="text"
          placeholder="جستجو در اخبار .... "
          className="py-2  flex-1 px-4 outline-none rounded-full"
        />
        <input
          type="submit"
          value="جستجو کن"
          className="bg-blue-200 h-full block py-2 px-4 text-blue-500  outline-none hover:bg-blue-500 hover:text-white transition-all rounded-full"
        />
      </form>
    </div>
  );
};

export default SearchBox;
