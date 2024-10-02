import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_OPTIONS } from '../../utils/constant';
import language from '../../utils/lang-constant';

import { addGptMovieResult } from "../../utils/store/searchSlice"

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const searchVal = useRef(null);
  const selectedLanguage = useSelector((store) => store.search?.selectedLanguage);

  const searchMovieInTMDB = async (movie) => {
    const promise = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await promise.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const query = searchVal.current.value;

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-small-128k-online",
        messages: [
          { role: "system", content: "Be precise and concise." },
          { role: "user", content: `Generate a comma-separated movie suggestion list for the query "${query}". Provide only 5 movie names.` },
        ],
        temperature: 0.2,
        top_p: 0.9,
        return_citations: true,
        search_domain_filter: ["perplexity.ai"],
        return_images: false,
        return_related_questions: false,
        search_recency_filter: "month",
        top_k: 0,
        stream: false,
        presence_penalty: 0,
        frequency_penalty: 1,
      }),
    };

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', options);
      const data = await response.json();
      if (data.choices) {
        const results = data.choices[0].message.content;
        const movieArray = results.split(",").map(movie => movie.trim());
        const searchPromiseArray = movieArray.map(movie => searchMovieInTMDB(movie));
        const movieResults = await Promise.all(searchPromiseArray);
        console.log(movieResults);
        dispatch(addGptMovieResult({ movieNames: movieArray, movieResults: movieResults }));
      } else {
        console.error('No choices found in response:', data);
      }
    } catch (error) {
      console.error('Error fetching from Perplexity AI:', error);
    }
  };

  return (
    <div className='pt-[10%] flex justify-center absolute z-3'>
      <form className='bg-black p-4 m-4 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={language[selectedLanguage].gptSearchPlaceholder}
          ref={searchVal}
          className='p-4 m-4 col-span-9'
        />
        <button className="p-4 m-4 bg-red-700 text-white rounded-lg" onClick={handleSearchClick}>
          {language[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
