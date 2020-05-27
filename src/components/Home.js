import React from 'react';
import useFetch from '../hooks/useFetch';

import OnScope from './OnScope';
import DataContainer from './DataContainer';

const Home = () => {

  const onScope = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  const genres = useFetch('https://api.themoviedb.org/3/genre/movie/list?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const trendingMovie = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const trendingTv = useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  

  return (
    <>
      <OnScope results={onScope[Math.floor(Math.random() * 10)]} genres={onScope.results.genre_ids}/>
      <DataContainer results={trendingMovie} titulo={'Películas que son tendencia'} categoria={'trending'} tipo={'movie'} id={'id'}/>
      <DataContainer results={trendingTv} titulo={'Series que son tendencia'} categoria={'trending'} tipo={'tv'} id={'id'}/>
    </>
  );
}

export default Home;
