import React from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import Recommended from './components/Recommended';
import Data from './components/Data';
import Footer from './components/Footer';
import useFetch from './hooks/useFetch';

const Body = styled.div`
  color: #fff;
  background-color: #141414;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const App = () => {

  const movieFetch = useFetch(`https://developers.themoviedb.org/3/trending/movie/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);
  const tvFetch = useFetch(`https://developers.themoviedb.org/3/trending//tv/week?api_key=cdce5dbaf6cab456cd34d73a9db1ffb4`);

  console.log(movieFetch);

  return (
    <Body>
      <Nav />
      <Recommended />
      <section className='card-container'>
      {movieFetch.map((tendencia) => (
          <Data key={tendencia.id} info={tendencia} />
        ))}
      </section>
      <Data />

<div>probando git</div>

      <Data />
      <Footer />
    </Body>
  );
}

export default App;
