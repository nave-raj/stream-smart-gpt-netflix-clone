import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/store/movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovieList = async () => {
        const movieData = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
                          .then((response) => response.json())
                          .catch((err) => console.error(err));
        const results = await movieData.results;
        dispatch(addNowPlayingMovies(results));
    }

    useEffect( () => {
        getNowPlayingMovieList();
    }, [])
}

export default useNowPlayingMovies;