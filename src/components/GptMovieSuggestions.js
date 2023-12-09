import { useSelector } from "react-redux";
import MoviList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-2 md:p-6 mx-4 md:mx-14 my-5 md:my-8 bg-black text-white bg-opacity-60 rounded-md">
      <div>
        {movieNames.map((movieName, i) => (
          <MoviList
            key={movieName}
            title={movieName.charAt(0).toUpperCase() + movieName.slice(1)}
            movies={movieResults[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
