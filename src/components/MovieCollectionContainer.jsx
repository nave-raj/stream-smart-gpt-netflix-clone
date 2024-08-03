import React from 'react'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import TrailerContainer from './TrailerContainer';

const MovieCollectionContainer = () => {

  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies); 

  if(!nowPlayingMovies){
    return;
  }
  
  const thumbnailMovieData= nowPlayingMovies[0];
  const { title, overview, id } = thumbnailMovieData;
  console.log(thumbnailMovieData);

  return (
    <div>
        <VideoContainer title={title} overview={overview}/>
        <TrailerContainer movieId={id} />
    </div>
  )
}

export default MovieCollectionContainer