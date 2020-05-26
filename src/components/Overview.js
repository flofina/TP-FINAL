import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

import OnScope from './OnScope';

const Overview = () => {

  const params = useParams();
console.log(params);


  // const onScopeData = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  
  return (
    <>
    <p>caca</p>
      {/* <OnScope results={onScopeData} /> */}
    </>
  );
}

export default Overview;
