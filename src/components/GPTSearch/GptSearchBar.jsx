import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center absolute z-3'>
        <form className='bg-black p-4 m-4 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search' value='' className='p-4 m-4 col-span-9'/>
            <button className="p-4 m-4 bg-red-700 text-white rounded-lg">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar