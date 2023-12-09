import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 md:w-48 pr-4  cursor-pointer md:hover:w-44 md:hover:h-60">
      <img src={IMG_CDN + posterPath} alt="movie-poster" className="h-full" />
    </div>
  );
};

export default MovieCard;
