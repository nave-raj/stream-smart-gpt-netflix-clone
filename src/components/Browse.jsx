import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/store/movieSlice';
import MovieCollectionContainer from './MovieCollectionContainer';

const Browse = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovieList = () => {
        const movieData = fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
                          .then((response) => response.json())
                          .then((response) => {
                            console.log(response);
                            dispatch(addNowPlayingMovies(response.results));
                           }).catch((err) => console.error(err));
    }

    useEffect(()=> {
        getNowPlayingMovieList();
    }, []);

    return (
        <>
            <NavBar />
            <MovieCollectionContainer />
        </>
    )
}

export default Browse