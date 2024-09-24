import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant';

const MovieCard = (props) => {
  const { thumbnail, onClick} = props;
  
  if(!thumbnail) return null;
  return (
        <img src={POSTER_IMG_URL + thumbnail} alt='thumbnail' className='pr-4 cursor-pointer' onClick={onClick}/>
  )
}

export default MovieCard