import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerMovieData } from '../utils/store/movieSlice';

const TrailerContainer = (props) => {

  const dispatch = useDispatch();
  
  const {movieId} = props;
  const trailerMovieData = useSelector((store) => store.movies?.trailerMovieData);

  const getMovieVideos = () => {
    const data = fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
                 .then((response) => response.json())
                 .then((data) => {
                    const filterData = data.results.filter((video) => video.type === "Trailer");
                    const trailer = filterData.length ? filterData[0] : data.results[0];
                    dispatch(addTrailerMovieData(trailer));
                 })
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
        <iframe 
            src={'https://www.youtube.com/embed/' + trailerMovieData?.key + "?&autoplay=1&mute=1"}
            className='w-screen aspect-video'
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export default TrailerContainer