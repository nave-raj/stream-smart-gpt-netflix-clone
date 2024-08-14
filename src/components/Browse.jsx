import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/store/movieSlice';
import MovieCollectionContainer from './MovieCollectionContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

    const dispatch = useDispatch();
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();


    return (
        <>
            <NavBar />
            <MovieCollectionContainer />
        </>
    )
}

export default Browse