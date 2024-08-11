import React from 'react'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import TrailerContainer from './TrailerContainer';
import MovieContainer from './MovieContainer';

const MovieCollectionContainer = () => {

  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  if(!nowPlayingMovies){
    return;
  }

  const thumbnailMovieData= nowPlayingMovies[0];
  const { title, overview, id } = thumbnailMovieData;
  console.log(thumbnailMovieData);

  return (
    <>
        <div>
            <VideoContainer title={title} overview={overview}/>
            <TrailerContainer movieId={id} />
        </div>
        <div>
            <div className='-mt-72 relative z-20 pl-10'>
                    <MovieContainer title={"Now Trending"} movieList={nowPlayingMovies}/>
                    <MovieContainer title={"Top Rated Movies"} movieList={topRatedMovies}/>
                    <MovieContainer title={"Popular Movies"} movieList={popularMovies}/>
                    <MovieContainer title={"Upcoming"} movieList={upcomingMovies}/>
            </div>
        </div>
    </>
  )
}

export default MovieCollectionContainer