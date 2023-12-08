const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute ml-40 mt-72 w-3/12 z-10">
      <h1 className="font-bold text-6xl my-8 text-white">{title}</h1>
      <p className="text-xl mb-5 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black px-6 py-[6px] mr-2 font-semibold text-md rounded-md hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-[6px] bg-opacity-50 font-semibold text-md rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
