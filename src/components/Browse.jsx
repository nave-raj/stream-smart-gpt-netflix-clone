import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/store/movieSlice';
import MovieCollectionContainer from './MovieCollectionContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchPage from './GPTSearch/GptSearchPage';


const Browse = () => {

    const isGptSearchPage = useSelector((store) => store.search?.isGptSearchPage);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();


    return (
        <>
            <NavBar />
            {isGptSearchPage ? <GptSearchPage /> : <MovieCollectionContainer />}
        </>
    )
}

export default Browse