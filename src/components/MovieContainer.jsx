import React from 'react'
import MovieCard from './MovieCard'

const MovieContainer = (props) => {
  const {title, movieList} = props

  return (
    <div>
        <h3 className='text-3xl p-5 text-white font-bold py-6'>{title}</h3>
        <div className='flex p-5'>
            <div className='flex overflow-x-scroll scrollbar-black'>
                {movieList?.map((movie) => (
                    <MovieCard key={movie.id} thumbnail={movie.poster_path} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieContainer