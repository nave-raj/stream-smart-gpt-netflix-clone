import { useSelector } from "react-redux";
import MovieContainer from "../MovieContainer";

const GptMovieRecommendations = () => {
  const { movieNames, movieResults } = useSelector((store) => store.search);
  if(!movieNames)
    return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movie, index) => (
           <MovieContainer title={movie} movieList={movieResults[index]}/>
        ))}
      </div>
    </div>
  );
};
export default GptMovieRecommendations;