import React from 'react';
import styled from 'styled-components';
import useFetch from './hooks/useFetch';

import Nav from './components/Nav';
import Recommended from './components/Recommended';
import DataContainer from './components/DataContainer';
import Footer from './components/Footer';

const Body = styled.div`
  color: #fff;
  background-color: #141414;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const App = () => {

  const recommendedFetch = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  const movieFetch = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const tvFetch = useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');

  return (
    <Body>
      <Nav />
      <Recommended results={recommendedFetch} />
      <DataContainer results={movieFetch} tipo='Películas' />
      <DataContainer results={tvFetch} tipo='Series' />
      <Footer />
    </Body>
  );
}

export default App;

// import { ArrowLeft } from "styled-icons/feather/ArrowLeft";
// import { ArrowRight } from "styled-icons/feather/ArrowRight";
// import { Imdb } from "styled-icons/fa-brands/Imdb";
// import { Link } from "styled-icons/fa-solid/Link";
// import { Star } from "styled-icons/material/Star";
// import { StarHalf } from "styled-icons/material/StarHalf";
// import { StarBorder } from "styled-icons/material/StarBorder";