import React from 'react';

import useFetch from '../hooks/useFetch';
import OnScope from './OnScope';
import DataContainer from './DataContainer';

const Home = () => {

  const onScope = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const trendingMovie = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const trendingTv = useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');

  const randomMovie = onScope[Math.floor(Math.random() * 10)];

  return (
    <>
      {randomMovie && (
        <OnScope results={randomMovie} id={randomMovie.id} mediaType={'movie'}/>
      )}

      <DataContainer resultsTrending={trendingMovie} titulo={'Películas que son tendencia'} categoria={'trending'} tipo={'movie'} tiempo={'week'}/>
      <DataContainer resultsTrending={trendingTv} titulo={'Series que son tendencia'} categoria={'trending'} tipo={'tv'} tiempo={'week'}/>
    </>
  );
}

export default Home;
