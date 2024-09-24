import MovieCard from "./MovieCard";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-5 max-w-4xl w-full flex">
        <div className="flex-none">
          <MovieCard key={movie.id} thumbnail={movie.poster_path} />
        </div>
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-bold mb-2 text-white">{movie.title}</h2>
          <p className="mb-4 text-gray-300">{movie.overview}</p>
          <button 
            onClick={onClose} 
            className="mt-4 bg-red-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
