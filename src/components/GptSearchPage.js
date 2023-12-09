import GptSearchBar from "./GptSearchBar";
import { BACKGROUD_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="brightness-50" src={BACKGROUD_IMG} alt="background" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
