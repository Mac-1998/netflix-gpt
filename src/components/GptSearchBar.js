import { useSelector } from "react-redux";
import lang from "../utils/languageConstats";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md bg-opacity-70">
        <input
          className="m-4 col-span-10 rounded-md focus:outline-none p-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-3 px-4 bg-red-700 text-white rounded-md col-span-2 mt-4 mr-4 mb-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
