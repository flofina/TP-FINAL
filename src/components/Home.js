import React from 'react';
import useFetch from '../hooks/useFetch';

import Recommended from './Recommended';
import DataContainer from './DataContainer';

const Home = () => {

  const recommendedFetch = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  const genres = useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const movieFetch = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const tvFetch = useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  
  return (
    <>
      <Recommended results={recommendedFetch[Math.floor(Math.random() * 10)]} genres={genres}/>
      <DataContainer results={movieFetch} titulo='Películas que son tendencia' />
      <DataContainer results={tvFetch} titulo='Series que son tendencia' />
    </>
  );
}

export default Home;
