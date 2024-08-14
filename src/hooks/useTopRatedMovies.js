import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { addTopRatedMovies } from '../utils/store/movieSlice';

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovieList = async () => {
        const movieData = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', API_OPTIONS)
                          .then((response) => response.json())
                          .catch((err) => console.error(err));
        const results = await movieData.results;
        dispatch(addTopRatedMovies(results));
    }

    useEffect( () => {
        getTopRatedMovieList();
    }, [])
}

export default useTopRatedMovies;