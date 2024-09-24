import React from 'react'
import { useState} from 'react';
import MovieCard from './MovieCard'
import MovieDetails from './MovieDetails';

const MovieContainer = (props) => {
  const {title, movieList} = props;

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
        <h3 className='text-3xl p-5 text-white font-bold py-6'>{title}</h3>
        <div className='flex p-5'>
            <div className='flex overflow-x-scroll scrollbar-black'>
                {movieList?.map((movie) => (
                    <MovieCard key={movie.id} thumbnail={movie.poster_path} onClick = { () => handleMovieClick(movie)}/>
                ))}
            </div>
        </div>
      
        {selectedMovie && (
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
    </div>
  )
}

export default MovieContainer