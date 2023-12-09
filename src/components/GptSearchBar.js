import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstats";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const searchtext = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query: " +
    //   searchtext.current.value +
    //   ". Only gove me names of 5 movies, comma seperated like the example result given ahaead. Example Result: Koi mil gaya, Tiger, Animal, Don, Golmaal";

    // const getResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(getResults.choices);

    const gptMovies = searchtext.current.value.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[45%]  md:pt-[7%] flex justify-center">
      <form
        className="w-10/12 md:w-1/2 bg-black grid grid-cols-12 rounded-md bg-opacity-70"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchtext}
          className="m-4 col-span-9 md:col-span-10 rounded-md focus:outline-none p-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-1 md:py-2 px-2 bg-red-700 text-white rounded-md col-span-3 mt-4 mr-4 mb-4 md:col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
