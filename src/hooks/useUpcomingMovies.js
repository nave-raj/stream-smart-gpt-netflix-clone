import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { addUpcomingMovies } from '../utils/store/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMoviesList = async () => {
        const movieData = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
                          .then((response) => response.json())
                          .catch((err) => console.error(err));
        const results = await movieData.results;
        dispatch(addUpcomingMovies(results));
    }

    useEffect( () => {
        getUpcomingMoviesList();
    }, [])
}

export default useUpcomingMovies;