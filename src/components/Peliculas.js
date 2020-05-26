import React from 'react';
import useFetch from '../hooks/useFetch';

import DataContainer from './DataContainer';

const Peliculas = () => {

  const popular = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');
  const topRated = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');
  const upcoming = useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');
  const nowPlaying = useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');

  return (
    <>
      <DataContainer results={popular} titulo={'Películas populares'} categoria={'movie'} tipo={'popular'} />      
      <DataContainer results={topRated} titulo={'Películas con mejores críticas'} categoria={'movie'} tipo={'top_rated'} id={'id?'}/>
      <DataContainer results={upcoming} titulo={'Películas a estrenarse'} categoria={'movie'} tipo={'upcoming'} id={'id?'}/>
      <DataContainer results={nowPlaying} titulo={'Películas en cines'} categoria={'movie'} tipo={'now_playing'} id={'id?'}/>
    </>
  );
}

export default Peliculas;
