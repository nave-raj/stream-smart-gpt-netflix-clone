import React from 'react'
import { BACKGROUND } from '../../utils/constant'
import GptSearchBar from './GptSearchBar'
import GptMovieRecommendations from './GptMovieRecommendations'

const GptSearchPage = () => {
  return (
    <div>
        <img src={BACKGROUND} alt='background' className='w-screen absolute -z-10' />
        <div className='relative flex flex-col items-stretch'> {/* Adjust padding for spacing */}
          <GptSearchBar />
        </div>
        <GptMovieRecommendations />
    </div>
  )
}

export default GptSearchPage