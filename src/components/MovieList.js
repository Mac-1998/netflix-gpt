import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      {movies?.length !== 0 ? (
        <div className="flex no-scrollbar overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-red-600">No Movies Found</h1>
      )}
    </div>
  );
};

export default MovieList;
