import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND } from '../../utils/constant'

const GptSearchPage = () => {
  return (
    <>
        <div className='text-white'>GptSearchPage</div>
        <img src={BACKGROUND} alt='background' className='w-screen absolute -z-10' />
        <GptSearchBar />
    </>
  )
}

export default GptSearchPage