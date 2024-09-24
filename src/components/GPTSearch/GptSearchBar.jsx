import React, { useRef } from 'react'
import { gptClient } from '../../utils/gpt-constant';
import { API_OPTIONS } from '../../utils/constant';

const GptSearchBar = () => {

  const searchVal = useRef(null);

  const searchMovieInTMDB = async(movie) => {
    const promise = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await promise.json();
    return json.results;
  }

  const handleSearchClick = async () => {
    console.log(searchVal.current.value);
    const searchQuery =  "Generate a comma seperated movie suggession list for the query" + searchVal.current.value + ". Give the name of only 5 movies."
   
    /* using OpenAI to process the search text value and get the movie results */
    const openAIResults = await gptClient.chat.completions.create({
      messages: [{ role: 'user', content: searchQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(openAIResults.choices){
      const results = openAIResults.choices?.[0]?.message?.content;
      const movieArray = results.split(",");
      console.log(movieArray);
      const searchPromiseArray = movieArray.map((movie) => searchMovieInTMDB(movie));
      
    } else {
      //error page
    }

    console.log(openAIResults.choices);

  }

  return (
    <div className='pt-[10%] flex justify-center absolute z-3'>
        <form className='bg-black p-4 m-4 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Search' ref={searchVal} className='p-4 m-4 col-span-9'/>
            <button className="p-4 m-4 bg-red-700 text-white rounded-lg" onClick={handleSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar