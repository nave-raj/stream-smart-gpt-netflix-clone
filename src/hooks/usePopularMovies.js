import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { addPopularMovies } from '../utils/store/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovieList = async () => {
        const movieData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
                          .then((response) => response.json())
                          .catch((err) => console.error(err));
        const results = await movieData.results;
        dispatch(addPopularMovies(results));
    }

    useEffect( () => {
        getPopularMovieList();
    }, [])
}

export default usePopularMovies;