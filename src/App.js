import React from 'react';
import styled from 'styled-components';
import useFetch from './hooks/useFetch';

import Nav from './components/Nav';
import Recommended from './components/Recommended';
import Data from './components/Data';
import Footer from './components/Footer';

const Body = styled.div`
  color: #fff;
  background-color: #141414;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const App = () => {

  const movieFetch = useFetch('https://api.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4');
  const tvFetch = useFetch(`https://developers.themoviedb.org/3/trending//tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);

  console.log(movieFetch);

  return (
    <Body>
      <Nav />
      <Recommended />

      <Data results={movieFetch} />


      <Data />
      <Footer />
    </Body>
  );
}

export default App;



// import { ArrowLeft } from "styled-icons/feather/ArrowLeft";
// import { ArrowRight } from "styled-icons/feather/ArrowRight";
// import { Imdb } from "styled-icons/fa-brands/Imdb";
// import { FacebookSquare } from "styled-icons/fa-brands/FacebookSquare";
// import { Twitter } from "styled-icons/fa-brands/Twitter";
// import { Instagram } from "styled-icons/fa-brands/Instagram";
// import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
// import { Github } from "@styled-icons/fa-brands/Github";
// import { Mail } from "@styled-icons/feather/Mail";
// import { Link } from "styled-icons/fa-solid/Link";
// import { Star } from "styled-icons/material/Star";
// import { StarHalf } from "styled-icons/material/StarHalf";
// import { StarBorder } from "styled-icons/material/StarBorder";