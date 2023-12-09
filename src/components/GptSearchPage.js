import GptSearchBar from "./GptSearchBar";
import { BACKGROUD_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="brightness-50 h-screen w-screen object-cover"
          src={BACKGROUD_IMG}
          alt="background"
        />
      </div>
      <div className="md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
