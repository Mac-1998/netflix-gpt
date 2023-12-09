const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute ml-11 md:ml-40 mt-10 md:mt-72 w-4/12 md:w-3/12 z-10">
      <h1 className="font-bold text-2xl md:text-6xl my-8 text-white mb-3 md:mb-4">
        {title}
      </h1>
      <p className="hidden md:inline-block text-xl mb-5 text-white">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black px-4 md:px-6 py-[2px] md:py-[6px] mr-2 font-semibold md:text-lg rounded-md hover:opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white px-6 py-[6px] bg-opacity-50 font-semibold text-lg rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
