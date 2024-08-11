import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/store/movieSlice';
import MovieCollectionContainer from './MovieCollectionContainer';

const Browse = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovieList = () => {
        const movieData = fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
                          .then((response) => response.json())
                          .then((response) => {
                                dispatch(addNowPlayingMovies(response.results));
                           }).catch((err) => console.error(err));
    }

    const getTopRatedMovieList = () => {
        const topRatedMovieList = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
                                .then((response) => response.json())
                                .then((response) => {
                                    dispatch(addTopRatedMovies(response.results));
                                }).catch((err) => console.error(err));
    }

    const getPopularMovieList = () => {
        const popularMovieList = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
                                .then((response) => response.json())
                                .then((response) => {
                                    dispatch(addPopularMovies(response.results));
                                }).catch((err) => console.error(err));
    }

    const getUpcomingMovieList = () => {
        const upcomingMovieList = fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3', API_OPTIONS)
                                .then((response) => response.json())
                                .then((response) => {
                                    dispatch(addUpcomingMovies(response.results));
                                }).catch((err) => console.error(err));
    }

    useEffect(()=> {
        getNowPlayingMovieList();
        getPopularMovieList();
        getTopRatedMovieList();
        getUpcomingMovieList();
    }, []);

    return (
        <>
            <NavBar />
            <MovieCollectionContainer />
        </>
    )
}

export default Browse