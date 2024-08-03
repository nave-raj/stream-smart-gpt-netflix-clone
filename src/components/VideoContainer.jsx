import React from 'react'

const VideoContainer = (props) => {
  const { title, overview } = props;  
  return (
    <div className='pt-[15%] px-14 py-20 bg-gradient-to-r from-black absolute text-white w-screen aspect-video'>
        <h1 className='font-bold text-5xl py-6 w-1/2'>{title}</h1>
        <p className='w-1/2'>{overview}</p>
        <div className='pt-10 justify-between'>
            <button className='bg-black text-white p-3 px-10'>Play</button>
            <button className='bg-black text-white p-3 px-10'>More Info</button>
        </div>
    </div>
  )
}

export default VideoContainer