import React from 'react';
import useFetch from '../hooks/useFetch';

import DataContainer from './DataContainer';

const Series = () => {

  const popular = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');
  const topRated = useFetch('https://api.themoviedb.org/3/tv/top_rated?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');
  const onAir = useFetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&page=1');

  return (
    <>
      <DataContainer results={popular} titulo={'Series populares'} categoria={'tv'} tipo={'popular'}/>
      <DataContainer results={topRated} titulo={'Series con mejores críticas'} categoria={'tv'} tipo={'top_rated'}/>
      <DataContainer results={onAir} titulo={'Series al aire'} categoria={'tv'} tipo={'on_the_air'}/>
    </>
  );
}

export default Series;
